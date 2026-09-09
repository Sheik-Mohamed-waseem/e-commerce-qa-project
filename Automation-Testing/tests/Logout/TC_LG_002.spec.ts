import{test,expect,Locator} from '@playwright/test';

test('TC_LG_002: Validate logging out from right column menu',async({page})=>{

    // Navigate to the applcation
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Open My Account and navigate to the login page
    await page.locator("//a[@title='My Account']").click();
    await page.getByRole('link',{name:'login'}).click();

    // Enter valid login credentials and click on Login
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('mirrorsedge007@gmail.com');
    await page.getByRole('textbox',{name:'Password'}).fill('catalyst007');
    await page.getByRole('button',{name:'Login'}).click();

    // Verify that the user is logged in successfully
    await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/account');

                   //actual test(Validate loggoing out from right column menu)

    // Click on the Logout link from the right column menu
    await page.locator('a').filter({ hasText: 'Logout' }).last().click();

    // Verify that the user is logged out successfully
    await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/logout'); 
    await page.close();
 
});