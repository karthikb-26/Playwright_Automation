//const {test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test';

test('Locator',async({page})=>{
    
    await page.goto("https://demoblaze.com/")

    //click on login button - property of the element as locator

    //await page.locator("id=login2").click();

    await page.click("id=login2");

    //provide username -used css of the element as locator

    //await page.locator('#loginusername').fill("karthik")

    await page.fill('#loginusername','pavanol');

    //provide password using css of the element as locator
    await page.fill("input[id='loginpassword']","test@123")

    //click on login button - using xpath

    await page.click("//button[@onclick='logIn()']")

    //verify the logout link is present or not

    const lolink = await page.locator("//a[text()='Log out']")

    await expect(lolink).toBeVisible();

    await page.close();

})