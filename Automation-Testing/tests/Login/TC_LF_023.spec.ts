
import { test, expect } from '@playwright/test';

test('TC_LF_024: Validate Page Title, URL and Heading in Login Page', async ({ page }) => {

    // Navigate to Login Page
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    // Validate Page Title
    await expect(page).toHaveTitle('Account Login');

    // Validate Page URL
    await expect(page).toHaveURL(
        'https://naveenautomationlabs.com/opencart/index.php?route=account/login'
    );

    // Locate Page Heading
    const pageHeading = page.getByRole('heading', {
        name: 'Returning Customer',
        exact: true
    });

    // Validate Page Heading
    await expect(pageHeading).toBeVisible();
    await expect(pageHeading).toHaveText('Returning Customer');

});
