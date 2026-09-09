import{test,expect,Locator} from '@playwright/test';

test('TC_SF_018: Validate the search functionality working from all environment',async({page})=>{

    // Navigate to the application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
    
    //Search mac product on search box field
    await page.getByRole('textbox', { name: 'Search' }).fill('mac');
    await page.locator("//button[@class='btn btn-default btn-lg']").click();

   // Validate that the search results page is loaded with the expected query.
    await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=product/search&search=mac');


});