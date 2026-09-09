import{test,expect,Locator} from '@playwright/test';

test('TC_SF_012: Validate the compare product functionality working from searching page',async({page})=>{
    
    // Navigate to the application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Search mac product on search box field
    await page.getByRole('textbox', { name: 'Search' }).fill('MacBook');
    await page.locator("//button[@class='btn btn-default btn-lg']").click();

    // Validate compare product functionality on search result page
    await page.locator('div.button-group').locator('button').nth(2).click();

    // Validate compare product success message is visible 
    const message=page.locator('.alert-success');
    await expect(message).toBeVisible();
    await expect(message).toContainText('Success: You have added MacBook to your product comparison!');

    // Validate the product is success fully added to the product compare page
    await page.getByRole('link', { name: 'product comparison' }).click();
    await expect(page.getByText('MacBook', { exact: true })).toBeVisible();
    

});