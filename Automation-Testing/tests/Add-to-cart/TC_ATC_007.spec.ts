import{test,Locator,expect} from '@playwright/test';
test('TC_ATC_007: validate adding the related product to the cart that are displaying in product page',async({page})=>{
    
    // Navigate to the product page
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=42&search=Apple+Cinema+30%22');
    
    // Validate adding related product to the cart
    await page.locator("//div[@id='content']//div[1]//div[1]//div[3]//button[1]//span[1]").click();

    // Validate the product is sucessfully added to the cart
    await expect(page.getByText('Success: You have added iPhone to your shopping cart!')).toBeVisible();



});