
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';

test('TC_LF_007: Validate Forgot Password link', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Step 1: Navigate to Login page
    await loginPage.navigateToLogin();

    // Step 2: Verify Forgot Password link is visible
    await expect(page.locator('a').filter({ hasText: 'Forgotten Password' }).first()).toBeVisible();

    // Step 3: Click Forgot Password link
    await loginPage.clickForgotPassword();

    // Expected Result: Forgot Password page should be displayed
    await expect(page).toHaveURL(/route=account\/forgotten/);

});
