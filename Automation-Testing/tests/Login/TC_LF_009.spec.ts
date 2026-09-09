import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';

test('TC_LF_009: Validate the number of login attempt fails', async ({ page }) => {
  const loginPage = new LoginPage(page);
 
  // Navigate to the application
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
  
  //Select my account drop down menu and click on login option
  await page.getByText('My Account').first().click();
  await page.getByRole('link', { name: 'Login' }).click();

  // Validate that the email and password input fields are visible and the URL is correct
  await expect(page.locator('#input-email')).toBeVisible();
  await expect(page.locator('#input-password')).toBeVisible();
  await expect(page).toHaveURL(/route=account\/login/);

  // Enter valid email and invalid password, then click the login button multiple times
  await loginPage.enterEmail('tester619@gmail.com');
  await loginPage.enterPassword('sheikwaseem6');

  // Click the login button 7 times to simulate multiple failed attempts
  for (let i = 0; i < 7; i++) {
    await loginPage.clickLogin();
    // small pause to allow page to process and show warning if any
    await page.waitForTimeout(250);
  }

  // Validate a warning message is shown after repeated failed attempts
  await expect(page.locator('div.alert.alert-danger')).toBeVisible();
  const warning = await loginPage.getLoginWarning();
  expect(warning).not.toBe('');
  await page.close();
});
