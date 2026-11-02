
import {Page,Locator } from '@playwright/test';
import loginData from '../testdata/logindata';

export class LoginPage {

    private readonly page: Page;

    // Navigation locators
    private readonly myAccountMenu: Locator;
    private readonly loginMenuLink: Locator;
    private readonly registerMenuLink: Locator;
        private readonly rightColumnLoginLink: Locator;

    // Login form locators
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly warningMessage: Locator;

    // Additional locators
    private readonly forgotPasswordLink: Locator;
    private readonly logoutLink: Locator;
    private readonly continueButton: Locator;

    // Application URLs
    private static readonly HOME_URL =
        'https://naveenautomationlabs.com/opencart/index.php?route=common/home';

    private static readonly LOGIN_URL =
        'https://naveenautomationlabs.com/opencart/index.php?route=account/login';

    constructor(page: Page) {

        this.page = page;

        // Navigation locators
        this.myAccountMenu = page.locator('a[title="My Account"]');

        this.loginMenuLink = page.locator('#top-links')
            .locator('a[href*="route=account/login"]');

        this.registerMenuLink = page.locator('#top-links')
            .locator('a[href*="route=account/register"]');

        this.rightColumnLoginLink = page.locator('#column-right')
            .locator('a[href*="route=account/login"]');

        // Login form locators
        this.emailInput = page.locator('#input-email');
        this.passwordInput = page.locator('#input-password');
        this.loginButton = page.locator('input[type="submit"][value="Login"]');
        this.warningMessage = page.locator('div.alert.alert-danger');

        // Additional locators
        this.forgotPasswordLink = page.locator('#content')
            .getByRole('link', { name: /forgotten password/i });

        this.continueButton = page.getByRole('link', {
          name: 'Continue',
          exact: true
});

        this.logoutLink = page.locator('#top-links').getByRole('link', {
        name: 'Logout',
        exact: true
});
    }

    // Navigation methods

    async navigateToHome() {
        await this.page.goto(LoginPage.HOME_URL);
    }

    async navigateToLogin() {
        await this.page.goto(LoginPage.LOGIN_URL);
    }

    async clickMyAccount() {
        await this.myAccountMenu.click();
    }

    async clickLoginFromMenu() {
        await this.loginMenuLink.first().click();
    }

    async clickRegisterFromMenu() {
        await this.registerMenuLink.first().click();
    }

    async clickLoginFromRightColumn() {
        await this.rightColumnLoginLink.click();
    }

    async navigateToLoginViaMyAccount() {
        await this.navigateToHome();
        await this.clickMyAccount();
        await this.clickLoginFromMenu();
    }

    // Login form methods

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    // Field validation methods

    async isEmailVisible(): Promise<boolean> {
        return await this.emailInput.isVisible();
    }

    async isPasswordVisible(): Promise<boolean> {
        return await this.passwordInput.isVisible();
    }

    async getEmailPlaceholder(): Promise<string | null> {
        return await this.emailInput.getAttribute('placeholder');
    }

    async getPasswordPlaceholder(): Promise<string | null> {
        return await this.passwordInput.getAttribute('placeholder');
    }

    // Warning message methods

    async isWarningVisible(): Promise<boolean> {
        return await this.warningMessage.isVisible();
    }

    async waitForLoginWarning() {
        await this.warningMessage.waitFor({
            state: 'visible'
        });
    }

    async getLoginWarning(): Promise<string> {
        await this.warningMessage.waitFor({
            state: 'visible'
        });

        return (await this.warningMessage.innerText()).trim();
    }

    // Forgot password methods

    async isForgotPasswordVisible(): Promise<boolean> {
        return await this.forgotPasswordLink.isVisible();
    }

    async clickForgotPassword() {
        await this.forgotPasswordLink.click();
    }

    // Account validation methods

    async isLogoutVisible(): Promise<boolean> {
        return await this.logoutLink.isVisible();
    }

    async getPasswordFieldType(): Promise<string | null> {
    return await this.passwordInput.getAttribute('type');
}

async clickLogout() {
    await this.logoutLink.click();
}

async clickContinue() {
    await this.continueButton.click();
}

async goBack() {
    await this.page.goBack();
}

async isPasswordHidden(): Promise<boolean> {
    return await this.passwordInput.isHidden();
}

}
