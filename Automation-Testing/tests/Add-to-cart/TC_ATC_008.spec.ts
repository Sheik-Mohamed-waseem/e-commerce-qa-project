import{test,expect,Locator} from '@playwright/test';
test('TC_ATC_008: validating adding the number of quantity of product from product display page',async({page})=>{
    
    // Navigate to the product page
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=41&search=mac');
    
    // Select a number of quantity and add the product to the cart
    await page.locator("//input[@id='input-quantity']").fill('5');
    await page.locator("//button[@id='button-cart']").click();

    // Validate the product is sucessfully added to the cart
    await expect(page.locator("//div[@class='alert alert-success alert-dismissible']")).toBeVisible();
});