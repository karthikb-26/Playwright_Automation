import {test, expect} from '@playwright/test'

//const {test, expect} = require('@playwrigth/test');

test('LocateMultipleLocators', async ({page})=>{
    await page.goto('https://demoblaze.com/')

    const links= await page.$$("a");

    for(const link of links) {
        const linkText=await link.textContent();

        console.log(linkText);
    }

    const products =await page.$$("//div[@id='tbodyid']//div/h4/a");

    for(const product of products) {

        const listProduct =await product.textContent();

        console.log(listProduct);
    }

})