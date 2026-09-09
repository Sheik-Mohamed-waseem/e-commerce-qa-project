import{test,expect,Locator} from '@playwright/test';
test('TC_ATC_002: validate adding a product to the cart from product display page',async({page})=>{

// Navigate to the product display page
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=41&search=mac');
await page.locator("//button[@id='button-cart']").click();

// Validate the product is added to the cart
await expect(page.locator("//div[@class='alert alert-success alert-dismissible']")).toBeVisible();


});