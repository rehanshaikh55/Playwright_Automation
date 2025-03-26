import {expect, test} from '@playwright/test'

test('iFrame handle', async ({page}) => { 


   await page.goto('https://ui.vision/demo/webtest/frames/')
   //const frames = awaits page.frames()
   //console.log(frames.length);
   const frame1 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
   await frame1.fill("//input[@name='mytext1']","rehan")
   await page.waitForTimeout(3000)
   const frame2 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_2.html"})
   await frame2.fill("//input[@name='mytext2']","test")
   
   await page.waitForTimeout(3000)
 })