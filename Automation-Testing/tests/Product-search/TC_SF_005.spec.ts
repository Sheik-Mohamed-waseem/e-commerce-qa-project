import{test,Locator,expect} from '@playwright/test';

test('TC_SF_005: Validate the search box contain placeholder',async({page})=>{

    // Navigate to the application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Validate the search box field is displaying placeholder
    const searchbox=page.getByRole('textbox', { name: 'Search' });
    await expect(searchbox).toHaveAttribute('placeholder','Search');

});