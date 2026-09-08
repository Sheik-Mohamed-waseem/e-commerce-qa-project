import{test,expect,Locator} from '@playwright/test';

test('Validate  add to cart from search result page',async({page})=>{

    // Navigate to the application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Search mac product on search box field
    await page.getByRole('textbox', { name: 'Search' }).fill('iMac');
    await page.locator("//button[@class='btn btn-default btn-lg']").click();

    // Validate add to cart on search result page
    await page.getByRole('button', { name: 'Add to Cart' }).click();
    const message = page.locator('.alert-success');
    await expect(message).toBeVisible();
    await expect(message).toContainText('Success: You have added iMac to your shopping cart!');
    
    // Validate product sucessfully added
    const product = page.locator("//img[@alt='iMac']");
    await expect(product).toBeVisible();
    
    //await page.locator('div.button-group').locator('button').nth(0).click();


});