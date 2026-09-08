import{chromium,FullConfig}from'@playwright/test';
async function globalsetup(config:FullConfig){
    const browser=await chromium.launch({headless:false});
    const page=await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
    await page.locator("//a[@title='My Account']").click();
    await page.getByRole('link',{name:'Login'}).click();
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('abdulbasith619@gmail.com');
    await page.getByRole('textbox',{name:'Password'}).fill('abdulbasith619');
    await page.getByRole('button',{name:'Login'}).click();
    await page.waitForURL('https://naveenautomationlabs.com/opencart/index.php?route=account/account');
    
    await page.context().storageState({path:'playwright/.auth/user.json'});
    await browser.close();
}

