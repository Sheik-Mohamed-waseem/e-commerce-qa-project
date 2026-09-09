import{test,expect,Locator} from '@playwright/test';

test('TC_SF_016: Validate the searching product<MAC> which shows mutiple or similar product',async({page})=>{
    // Navigate to the application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    //Search mac product on search box field
    await page.getByRole('textbox', { name: 'Search' }).fill('Mac');
    await page.locator("//button[@class='btn btn-default btn-lg']").click();

    // Validate count of a products
    const products = page.locator('div.product-layout.product-grid.col-lg-3.col-md-3.col-sm-6.col-xs-12')
    console.log("Total products found: " + await products.count());
    //await page.locator("page.locator('div.product-layout.product-grid.col-lg-3.col-md-3.col-sm-6.col-xs-12')").first().click();

});