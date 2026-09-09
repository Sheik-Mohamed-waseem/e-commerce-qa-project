import{test,expect,Locator} from '@playwright/test';

test('TC_SF_019: Validate open cart logo from searching page',async({page})=>{

    // Navigate to the application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Search mac product on search box field
    await page.getByRole('textbox', { name: 'Search' }).fill('Mac');
    await page.locator("//button[@class='btn btn-default btn-lg']").click();

    // Validate home page logo visible on the search page result
    await expect(page.getByRole('img', { name: 'naveenopencart' })).toBeVisible();

});