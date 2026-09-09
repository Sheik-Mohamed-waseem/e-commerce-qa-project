import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';

test('TC_LF_013: Validate placeholder is visible in email field and password field', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  //Navigate to the application
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

  // Select my account drop down menu and click on login option
  await page.getByText('My Account').first().click();
  await page.getByRole('link', { name: 'Login' }).click();

  // Validate that the email and password input fields are visible and the URL is correct
  await expect(page).toHaveURL(/route=account\/login/);
  await expect(page.locator('#input-email')).toBeVisible();
  await expect(page.locator('#input-password')).toBeVisible();

  // Validate that the placeholder text is visible in the email and password input fields
  await expect(page.locator('#input-email')).toHaveAttribute('placeholder', 'E-Mail Address');
  await expect(page.locator('#input-password')).toHaveAttribute('placeholder', 'Password');
  await page.close();
});
