import{test,expect,Locator} from '@playwright/test';

test('TC_SF_003: Validate by searching non-existing product',async({page})=>{

    // Navigate to the application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Search non exisiting product on search box field
    await page.getByRole('textbox', { name: 'Search' }).fill('playstation');
    await page.locator("//button[@class='btn btn-default btn-lg']").click();

    // Validate warning message is displaying on search result page
    const noResults=page.getByText('There is no product that matches the search criteria.');
    await expect(noResults).toBeVisible();



});