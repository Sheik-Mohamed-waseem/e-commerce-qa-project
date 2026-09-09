import{test,expect,Locator} from '@playwright/test';

test('TC_SF_014: Validate by clicking wish list button from  searching page',async({page})=>{

    // Navigate to the application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

  await page.getByText('My Account').first().click(); 
  await page.getByRole('link', { name: 'Login' }).click(); 
 
  // Enter valid login credentials
  await page.fill('#input-email', 'mirrorsedge007@gmail.com'); 
  await page.fill('#input-password', 'catalyst007'); 
  await page.getByRole('button', { name: 'Login' }).click();


    // Search mac product on search box field
    await page.getByRole('textbox', { name: 'Search' }).fill('iMac');
    await page.locator("//button[@class='btn btn-default btn-lg']").click();

    // Add the product to the wish list
    await page.locator("//button[@data-original-title='Add to Wish List']").click();
    
    // Validate product sucessfully added to wish list
    const message = page.locator('.alert-success');
    await expect(message).toBeVisible();
    await expect(message).toContainText('Success: You have added iMac to your wish list!');
   // await page.locator('div.button-group').locator('button').nth(1).click();
});