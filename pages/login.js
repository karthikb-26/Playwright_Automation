class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = 'input[name="username"]'; // Selector for username field
        this.passwordInput = 'input[name="password"]'; // Selector for password field
        this.loginButton = 'button[type="submit"]'; // Selector for login button
        this.logoutButton = "//i[contains(text(),' Logout')]";// Selector for logout button
        this.successMessage = '.flash.success'; // Selector for success message
        this.errorMessage = '.flash.error'; // Selector for error message
    }

    async navigateToLoginPage(url) {
        await this.page.goto(url); // Navigate to the login page
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username); // Fill username
        await this.page.fill(this.passwordInput, password); // Fill password
        await this.page.click(this.loginButton); // Click login button
    }

    async isUsernameFieldVisible() {
        return await this.page.isVisible(this.usernameInput); // Check visibility of username field
    }

    async isLoginSuccessful() {
        return await this.page.isVisible(this.successMessage); // Check if success message is displayed
    }

    async isLoginFailed() {
        return await this.page.isVisible(this.errorMessage); // Check if error message is displayed
    }

    async logout() {
        await this.page.click(this.logoutButton); // Click login button
    }
}

module.exports = LoginPage;