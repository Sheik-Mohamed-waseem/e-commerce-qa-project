import{test,expect,Locator} from '@playwright/test';
test('TC_ATC_003: validate adding product to the cart from searching result',async({page})=>{
    
    // Navigate to the application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Search mac product on search box field
    await page.getByRole('textbox',{name:'Search'}).fill('mac');
    await page.locator("//button[@class='btn btn-default btn-lg']").click();

    // Add the product to the cart
    await page.locator("//div[@id='product-search']//div[2]//div[1]//div[2]//div[2]//button[1]//span[1]").click();

    //validate the success message is displaying
    await expect(page.getByText('Success: You have added MacBook to your shopping cart! ×')).toBeVisible();

});