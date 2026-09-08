import{expect,Locator,test} from '@playwright/test';

test('Validate the search page contain header ',async({page})=>{

    // Navigate to the application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Search mac product on search box field
    await page.getByRole('textbox', { name: 'Search' }).fill('Mac');
    await page.locator("//button[@class='btn btn-default btn-lg']").click();

    // Validate header 
    const header=page.locator('header');
    await expect(header).toBeVisible();
  
    // Validate header elements- logo,search box, and cart item field is displaying
    await expect(page.getByRole('img', { name: 'naveenopencart' })).toBeVisible();
    await expect(page.getByPlaceholder('Search')).toBeVisible();
    await expect(page.locator("//button[@class='btn btn-inverse btn-block btn-lg dropdown-toggle']")).toBeVisible();    

});