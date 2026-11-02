
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';
import loginData from '../../testdata/logindata';

test('TC_LF_025: Validate login functionality across different browsers', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Step 1: Navigate to Login page
    await loginPage.navigateToLoginViaMyAccount();

    // Expected Result: Login page should be displayed
    await expect(page).toHaveURL(/route=account\/login/);

    // Step 2: Enter valid email and password
    await loginPage.login(
        loginData.validEmail,
        loginData.validPassword
    );

    // Expected Result: User should successfully log in
    await expect(page).toHaveURL(/route=account\/account/);

    // Step 3: Verify Logout link is visible
    expect(await loginPage.isLogoutVisible()).toBeTruthy();

});
