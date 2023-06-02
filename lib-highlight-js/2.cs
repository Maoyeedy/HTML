if (Input.GetKey(KeyCode.W) || Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.S) || Input.GetKey(KeyCode.D))
if (Input.GetKeyDown(KeyCode.LeftShift) && canRun)
ZoomOut();

if (Input.GetMouseButtonDown(1) && !isZoomingIn)
{
isZoomingIn = true;
ZoomIn();
Invoke(nameof(ZoomInFinished), zoomDuration * zoomInFactor);
}

if (Input.GetKey(KeyCode.W) || Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.S) || Input.GetKey(KeyCode.D))
if (Input.GetKeyDown(KeyCode.LeftShift) && canRun)
ZoomOut();

if (Input.GetMouseButtonDown(1) && !isZoomingIn)
{
isZoomingIn = true;
ZoomIn();
Invoke(nameof(ZoomInFinished), zoomDuration * zoomInFactor);
}