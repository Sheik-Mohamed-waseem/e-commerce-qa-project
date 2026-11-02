import{test,Locator, Page,expect} from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';

test('TC_LF_015: Validate the functionality of home page logo on login page', async ({ page }) =>{

    const loginPage = new LoginPage(page);

    // Navigate to Login page
    await loginPage.navigateToLogin();

    await expect(page.getByRole('img', { name: 'naveenopencart' })).toBeVisible();
    // Step 1: Click on the home page logo
    await page.getByRole('img', { name: 'naveenopencart' }).click();
    // Expected Result: User should be redirected to the home page
    await expect(page).toHaveURL(/route=common\/home/);

});