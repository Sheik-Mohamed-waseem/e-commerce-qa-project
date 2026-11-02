import{test,expect,Locator} from '@playwright/test';
test('TC_ATC_001: validate adding a product to the cart from home page',async({page})=>{
    
    // Navigate to the home page application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Add the product to the cart
    await page.locator('div.button-group').locator('button').nth(0).click();

    // Validate the success message is displaying 
    await expect(page.getByText('Success: You have added MacBook to your shopping cart! ×')).toBeVisible();
    await page.getByText('shopping cart', { exact: true }).click();

    // Validate the product is added to the cart
    await expect(page.locator(`//tr[td[3][contains(., 'Product 16')]]//td[2]//a`)).toHaveText('MacBook');
    

});