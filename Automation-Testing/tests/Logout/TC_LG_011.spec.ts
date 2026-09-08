import { test, expect } from '@playwright/test';

test('validate the logout functionality is working on different environments(chrome,firefox,safari)', async ({ page }) => {
   
    // Open the OpenCart home page before starting the logout flow.
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Open the login page and sign in with valid credentials.
    await page.locator("//a[@title='My Account']").click();
    await page.getByRole('link', { name: 'login' }).click();
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('mirrorsedge007@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('catalyst007');
    await page.getByRole('button', { name: 'Login' }).click();

    // Validate that the user is logged in successfully.
    await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/account');

    // Click the logout option from the account menu.
    await page.locator("//a[@title='My Account']").click();
    await page.locator('a').filter({ hasText: 'Logout' }).first().click();

    // Validate that the logout action completed successfully.
    await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/logout');

    await page.close();

});