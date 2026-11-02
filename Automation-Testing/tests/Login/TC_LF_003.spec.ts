import {test, Locator, Page, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';

test('TC_LF_003: Validate the instructional text is displaying in login page', async ({ page }) => {

    const loginPage = new LoginPage(page);

    //Navigate to Login page
    await loginPage.navigateToLogin();

    //assert the instructional text is displaying in login page
    await expect(page.locator("//h2[normalize-space()='Returning Customer']")).toBeVisible();

    //assert the new customer registering account text is displaying in login page
    await expect(page.locator("//h2[normalize-space()='New Customer']")).toBeVisible();
    await expect(page.locator("//p[contains(text(),'By creating an account you will be able to shop fast')]")).toBeVisible();
})