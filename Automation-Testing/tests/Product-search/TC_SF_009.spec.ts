import{test,expect,Locator} from '@playwright/test';

test('TC_SF_009: Validate the list and grid are working on search result page',async({page})=>{

    // Navigate to the application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/search&search=mac');

    // Validate the list functionality is clickable and active
    const listbutton= page.locator("//button[@id='list-view']");
    listbutton.click();
    await expect(listbutton).toHaveClass(/active/);

    // Validate the grid functionality is clickable and active
    const gridbutton= page.locator("//button[@id='grid-view']");
    await gridbutton.click();
    await expect(gridbutton).toHaveClass(/active/);


});