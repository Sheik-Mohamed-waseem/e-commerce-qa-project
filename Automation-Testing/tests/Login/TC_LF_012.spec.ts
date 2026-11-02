
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';
import loginData from '../../testdata/logindata';

test('Validate password field is hidden on Login page', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Step 1: Navigate to Login page
    await loginPage.navigateToLogin();

    // Verify Password field is hidden
    expect(await loginPage.isPasswordHidden()).toBeTruthy();
     

    // Step 3: Enter password
    await loginPage.enterPassword(loginData.validPassword);

    // Step 4: Verify password field type
    const passwordType = await loginPage.getPasswordFieldType();

    // Expected Result: Password should be masked
    expect(passwordType).toBe('password');

});
