import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';

test('TC_LF_011: Validate login into account after exceeding the number of login attempts failed before session ends', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
  // Click on "My Account" and then "Login"
  await page.getByText('My Account').first().click();
  await page.getByRole('link', { name: 'Login' }).click();

 // Validate that the login page is displayed(email and password fields are visible)
  await expect(page.locator('#input-email')).toBeVisible();
  await expect(page.locator('#input-password')).toBeVisible();
  await expect(page).toHaveURL(/route=account\/login/);

  // Attempt to login with invalid credentials multiple times
  const invalidEmail = 'abdulbasith0007@gmail.com';
  const invalidPassword = 'abdulbasith66';

  for (let attempt = 1; attempt <= 7; attempt++) {
    await loginPage.enterEmail(invalidEmail);
    await loginPage.enterPassword(invalidPassword);
    await loginPage.clickLogin();

   // Verify that the error message is displayed and the user is still on the login page
    await expect(page.locator('div.alert.alert-danger')).toBeVisible();
    await expect(page).toHaveURL(/route=account\/login/);
  }
  // Attempt to login with valid credentials after exceeding the number of failed attempts
  await loginPage.enterEmail('tester619@gmail.com');
  await loginPage.enterPassword('tester619');
  await loginPage.clickLogin();

  // Validate that the user is either logged in successfully or still on the login page with an error message
  const loggedIn = await page.waitForURL(/route=account\/account/, { timeout: 5000 }).then(() => true).catch(() => false);

  if (loggedIn) {
    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
    return;
  }
 // If not logged in, validate that the user is still on the login page with an error message
  await expect(page).toHaveURL(/route=account\/login/);
  await expect(page.locator('div.alert.alert-danger')).toBeVisible();
  await page.close();
});
