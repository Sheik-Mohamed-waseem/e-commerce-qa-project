
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';
import loginData from '../../testdata/logindata';

test('TC_LF_009: Validate repeated failed login attempts', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Step 1: Navigate to Login page
    await loginPage.navigateToLoginViaMyAccount();

    // Step 2: Enter invalid email and password
    await loginPage.enterEmail(loginData.invalidEmail);
    await loginPage.enterPassword(loginData.invalidPassword);

    // Step 3: Perform repeated login attempts
    for (let i = 1; i <= loginData.numberOfAttempts; i++) {

        await loginPage.clickLogin();

        // Wait for warning message
        await loginPage.waitForLoginWarning();

        // Verify warning message is displayed
        expect(await loginPage.isWarningVisible()).toBeTruthy();

        // Verify warning message is not empty
        const warningText = await loginPage.getLoginWarning();
        expect(warningText.length).toBeGreaterThan(0);
    }

    // Expected Result: User should remain on Login page
    await expect(page).toHaveURL(/route=account\/login/);

});
