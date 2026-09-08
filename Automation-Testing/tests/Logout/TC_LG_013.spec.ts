import{test,expect,Locator}from '@playwright/test';
test('validate logout from account then login immediately', async ({ page }) => {

    // Navigate to the applcation
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Open My Account and navigate to the Login page
    await page.locator("//a[@title='My Account']").click();
    await page.getByRole('link',{name:'login'}).click();

    // Enter valid credentials and click on Login
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('tester619@gmail.com');
    await page.getByRole('textbox',{name:'Password'}).fill('tester619');
    await page.getByRole('button',{name:'Login'}).click();

    // Validate that the user is logged in successfully
    await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/account');


    // Logout from the account and validate the user is logged out successfully
    await page.locator("//a[@title='My Account']").click();
    await page.locator('a').filter({ hasText: 'Logout' }).first().click();

    // Validate that the user is logged out successfully
    await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/logout');
    await page.getByRole('link', { name: 'Continue' }).click();

                           
              // Actual test (validate logout from account then login immediately)

    // Login again immediately after logging out and validate the user is logged in successfully
    await page.locator("//a[@title='My Account']").click();
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('mirrorsedge007@gmail.com');
    await page.getByRole('textbox',{name:'Password'}).fill('catalyst007');
    await page.getByRole('button',{name:'Login'}).click();

    // Validate that the user is logged in successfully
    await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/account'); 
    await page.close();
});