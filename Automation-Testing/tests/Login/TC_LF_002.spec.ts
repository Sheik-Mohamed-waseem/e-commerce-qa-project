
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';

test('TC_LF_002: Validate mandatory field labels and placeholders', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Step 1: Navigate to Login page
    await loginPage.navigateToLogin();

    // Expected Result: Login page should be displayed
    await expect(page).toHaveURL(/route=account\/login/); 


    await expect(page.getByPlaceholder('E-Mail Address')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
    // Step 4: Verify Email placeholder
    expect(await loginPage.getEmailPlaceholder()).toBe('E-Mail Address');

    // Step 5: Verify Password placeholder
    expect(await loginPage.getPasswordPlaceholder()).toBe('Password');

});
