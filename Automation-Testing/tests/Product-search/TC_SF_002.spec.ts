import{test,expect,Locator} from '@playwright/test';

test('TC_SF_002: Validate the searched product display all details.',async({page})=>{

    // Navigate to the application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Search mac product on search box field
    await page.getByRole('textbox', { name: 'Search' }).fill('Mac');
    await page.locator("//button[@class='btn btn-default btn-lg']").click();

    // Validate mac product display proper details on search result page
    const products=page.locator("//div[@class='product-thumb']").filter({has:page.getByRole('link', { name: 'iMac' })});
    await expect(products.locator('h4 a')).toHaveText('iMac');
    await expect(products.locator("//p[contains(text(),'Just when you thought iMac had everything, now the')]")).toContainText('Just when you thought iMac had everything, now the');
    await expect(products.locator('.price')).toContainText('$122.00');
    await expect(products.locator('.price-tax')).toContainText('Ex Tax: $100.00');
    await expect(products.locator('img')).toBeVisible();
    await expect(products.locator("//button[@data-original-title='Add to Wish List']")).toBeVisible();
    await expect(products.locator("//button[@data-original-title='Compare this Product']")).toBeVisible();


});