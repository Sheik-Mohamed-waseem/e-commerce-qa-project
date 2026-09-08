import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';

test('TC_LF_007 validate the forgot password link is displaying and working in login page', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Navigate to the application
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

  // Navigate to the Login page through the My Account menu
  await page.getByText('My Account').first().click();
  await page.getByRole('link', { name: 'Login' }).click();

  // Validate that the Forgot Password link is displayed and accessible on the Login page
  const forgotPasswordLink = page.locator('#content').getByRole('link', { name: /forgotten password/i }).first();
  await expect(forgotPasswordLink).toBeVisible();

  // Click the Forgot Password link to navigate to the password recovery page
  await forgotPasswordLink.click();

  // Validate that the user is navigated to the Forgotten Password page
  await expect(page).toHaveURL(/route=account\/forgotten/);
  await page.close();

});