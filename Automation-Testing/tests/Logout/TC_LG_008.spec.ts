import{test,expect,Locator} from '@playwright/test';

test('validate the log out option is not displaying in my account drop down menu after logout ',async({page})=>{

    //Navigate to the applcation
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Open My Account and navigate to the Login page
    await page.locator("//a[@title='My Account']").click();
    await page.getByRole('link',{name:'login'}).click();

    // Enter valid credentials and click on Login
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('mirrorsedge007@gmail.com');
    await page.getByRole('textbox',{name:'Password'}).fill('catalyst007');
    await page.getByRole('button',{name:'Login'}).click();

    // Validate that the user is logged in successfully
    await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/account');
                         
    
    // Open My Account and click on the Logout option
    await page.locator("//a[@title='My Account']").click();
    await page.locator('a').filter({ hasText: 'Logout' }).first().click();

    // Validate that the user is logged out successfully
    await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/logout');
    await page.getByRole('link', { name: 'Continue' }).click();


    // Actual test (validate the Logout option is not displayed in My Account drop down menu after logout)

    // Validate that the Logout option is not visible after logging out
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
    await page.locator("//a[@title='My Account']").click();
    const logoutLink = await page.locator('a').filter({ hasText: 'Logout' }).first();
    await expect(logoutLink).not.toBeVisible();
    await page.close();

});