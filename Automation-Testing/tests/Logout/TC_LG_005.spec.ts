import{test,expect,Locator} from '@playwright/test';

test('TC_LG_005: Validate application the login session and close the browser without logout',async({browser})=>{

    // Create browser context and open the application
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to the applcation
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Login to the application with valid credentials
    await page.locator("//a[@title='My Account']").click();
    await page.getByRole('link',{name:'Login'}).click();
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('mirrorsedge007@gmail.com');
    await page.getByRole('textbox',{name:'Password'}).fill('catalyst007');
    await page.getByRole('button',{name:'Login'}).click();

    // Validate that the user is logged in successfully
    await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/account');

    // Save the current login session
    await context.storageState({path:'playwright/.auth/auth.json'});

    // Close the browser without logging out
    await context.close();

    // Open a new browser context with the saved login session
    const newContext = await browser.newContext({
        storageState:'playwright/.auth/auth.json'
    });
    const newPage = await newContext.newPage();

    await newPage.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Open My Account and verify that the Logout option is available
    await newPage.locator("//a[@title='My Account']").click();
    const logoutoption=await newPage.locator('a').filter({ hasText: 'Logout' }).first();
    await expect(logoutoption).toBeVisible();

    // Logout from the account
    await logoutoption.click();

    // Validate that the user is logged out successfully
    await expect(newPage).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/logout');

    // Validate the logout confirmation message
    const logoutmessage=await newPage.getByText('You have been logged off your account. It is now safe to leave the computer.');
    await expect(logoutmessage).toBeVisible();

    await newContext.close();
    await page.close();

});