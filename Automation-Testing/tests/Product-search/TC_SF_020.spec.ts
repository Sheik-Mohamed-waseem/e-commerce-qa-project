import{test,expect,Locator} from '@playwright/test';

test('TC_SF_020: Validate the search box and button ,icon are displaying in all pages',async({page})=>{
   
    // Navigate to the application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    // Define the application pages where the common search components should be available.
    const pages = ['https://naveenautomationlabs.com/opencart/index.php?route=common/home','https://naveenautomationlabs.com/opencart/index.php?route=account/login',
     'https://naveenautomationlabs.com/opencart/index.php?route=account/register','https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20_27'
    ,'https://naveenautomationlabs.com/opencart/index.php?route=product/search&search=mac','https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart'
];

 // Verify the common search components on each application page.
for(const pageUrl of pages){

    // Navigate to the page under test
    await page.goto(pageUrl);

    // Validate search box,button and icon
    await expect(page.getByPlaceholder('Search')).toBeVisible();
    await expect(page.locator("//button[@class='btn btn-default btn-lg']")).toBeVisible();
    await expect(page.getByRole('img', { name: 'naveenopencart' })).toBeVisible();
    console.log("Search box, button and icon are visible in page: " + pageUrl);
}

});