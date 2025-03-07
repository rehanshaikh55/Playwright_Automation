import { test, expect } from "@playwright/test";

test("soft assertion", async ({ page }) => {
  await page.goto("https://dotpitchtechnologies.com/");
  await expect.soft(page).toHaveTitle('Professional software development Services|DotPitch Technologiess');
  await expect(page).toHaveURL('https://dotpitchtechnologies.com/');
  await expect(page.locator("//a[@class='navbar-brand']//img")).toBeVisible();
});
