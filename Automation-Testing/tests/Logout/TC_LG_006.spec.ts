import{test,expect,Locator} from '@playwright/test';

test('Validate the logout option is not displayed in my account drop down menu before logging',async({page})=>{

    // Navigate to the applcation
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home'); 
    // Open My Account drop down menu
    await page.locator("//a[@title='My Account']").click(); 
    // Validate that the Logout option is not displayed before login
    const logoutLink = await page.locator('a').filter({ hasText: 'Logout' }).first(); 
    await expect(logoutLink).not.toBeVisible(); 
 
});