import{test,expect,Locator} from '@playwright/test';

test('Validate the footer option shows in searching page and check it by clicking footer option',async({page})=>{

    // Navigate to the application
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
    await page.getByRole('textbox', { name: 'Search' }).fill('Mac');
    await page.locator("//button[@class='btn btn-default btn-lg']").click();

    // Capture all footer links available on the search results page
    const footer = page.locator('footer a');
    const namez= await footer.allTextContents();
    console.log("Footer options are: " + namez);

    //Iterate through each footer link and validate its navigation.
    for(let i=0;i<namez.length;i++){
        await expect(footer.nth(i)).toBeVisible();
        console.log("clicking on footer option: " + namez[i]);
        await footer.nth(i).click();

        // Confirm that the link navigates to a valid page URL.
        await expect(page).toHaveURL(/https?:\/\//);
        console.log("Current URL after clicking footer option: " + page.url());
        
        // Return to the search results page before testing the next footer link.
        await page.goBack();


    }

});