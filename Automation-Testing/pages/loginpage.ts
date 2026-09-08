import { Locator, Page } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly warningMessage: Locator;

  private static readonly LOGIN_URL = 'https://naveenautomationlabs.com/opencart/index.php?route=account/login';

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#input-email');
    this.passwordInput = page.locator('#input-password');
    this.loginButton = page.locator('input[type="submit"][value="Login"]');
    this.warningMessage = page.locator('div.alert.alert-danger');
  }

  /**
   * Navigate directly to the OpenCart account login page.
   */
  async navigateToLogin() {
    await this.page.goto(LoginPage.LOGIN_URL);
  }

  /**
   * Enter the email address for login.
   * @param email User email address.
   */
  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  /**
   * Enter the password for login.
   * @param password User password.
   */
  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  /**
   * Click the login button to submit credentials.
   */
  async clickLogin() {
    await this.loginButton.click();
  }

  /**
   * Perform the full login flow using the provided credentials.
   * @param email User email address.
   * @param password User password.
   */
  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  /**
   * Get the warning message shown after a failed login attempt.
   * @returns Warning text if visible, otherwise an empty string.
   */
  async getLoginWarning() {
    if (await this.warningMessage.isVisible()) {
      return this.warningMessage.textContent();
    }
    return '';
  }
}
