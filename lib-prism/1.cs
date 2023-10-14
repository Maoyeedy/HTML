using System;
using System.IO;
using UnityEngine;

public class ScreenshotScript : MonoBehaviour
{
    public string folderPath = Path.Combine(Application.dataPath, "..", "SampleRecordings");
    public KeyCode captureKey = KeyCode.Tab;

    private void Start()
    {
        Directory.CreateDirectory(folderPath);
    }

    private void Update()
    {
        if (!Input.GetKeyDown(captureKey)) return;
        string filename = DateTime.Now.ToString("yyyy.MM.dd-HH.mm.ss") + ".png";
        string filePath = Path.Combine(folderPath, filename);

        ScreenCapture.CaptureScreenshot(filePath);
        print("Screenshot saved: " + filePath);
    }
}