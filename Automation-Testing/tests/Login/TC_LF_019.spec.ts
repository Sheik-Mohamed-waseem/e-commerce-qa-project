
import { test, expect } from '@playwright/test';
import loginData from '../../testdata/logindata';

test('TC_LF_019: Validate password text cannot be copied', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    // Enter password
    await page.locator('#input-password').fill(loginData.validPassword);

    // Select password text
    await page.locator('#input-password').press('Control+A');

    // Copy selected text
    await page.locator('#input-password').press('Control+C');

    // Paste into another input field
    await page.locator('#input-email').press('Control+V');

    // Verify copied password is not pasted
    await expect(page.locator('#input-email')).not.toHaveValue(loginData.validPassword);
});