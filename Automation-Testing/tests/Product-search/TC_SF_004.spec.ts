import{test,expect,Locator} from '@playwright/test';

test('TC_SF_004: Validate the breadcrum in search result page',async({page})=>{

    // Navigate to the application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Search mac product on search box field 
    await page.getByRole('textbox', { name: 'Search' }).fill('Mac');
    await page.locator("//button[@class='btn btn-default btn-lg']").click();

    // Validate breadcrum is displaying and clickable
    const breadcrum=page.locator("//ul[@class='breadcrumb']");
    await page.locator("//i[@class='fa fa-home']").click();
    await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
    await expect(page.locator("//i[@class='fa fa-home']")).toBeVisible
   
    // Click on  breadcrum (Search link ) and validate text + url
    await page.getByRole('textbox', { name: 'Search' }).fill('mac');
    await page.locator("//button[@class='btn btn-default btn-lg']").click();
    const searchBreadcrumb =page.getByRole('link', { name: 'Search' });
    await searchBreadcrumb.click();
    await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=product/search&search=mac');

   
    // Click on  breadcrum (mac) and validate text + url
   // const macbreadcrumb = page.getByRole('link', { name: 'iMac' });
   // await expect(macbreadcrumb).toBeVisible();
   // await expect(breadcrum.locator('li').nth(2)).toHaveText('Mac');
    //await page.waitForTimeout(3000);

});  