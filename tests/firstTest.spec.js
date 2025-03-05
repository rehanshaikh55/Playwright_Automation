const {test,expect} = require('@playwright/test');
const { log } = require('console');
test(' my first test ', async({page})=>{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",3000);
  await expect(page).toHaveTitle("OrangeHRM")
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveTitle("OrangeHRM")
   
})