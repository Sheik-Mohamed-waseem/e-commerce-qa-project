
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';

test('TC_LF_013: Validate placeholders in Email and Password fields', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Step 1: Navigate to Login page
    await loginPage.navigateToLogin();

    // Expected Result: Login page should be displayed
    await expect(page).toHaveURL(/route=account\/login/);

    // Step 2: Verify Email placeholder
    const emailPlaceholder = await loginPage.getEmailPlaceholder();
    expect(emailPlaceholder).toBe('E-Mail Address');

    // Step 3: Verify Password placeholder
    const passwordPlaceholder = await loginPage.getPasswordPlaceholder();
    expect(passwordPlaceholder).toBe('Password');

    // Step 4: Verify Email and Password fields are visible
    expect(await loginPage.isEmailVisible()).toBeTruthy();
    expect(await loginPage.isPasswordVisible()).toBeTruthy();

});
