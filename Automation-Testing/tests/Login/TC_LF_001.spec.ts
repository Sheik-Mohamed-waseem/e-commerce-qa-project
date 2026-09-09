import {test,expect} from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';
test('TC_LF_001: Validate the different ways to navigate  login page',async({page})=>{

  // Navigate to the home page application
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

  // Select my account drop down menu and Click on login option
  await page.locator("//a[@title='My Account']").click();
  await page.getByRole('link',{name:'Login'}).click();
  
  // Validate navigated to the login page
  await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

  // Select my account drop down menu and Click on register option
  await page.locator("//a[@title='My Account']").click();
  await page.getByRole('link',{name:'Register'}).first().click();

  // Navigate to the login page through right column option
  await page.locator('div.list-group').locator('a').nth(0).click();

  // Validate navigated to the login page
  await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  await page.close();

  

});
