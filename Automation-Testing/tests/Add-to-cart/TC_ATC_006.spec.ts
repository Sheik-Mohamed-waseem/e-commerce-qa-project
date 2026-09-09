import{test,expect,Locator} from '@playwright/test';
test('TC_ATC_006: validate adding the product to the cart from product compare page',async({page})=>{
    
    // Navigate to the application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
    
    // Select product comparison button on mac product
    await page.locator('div.button-group').locator('button').nth(2).click();

    // Validate success message displaying for adding the product
    await expect(page.getByText('Success: You have added MacBook to your product comparison!')).toBeVisible();

    // Click the product compare link in the success message to navigate to the product comapre page
    await page.getByRole('link', { name: 'product comparison' }).click();

    // Validate add the product to the cart 
    await page.locator("//input[@value='Add to Cart']").click();

    // Validate the product is sucessfully added to the cart
    await expect(page.getByText('Success: You have added MacBook to your shopping cart!')).toBeVisible();

});