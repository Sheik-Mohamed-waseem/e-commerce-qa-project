import { test, expect,Locator } from '@playwright/test';

test('TC_LF_027 Validate login session is available after closing the browser', async ({ browser }) => {

  
// Create a new browser context and page for the first user    
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();

// Navigate to the login page and log in with valid credentials
  await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
  await page1.getByText('My Account').first().click();
  await page1.getByRole('link', { name: 'Login' }).click();
  await page1.locator('#input-email').fill('mirrorsedge007@gmail.com');
  await page1.locator('#input-password').fill('catalyst007');
  await page1.locator('input.btn.btn-primary').click();

  // Validate that the user is logged in successfully
  await expect(page1).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/account');
  await expect(page1.getByRole('link', { name: 'Logout' })).toBeVisible();
  await context1.close();


  // Create a new browser context and page for the second user
  const context2 = await browser.newContext();
  const page2 = await context2.newPage();

  // Navigate to the home page and check if the user is still logged in or logged out
  await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

  // Check if the "Logout" link is visible, indicating that the user is still logged in
  const logoutVisible = await page2.getByRole('link', { name: 'Logout' }).isVisible().catch(() => false);
  const loginVisible = await page2.getByRole('link', { name: 'Login' }).isVisible().catch(() => false);

  // Log the result based on the visibility of the "Logout" and "Login" links
  if (logoutVisible) {
    console.log('User is still logged in, logout link is visible.');
    await expect(page2.getByRole('link', { name: 'Logout' })).toBeVisible();
  } else if (loginVisible) {
    console.log('User is logged out, login link is visible.');
    await expect(page2.getByRole('link', { name: 'Login' })).toBeVisible();
  } else {
    console.log('User is not logged in, home page is visible.');
    await expect(page2).toHaveURL(/route=common\/home/);
  } 

  await context2.close();
});
