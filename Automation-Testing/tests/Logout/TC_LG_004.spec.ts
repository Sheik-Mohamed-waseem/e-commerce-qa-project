import{test,expect,Locator} from '@playwright/test';

test('Validate loggoing out from the account',async({page})=>{

    //1. Login to the application with valid credentials

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
                         
              
  //2. Actual test (Validate logout instructional message is displayed after logging out from the account)

 // Open My Account and click on the Logout link
    await page.locator("//a[@title='My Account']").click();
    await page.locator('a').filter({ hasText: 'Logout' }).first().click();

 // Verify that the logout instructional message is displayed after logging out
    const logoutmessage=await page.getByText('You have been logged off your account. It is now safe to leave the computer.');
    await expect(logoutmessage).toBeVisible();
    await page.close();

});