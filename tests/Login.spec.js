const { test, expect } = require('@playwright/test');
const credentials = require('../cred/creds.json'); 
const LoginPage = require('../pages/login'); 

test.describe('Login function test', () => {
    const { url } = credentials;

    test('Validate Login with Valid and Invalid Credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        // Test with valid credentials
        const { username: validUsername, password: validPassword } = credentials.valid;
        await loginPage.navigateToLoginPage(url); // Navigate to the login page
        await loginPage.login(validUsername, validPassword); // Perform login with valid credentials

        // Assert successful login
        const loginSuccess = await loginPage.isLoginSuccessful();
        expect(loginSuccess).toBe(true);

        // Logout after successful login
        await loginPage.logout();

        // Test with invalid credentials
        const { username: invalidUsername, password: invalidPassword } = credentials.invalid;
        await loginPage.navigateToLoginPage(url); // Navigate to the login page again
        await loginPage.login(invalidUsername, invalidPassword); // Perform login with invalid credentials

        // Assert failed login
        const loginFailed = await loginPage.isLoginFailed();
        expect(loginFailed).toBe(true);
    });
});
