
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';

test('TC_LF_001: Validate different ways to navigate to Login page', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Step 1: Navigate to Home page
    await loginPage.navigateToHome();

    // Step 2: Click My Account and select Login
    await loginPage.clickMyAccount();
    await loginPage.clickLoginFromMenu();

    // Expected Result: Login page should be displayed
    await expect(page).toHaveURL(/route=account\/login/);

    // Step 3: Click My Account and select Register
    await loginPage.clickMyAccount();
    await loginPage.clickRegisterFromMenu();

    // Expected Result: Register page should be displayed
    await expect(page).toHaveURL(/route=account\/register/);

    // Step 4: Click Login from the right column
    await loginPage.clickLoginFromRightColumn();

    // Expected Result: Login page should be displayed
    await expect(page).toHaveURL(/route=account\/login/);

});
