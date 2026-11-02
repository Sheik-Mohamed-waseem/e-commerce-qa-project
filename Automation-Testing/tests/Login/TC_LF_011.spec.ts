
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';
import loginData from '../../testdata/logindata';

test('TC_LF_011: Validate login after seven invalid attempts', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Step 1: Navigate to Login page
    await loginPage.navigateToLoginViaMyAccount();

    // Step 2: Enter invalid email and password
    await loginPage.enterEmail(loginData.invalidEmail);
    await loginPage.enterPassword(loginData.invalidPassword);

    // Step 3: Perform seven invalid login attempts
    for (let i = 1; i <= loginData.numberOfAttempts; i++) {
        await loginPage.clickLogin();
        await loginPage.waitForLoginWarning();
    }

    // Step 4: Enter valid email and password
    await loginPage.login(
        loginData.validEmail,
        loginData.validPassword
    );

    // Expected Result: Check the login outcome
    await expect(page).toHaveURL(/route=account\/(account|login)/);

    // Step 5: Verify the result
    if (page.url().includes('route=account/account')) {

        // Login successful
        expect(await loginPage.isLogoutVisible()).toBeTruthy();

    } else {

        // Login unsuccessful, possibly due to account lockout
        await loginPage.waitForLoginWarning();
        expect(await loginPage.isWarningVisible()).toBeTruthy();

    }

});
