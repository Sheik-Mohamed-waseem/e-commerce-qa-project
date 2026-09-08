import{test,Page,expect,Locator} from '@playwright/test';
test('Validate searching an existing product.',async({page})=>{

    // Navigate to the home page applicatiom
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Search mac product on search box field
    await page.getByRole('textbox', { name: 'Search' }).fill('mac');
    await page.locator("//button[@class='btn btn-default btn-lg']").click();
    const products=await page.locator("//div[@class='product-thumb']//img[@title]").all();

    // Validate Mac products displaying on searching list page
    for(let i=0;i<products.length;i++){
        const productTitle=await products[i].getAttribute('title');
        console.log(productTitle);

        // Validate sucessfully navigated to the searching page & contains mac product
        await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=product/search&search=mac');
        await expect(products[i]).toBeVisible();
    }


});