import {test, Locator, Page ,expect} from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';

test('TC_LF_017: Validate searching a product from login page', async ({ page }) =>{

    const loginPage = new LoginPage(page);

    // Navigate to Login page
    await loginPage.navigateToLogin();

    //Enter a product name in the search bar
    const searchInput = page.locator('input[name="search"]');
    await searchInput.fill('iPhone');
    await page.locator('button.btn.btn-default.btn-lg').click();
    
// Expected Result: User should be redirected to the search results page
    await expect(page).toHaveURL(
    'https://naveenautomationlabs.com/opencart/index.php?route=product/search&search=iPhone'
);


});