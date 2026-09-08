import { test, expect } from '@playwright/test';

test(' TC_LF_002 Validate the mandatory field label is displaying properly in login page', async ({ page }) => {
  // Navigate to the application
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

  // Navigate to the Login page through the My Account menu
  await page.getByText('My Account').first().click();
  await page.getByRole('link', { name: 'Login' }).click();

  // Validate that the user is navigated to the Login page
  await expect(page).toHaveURL(/route=account\/login/);

  // Validate that the Email and Password fields are displayed
  await expect(page.locator('#input-email')).toBeVisible();
  await expect(page.locator('#input-password')).toBeVisible();

  // Validate that the Email and Password fields display the expected placeholder text
  await expect(page.locator('#input-email')).toHaveAttribute('placeholder', 'E-Mail Address');
  await expect(page.locator('#input-password')).toHaveAttribute('placeholder', 'Password');
  await page.close();
});