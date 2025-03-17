const { test, expect } = require('@playwright/test');

test('upload a file', async ({ page }) => {
    // Navigate to the page with the file input
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Locate the file input element
    const fileInput = await page.locator("//input[@id='singleFileInput']");

    // Upload the file
    await fileInput.setInputFiles('C:/Users/shaik/OneDrive/Desktop/DotPitch/playwright/day1/tests/upload/demoFile.txt');

    await page.locator("//button[normalize-space()='Upload Single File']").click();
    const uploadedFileName = await page.locator("//p[@id='singleFileStatus']").innerText();
    expect(uploadedFileName).toContain("demoFile.txt");
    await page.waitForTimeout(5000);
});

test.only('upload multiple files', async ({ page }) => {
    // Navigate to the page with the file input
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Locate the file input element
    const fileInput = await page.locator("//input[@id='multipleFilesInput']");

    // Upload multiple files
    await fileInput.setInputFiles([
        'C:/Users/shaik/OneDrive/Desktop/DotPitch/playwright/day1/tests/upload/demoFile1.txt',
        'C:/Users/shaik/OneDrive/Desktop/DotPitch/playwright/day1/tests/upload/demoFile2.txt'
    ]);

    await page.locator("//button[normalize-space()='Upload Multiple Files']").click();
    const uploadedFileNames = await page.locator("//p[@id='multipleFilesStatus']").innerText();
    expect(uploadedFileNames).toContain("demoFile1.txt");
    expect(uploadedFileNames).toContain("demoFile2.txt");
    await page.waitForTimeout(5000);
});