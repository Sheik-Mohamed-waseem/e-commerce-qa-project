import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';

test('TC_LF_008 validate logging into account using invalid email and valid password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Navigate to the application
  await page.goto('https://naveenautomationlabs.com/opencart/');

  // Navigate to the Login page through the My Account menu
  await page.getByText('My Account').first().click();
  await page.getByRole('link', { name: 'Login' }).click();

  // Validate that the Email and Password fields are displayed and the user is on the Login page
  await expect(page.locator('#input-email')).toBeVisible();
  await expect(page.locator('#input-password')).toBeVisible();
  await expect(page).toHaveURL(/route=account\/login/);

  // Enter an invalid email address and valid password
  await loginPage.enterEmail('kps0090@gmail.com');
  await loginPage.enterPassword('tester619');
  await loginPage.clickLogin();

  // Validate that the login error message is displayed and the user remains on the Login page
  await expect(page.locator('div.alert.alert-danger')).toBeVisible();
  await expect(page).toHaveURL(/route=account\/login/);
  await page.close();
});