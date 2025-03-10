import {test} from '@playwright/test'

test('should select multiple options from dropdown', async ({page}) => {  
 await page.goto('https://testautomationpractice.blogspot.com/')
 await page.selectOption('#colors',["Red","Green"])
 await page.locator('#datepicker').click();
  await page.locator('#datepicker').fill('03/01/2025');
  await page.locator('#datepicker').press('Enter');
 await page.click('#txtDate')
 await page.selectOption("//select[@aria-label='Select month']",'May')
 await page.selectOption("//select[@aria-label='Select year']",'2015')
 await page.click("//a[normalize-space()='10']")
 
 await page.waitForTimeout(5000)
})
