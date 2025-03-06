const { test, expect } = require("@playwright/test");
const { log } = require("console");
test(" my first test ", async ({ page, context }) => {
  await context.tracing.start({ snapshots: true, screenshots: true });
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    3000
  );
  const logoImage = await page.locator("//img[@alt='company-branding']");
  await expect(logoImage).toBeHidden();

  await expect(page).toHaveTitle("OrangeHRM");
  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page).toHaveTitle("OrangeHRM");
  await page.getByRole("link", { name: "PIM" }).click();
  await page.locator("form i").nth(2).click();
  await page.getByText("Automaton Tester").click();
  await context.tracing.stop({ path: "firstTest_trace.zip" });
  page.close();
});
