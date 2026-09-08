import{test,expect,Locator} from '@playwright/test';

test('Validate by clicking categories in search page',async({page})=>{

    // Navigate to the application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Search mac product on search box field
    await page.getByRole('textbox', { name: 'Search' }).fill('Mac');
    await page.locator("//button[@class='btn btn-default btn-lg']").click();
    
    // Validate the categories of product displaying properly in search result page
    const categorySelect = page.locator("//select[@name='category_id']");
    await categorySelect.selectOption('Desktops');
    const numberofproducts=page.locator('[name="category_id"]').all();
    for(const product of await numberofproducts){
        const productName = await product.textContent();
        console.log(productName);
    }



});
