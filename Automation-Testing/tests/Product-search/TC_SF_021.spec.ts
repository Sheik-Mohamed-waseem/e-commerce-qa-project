import{test,expect,Locator} from '@playwright/test';

test('Validate by searching a product after login',async({page})=>{

    // Navigate to the application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    
    // Login to the application - Entering valid credential
    await page.getByPlaceholder('E-Mail Address').fill('abdulbasith619@gmail.com');
    await page.getByPlaceholder('Password').fill('abdulbasith619');
    await page.getByRole('button', { name: 'Login' }).click();

    // Search mac product on search box field
    await page.getByPlaceholder('Search').fill('mac');
    await page.locator("//button[@class='btn btn-default btn-lg']").click();
    
    // Validate its navigated to the search result page
    await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=product/search&search=mac');

});