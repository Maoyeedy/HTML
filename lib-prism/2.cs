using UnityEngine;
using DG.Tweening;

public class CameraZoom : MonoBehaviour
{
    [Header("FOV")] 
    public float fovRange = 8f;
    public float fovDelta = 4f;

    [Header("Camera Distance")] 
    public float distanceRange = 0.25f;
    public float distanceDelta = 0.2f;

    [Header("Factors")] 
    public float zoomDuration = 0.3f;
    public float zoomInFactor = 1.5f;
    public float rightOffsetFactor = 0.3f;
    public float scrollFactor = 0.025f;

    private vThirdPersonCamera cam;
    private float FOV, FOVmin, FOVmax, FOVdefault, tempFOV, tempDistance, defaultDistance, defaultRightOffset;

    private void Start()
    {
        cam = GetComponent<vThirdPersonCamera>();
        defaultDistance = cam.defaultDistance;
        tempDistance = defaultDistance;
        defaultRightOffset = cam.rightOffset;

        FOV = GetComponent<Camera>().fieldOfView;
        FOVdefault = FOV;
        tempFOV = FOV;
        SetMinMax();
    }

    private void Update()
    {
        if (Input.GetKey(KeyCode.W) || Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.S) || Input.GetKey(KeyCode.D))
            if (Input.GetKeyDown(KeyCode.LeftShift))
                ZoomOut();

        if (Input.GetKeyUp(KeyCode.LeftShift))
            ZoomToDefault();

        if (Input.GetMouseButtonDown(1))
            ZoomIn();

        if (Input.GetMouseButtonUp(1))
            ZoomToDefault();

        if (Input.mouseScrollDelta.y != 0)
            ZoomOnMouseScroll();
    }

    private void ZoomIn()
    {
        tempFOV = FOV;
        FOVmin -= fovDelta * 2f;

        DOTween.To(() => FOV, x => FOV = x, FOV - fovDelta * 2f, zoomDuration * zoomInFactor)
            .OnUpdate(() => GetComponent<Camera>().fieldOfView = FOV);

        DOTween.To(() => tempDistance, x => tempDistance = x, tempDistance - distanceDelta * 1.75f, zoomDuration * zoomInFactor)
            .OnUpdate(() => cam.defaultDistance = tempDistance);

        DOTween.To(() => defaultRightOffset, x => defaultRightOffset = x, defaultRightOffset + distanceDelta * rightOffsetFactor, zoomDuration * zoomInFactor)
            .OnUpdate(() => cam.rightOffset = defaultRightOffset);
    }

    private void ZoomOut()
    {
        tempFOV = FOV;
        FOVmax += fovDelta;

        DOTween.To(() => FOV, x => FOV = x, FOV + fovDelta, zoomDuration)
            .OnUpdate(() => GetComponent<Camera>().fieldOfView = FOV);

        DOTween.To(() => tempDistance, x => tempDistance = x, tempDistance - distanceDelta, zoomDuration)
            .OnUpdate(() => cam.defaultDistance = tempDistance);
    }

    private void ZoomToDefault()
    {
        DOTween.To(() => FOV, x => FOV = x, tempFOV, zoomDuration)
            .OnUpdate(() => GetComponent<Camera>().fieldOfView = FOV);

        DOTween.To(() => cam.defaultDistance, x => cam.defaultDistance = x, tempDistance, zoomDuration)
            .OnUpdate(() => cam.defaultDistance = tempDistance);

        DOTween.To(() => cam.rightOffset, x => cam.rightOffset = x, defaultRightOffset, zoomDuration).OnUpdate(() => cam.rightOffset = defaultRightOffset);
        SetMinMax();
    }

    private void ZoomOnMouseScroll()
    {
        float scrollDelta = Input.mouseScrollDelta.y;

        tempDistance -= scrollDelta * scrollFactor;
        tempDistance = Mathf.Clamp(tempDistance, defaultDistance - distanceRange, defaultDistance + distanceRange);
        cam.defaultDistance = tempDistance;

        FOV -= scrollDelta * scrollFactor * 20;
        FOV = Mathf.Clamp(FOV, FOVmin, FOVmax);
        GetComponent<Camera>().fieldOfView = FOV;
    }

    private void SetMinMax()
    {
        FOVmax = FOVdefault + fovRange;
        FOVmin = FOVdefault - fovRange * 0.75f;
    }
}
