import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';

test('TC_LF_005 validate logging into account using invalid credential', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Navigate to the application
  await page.goto('https://naveenautomationlabs.com/opencart/');

  // Navigate to the Login page through the My Account menu
  await page.getByText('My Account').first().click();
  await page.getByRole('link', { name: 'Login' }).click();

  // Validate that the Email field is displayed and the user is on the Login page
  await expect(page.locator('#input-email')).toBeVisible();
  await expect(page).toHaveURL(/route=account\/login/);

  // Enter invalid login credentials
  await loginPage.enterEmail('abdulbasith0007@gmail.com');
  await loginPage.enterPassword('abdulbasith6767');
  await loginPage.clickLogin();

  // Validate that the login error message is displayed
  await expect(page.locator('div.alert.alert-danger')).toBeVisible();

  // Validate that the user remains on the Login page after unsuccessful login
  await expect(page).toHaveURL(/route=account\/login/);
  await page.close();
});