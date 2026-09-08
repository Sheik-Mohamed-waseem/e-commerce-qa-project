import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';

test('TC_LF_004 validate logging into account using valid credential', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Navigate to the application
  await page.goto('https://naveenautomationlabs.com/opencart/'); 
 
  // Navigate to the Login page through the My Account menu
  await page.getByText('My Account').first().click(); 
  await page.getByRole('link', { name: 'Login' }).click(); 
 
  // Validate that the Email field is displayed and the user is on the Login page
  await expect(page.locator('#input-email')).toBeVisible(); 
  await expect(page).toHaveURL(/route=account\/login/); 
 
  // Enter valid login credentials
  await loginPage.enterEmail('mirrorsedge007@gmail.com'); 
  await loginPage.enterPassword('catalyst007'); 
  await loginPage.clickLogin(); 
 
  // Validate that the user is successfully logged in and navigated to the Account page
  await expect(page).toHaveURL(/route=account\/account/); 
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible(); 
  await page.close();
});