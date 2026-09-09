import{test,expect,Locator} from '@playwright/test';
test('TC_ATC_010: Validate Add to Cart functionality for a product accessed through the image slider',async({page})=>{

    // Navigate to the home page
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Select image slider product and add the product to the cart
    await page.locator("//div[@class='swiper-slide text-center swiper-slide-active']//img[@alt='iPhone 6']").click();
    await page.locator("//button[@id='button-cart']").click();

    // Validate the product is sucessfully added to the cart
    await expect(page.getByText('Success: You have added Samsung Galaxy Tab 10.1 to your shopping cart!')).toBeVisible();

});
