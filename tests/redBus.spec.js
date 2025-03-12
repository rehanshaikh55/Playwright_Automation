import {test} from '@playwright/test'

test('auto suggestion box in red bus', async ({page}) => { 

  await page.goto('https://www.redbus.in/')
  await page.fill("//input[@id='src']",'ahmedabad')
  await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

  const options = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
  for (let op of options){
    const value = await op.textContent();
    console.log(value);
    if(value.includes === "Ahmedabad"){
        op.click();
    }
    
  }
await page.waitForTimeout(3000)
 })