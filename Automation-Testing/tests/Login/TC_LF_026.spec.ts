import { test, expect, devices,Locator } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';

// Define a test that will run on multiple browsers

for (const browserName of ['chromium', 'firefox', 'webkit']) {
  test(`TC_LF_026 validate the login page is supported in ${browserName}`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Navigate to the application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Select my account drop down menu and click on login option
    await page.getByText('My Account').first().click();
    await page.getByRole('link', { name: 'Login' }).click();

    // Enter valid credentials and click the login button
    await loginPage.enterEmail('mirrorsedge007@gmail.com');
    await loginPage.enterPassword('catalyst007');
    await loginPage.clickLogin();
    await page.waitForTimeout(2000); // Wait for 2 seconds to allow the page to load
  
    //Validate that the user is logged in successfully
    await expect(page).toHaveURL("https://naveenautomationlabs.com/opencart/index.php?route=account/account");
    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
    await page.close();
  });
}
