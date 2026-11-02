
import { test, expect } from '@playwright/test';

test('TC_LF_016: Validate breadcrumb functionality on Login page', async ({ page }) => {

    // Step 1: Navigate to Login page
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    // Expected Result: Login page should be displayed
    await expect(page).toHaveURL(/route=account\/login/);

    // Step 2: Verify breadcrumb is visible
    const breadcrumb = page.locator('ul.breadcrumb');
    await expect(breadcrumb).toBeVisible();

    // Step 3: Verify breadcrumb labels
    await expect(breadcrumb).toContainText('Account');
    await expect(breadcrumb).toContainText('Login');

    // Step 4: Verify Account breadcrumb is visible
    const accountBreadcrumb = breadcrumb.getByRole('link', {
        name: 'Account',
        exact: true
    });

    await expect(accountBreadcrumb).toBeVisible();

    // Step 5: Verify Login breadcrumb text
    await expect(breadcrumb).toContainText('Login');

    // Step 6: Click Account breadcrumb
    await accountBreadcrumb.click();

    // Expected Result: User should navigate to Account Login page
    await expect(page).toHaveURL(/route=account\/login/);

});
