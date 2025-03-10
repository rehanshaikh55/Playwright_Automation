import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.spicejet.com/');
  await page.getByTestId('to-testID-destination').getByRole('textbox').click();
  await page.getByTestId('to-testID-destination').getByRole('textbox').fill('dubai');
  await page.getByTestId('to-testID-destination').getByRole('textbox').press('Enter');
  await page.getByText('Dubai, United Arab EmiratesDubai International AirportDXB').click();
  await page.getByTestId('undefined-month-March-2025').getByTestId('undefined-calendar-day-21').getByText('21').click();
  await page.getByText('Family & Friends').click();
  await page.getByTestId('home-page-flight-cta').click();
  await page.getByTestId('home-page-travellers').locator('div').nth(1).click();
  await page.getByTestId('Adult-testID-plus-one-cta').getByTestId('svg-img').click();
  await page.getByTestId('Adult-testID-plus-one-cta').getByTestId('svg-img').click();
  await page.getByTestId('home-page-flight-cta').click();
  await page.getByRole('img').locator('rect').click();
  await page.locator('div').filter({ hasText: 'Family and Friends Discount BookingsFamily and Friends\' discount is valid for a' }).nth(2).click();
});