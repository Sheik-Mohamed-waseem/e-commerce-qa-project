import{test,expect,Locator} from '@playwright/test';
test('validate the logout option is not displaying in right column menu before logging in to the account',async({page})=>{

    //Navigate to the login page
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    // Validate that the Logout option is not visible in the right column menu before logging in
    const logoutLink = await page.locator('a').filter({ hasText: 'Logout' }).first();
    await expect(logoutLink).not.toBeVisible();
    

});