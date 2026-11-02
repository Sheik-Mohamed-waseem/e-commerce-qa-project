import { test, expect,Locator} from '@playwright/test';

test('Validate all top navigation menus on Login page', async ({ page }) => {

    const loginUrl = 'https://naveenautomationlabs.com/opencart/index.php?route=account/login';

    const menu = page.locator('div.collapse.navbar-collapse.navbar-ex1-collapse');

    // Navigate to Login page
    await page.goto(loginUrl);

    // Verify all top navigation menus are visible
    await expect(menu.getByRole('link', { name: 'Desktops' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Laptops & Notebooks' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Components' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Tablets' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Software' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Phones & PDAs' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Cameras' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'MP3 Players' })).toBeVisible();

    // Desktops
    await menu.getByRole('link', { name: 'Desktops' }).click();
    await page.getByRole('link', { name: 'Mac (1)' }).click();
    await expect(page).toHaveURL("https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20_27")

    await page.goto(loginUrl);

    // Laptops & Notebooks
    await menu.getByRole('link', { name: 'Laptops & Notebooks' }).click();
    await page.getByRole('link', { name: 'Windows (0)' }).click();
    await expect(page).toHaveURL("https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=18_45");

    await page.goto(loginUrl);

    // Components
    await menu.getByRole('link', { name: 'Components' }).click();
    await page.getByRole('link', { name: 'Monitors (2)' }).click();
    await expect(page).toHaveURL("https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=25_28");

    await page.goto(loginUrl);

    // Tablets
    await menu.getByRole('link', { name: 'Tablets' }).click();
    await expect(page).toHaveURL("https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=57");

    await page.goto(loginUrl);

    // Software
    await menu.getByRole('link', { name: 'Software' }).click();
    await expect(page).toHaveURL("https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=17 ");

    await page.goto(loginUrl);

    // Phones & PDAs
    await menu.getByRole('link', { name: 'Phones & PDAs' }).click();
    await expect(page).toHaveURL("https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=24");

    await page.goto(loginUrl);

    // Cameras
    await menu.getByRole('link', { name: 'Cameras' }).click();
    await expect(page).toHaveURL("https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=33");

    await page.goto(loginUrl);

    // MP3 Players
    await menu.getByRole('link', { name: 'MP3 Players' }).click();
    await page.getByRole('link', { name: 'Show All MP3 Players' }).click();
    await expect(page).toHaveURL("https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=34");

});
