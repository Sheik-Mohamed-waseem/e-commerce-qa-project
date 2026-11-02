import{test,expect,Locator} from '@playwright/test';
test('TC_ATC_003: validate adding product to the cart from searching result',async({page})=>{
    
    // Navigate to the application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Search mac product on search box field
    await page.getByRole('textbox',{name:'Search'}).fill('mac');
    await page.locator("//button[@class='btn btn-default btn-lg']").click();

    // Add the product to the cart
    await page.locator("//body//div[@id='product-search']//div[@class='row']//div[@class='row']//div[3]//div[1]//div[2]//div[2]//button[1]//span[1]").click();
    await expect(await page.getByText('Success: You have added MacBook Air to your shopping cart! ×', { exact: true })).toBeVisible();
    await page.getByText('shopping cart', { exact: true }).click();
    await expect(page.locator(`//tr[td[3][contains(., 'Product 17')]]//td[2]//a`)).toHaveText('MacBook Air');
});