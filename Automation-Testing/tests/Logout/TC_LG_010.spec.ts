import{test,expect,Locator} from '@playwright/test';
test('validate the (UI) of logout page', async ({ page }) =>{

    // Navigate to the logout page
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/logout');

    // Validate that the page heading is visible and the URL is correct
    await expect(page.getByRole('heading', { name: 'Account Logout' })).toBeVisible();
    await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/logout');

    // Validate that the page logo is visible
    await expect(page.getByRole('img', { name: 'naveenopencart' })).toBeVisible();

    // Validate that the right column menu is visible
    await expect(page.locator('div.list-group')).toBeVisible();

    // Validate that the top links are visible
    await expect(page.locator('#top-links')).toBeVisible();

    // Validate that the footer is visible
    await expect(page.locator("//body//footer//div[@class='container']")).toBeVisible();
    

});