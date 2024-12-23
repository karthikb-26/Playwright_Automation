import { test, expect } from '@playwright/test';
import { url, valid } from './creds.json';

test('Login', async({page})=> {

    await page.goto(url);

    await page.fill("input[id='username']", valid.username);

    await page.fill("input[id='password']", valid.password);

    await page.click("//button[@type='submit']");

    await page.waitForTimeout(2000);
    




})