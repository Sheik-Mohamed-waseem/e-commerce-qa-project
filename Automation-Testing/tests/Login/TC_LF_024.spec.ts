
import { test, expect } from '@playwright/test';

test('TC_LF_023 - Validate UI Elements on Login Page', async ({ page }) => {

    // Navigate to Login Page
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    // Verify Page Logo is visible
    const logo = page.locator('#logo img');
    await expect(logo).toBeVisible();

    // Verify Page Heading is visible
    const heading = page.locator('#content h2');
    await expect(heading).toContainText('Returning Customer');

    // Verify Email Field is visible
    const emailField = page.locator('#input-email');
    await expect(emailField).toBeVisible();
    await expect(emailField).toBeEnabled();

    // Verify Password Field is visible
    const passwordField = page.locator('#input-password');
    await expect(passwordField).toBeVisible();
    await expect(passwordField).toBeEnabled();

    // Verify Login Button is visible
    const loginButton = page.locator('input[value="Login"]');
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();

    // Verify Forgot Password Link is visible
    const forgotPassword = page.getByRole('link', {
        name: 'Forgotten Password',
        exact: true
    });
    await expect(forgotPassword).toBeVisible();

    // Verify New Customer Section is visible
    const newCustomer = page.locator('#content').getByRole('heading', {
        name: 'New Customer',
        exact: true
    });
    await expect(newCustomer).toBeVisible();

    // Verify Continue Button is visible
    const continueButton = page.locator('#content a.btn-primary');
    await expect(continueButton).toBeVisible();
    await expect(continueButton).toBeEnabled();

    // Verify Breadcrumb Navigation is visible
    const breadcrumb = page.locator('.breadcrumb');
    await expect(breadcrumb).toBeVisible();

    // Verify Footer is visible
    const footer = page.locator('#footer');
    await expect(footer).toBeVisible();

});
