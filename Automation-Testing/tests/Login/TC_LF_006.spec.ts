
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';
import loginData from '../../testdata/logindata';

test('TC_LF_006: Validate login with valid email and invalid password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Step 1: Navigate to Login page
    await loginPage.navigateToLoginViaMyAccount();

    // Step 2: Enter valid email and invalid password
    await loginPage.login(
        loginData.validEmail,
        loginData.validEmailInvalidPassword
    );

    // Expected Result: Warning message should be displayed
    await loginPage.waitForLoginWarning();
    expect(await loginPage.isWarningVisible()).toBeTruthy();

    // Expected Result: User should remain on Login page
    await expect(page).toHaveURL(/route=account\/login/);

    // Step 3: Verify warning message is not empty
    const warningText = await loginPage.getLoginWarning();
    expect(warningText.length).toBeGreaterThan(0);

});
