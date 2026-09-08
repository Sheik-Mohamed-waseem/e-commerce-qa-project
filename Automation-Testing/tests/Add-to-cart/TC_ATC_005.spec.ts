import{test,expect,Locator} from '@playwright/test';
test('TC_ATC_005: validate add to cart functionality from top navigation menu',async({page})=>{
    
    // Navigate to the application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Open the column desktop menu and select mac option
    await page.getByText('Desktops', { exact: true }).click();
    await page.getByRole('link', { name: 'Mac (1)' }).click();

    // Validate add the product to the cart 
    await page.locator('span:has-text("ADD TO CART")').click();
    await expect(page.getByText('Success: You have added iMac to your shopping cart!')).toBeVisible();

});