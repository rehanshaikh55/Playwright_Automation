import {test,expect} from '@playwright/test'

test('Sal website links',async({page})=>{
     await  page.goto("https://www.sal.edu.in/")
     const links = await page.$$eval('a', anchors => anchors.map(a => a.href));
     
     //// Print each link
     console.log('Collected Links:', links);
}) 