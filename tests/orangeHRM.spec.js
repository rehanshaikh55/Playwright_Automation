import {test} from '@playwright/test'
import LoginPage from '../pages/loginpage';

test('orangeHRM login with POM', async ({page}) => {

const login= new LoginPage(page);
await login.gotologinPage();
await login.login('Admin','admin123');
await page.waitForTimeout(1000);
await page.getByRole('link', { name: 'PIM' }).click();

await page.getByRole('textbox', { name: 'Type for hints...' }).first().fill('rehan');

await page.getByRole('textbox').nth(2).fill('123');
await page.locator('form i').first().click();
await page.getByRole('option', { name: 'Freelance' }).click();
await page.locator('div').filter({ hasText: /^Current Employees Only$/ }).nth(2).click();
await page.getByText('Current and Past Employees').click();
await page.locator('form i').nth(2).click();
await page.getByRole('option', { name: 'Automaton Tester' }).click();
await page.locator('form i').nth(3).click();
await page.getByRole('option', { name: 'OrangeHRM' }).click();
await page.getByRole('textbox', { name: 'Type for hints...' }).nth(1).click();
await page.getByRole('textbox', { name: 'Type for hints...' }).nth(1).fill('abc');
await page.getByRole('option', { name: 'abc xyz' }).click();
await page.getByRole('button', { name: 'Search' }).click();
await page.getByRole('button', { name: 'Search' }).click();
await page.waitForTimeout(3000);
})