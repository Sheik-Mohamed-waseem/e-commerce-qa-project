
import { test, expect } from '@playwright/test';

test('Validate all footer options are working properly in Login Page', async ({ page }) => {

    const loginUrl = 'https://naveenautomationlabs.com/opencart/index.php?route=account/login';

    // Navigate to Login Page
    await page.goto(loginUrl);

    // Locate footer section
    const footer = page.locator('#footer');

    // Verify footer is visible
     await expect(page.locator('footer:visible')).toBeVisible();


    // ================= MY ACCOUNT =================

    // 1. My Account
    const myAccount =page.locator('a').filter({ hasText: 'My Account' }).first()
    await expect(myAccount).toBeVisible();
    await myAccount.click();
    await expect(page).toHaveURL(/route=account\/login/);

    // 2. Order History
    await page.goto(loginUrl);
    const orderHistory = page.locator('a').filter({ hasText: 'Order History' }).first()
    await expect(orderHistory).toBeVisible();
    await orderHistory.click();
    await expect(page).toHaveURL(/route=account\/login/);

    // 3. Wish List
    await page.goto(loginUrl);
    const wishList =page.locator('a').filter({ hasText: 'Wish List' }).first()
    await expect(wishList).toBeVisible();
    await wishList.click();
    await expect(page).toHaveURL(/route=account\/login/);

    // 4. Newsletter
    await page.goto(loginUrl);
    const newsletter =page.locator('a').filter({ hasText: 'Newsletter' }).first()
    await expect(newsletter).toBeVisible();
    await newsletter.click();
    await expect(page).toHaveURL(/route=account\/login/);


    // ================= INFORMATION =================

    // 5. About Us
    await page.goto(loginUrl);
    const aboutUs =page.getByRole('link', { name: 'About Us' })
    await expect(aboutUs).toBeVisible();
    await aboutUs.click();
    await expect(page).toHaveURL(/route=information\/information.*information_id=4/);

    // 6. Delivery Information
    await page.goto(loginUrl);
    const deliveryInfo =page.getByRole('link', { name: 'Delivery Information' })
    await expect(deliveryInfo).toBeVisible();
    await deliveryInfo.click();
    await expect(page).toHaveURL(/route=information\/information.*information_id=6/);

    // 7. Privacy Policy
    await page.goto(loginUrl);
    const privacyPolicy =page.getByRole('link', { name: 'Privacy Policy' });
    await expect(privacyPolicy).toBeVisible();
    await privacyPolicy.click();
    await expect(page).toHaveURL(/route=information\/information.*information_id=3/);

    // 8. Terms & Conditions
    await page.goto(loginUrl);
    const termsConditions =page.getByRole('link', { name: 'Terms & Conditions' });
    await expect(termsConditions).toBeVisible();
    await termsConditions.click();
    await expect(page).toHaveURL(/route=information\/information.*information_id=5/);


    // ================= CUSTOMER SERVICE =================

    // 9. Contact Us
    await page.goto(loginUrl);
    const contactUs = page.getByRole('link', { name: 'Contact Us' });
    await expect(contactUs).toBeVisible();
    await contactUs.click();
    await expect(page).toHaveURL(/route=information\/contact/);

    // 10. Returns
    await page.goto(loginUrl);
    const returns =await page.locator("//a[@href='https://naveenautomationlabs.com/opencart/index.php?route=account/return/add']");
    await expect(returns).toBeVisible();
    await returns.click();
    await expect(page).toHaveURL("https://naveenautomationlabs.com/opencart/index.php?route=account/return/add");

    // 11. Site Map
    await page.goto(loginUrl);
    const siteMap =page.getByRole('link', { name: 'Site Map' })
    await expect(siteMap).toBeVisible();
    await siteMap.click();
    await expect(page).toHaveURL(/route=information\/sitemap/);


    // ================= EXTRAS =================

    // 12. Brands
    await page.goto(loginUrl);
    const brands = page.getByRole('link', { name: 'Brands' })
    await expect(brands).toBeVisible();
    await brands.click();
    await expect(page).toHaveURL(/route=product\/manufacturer/);

    // 13. Gift Certificates
    await page.goto(loginUrl);
    const giftCertificates =page.getByRole('link', { name: 'Gift Certificates' })
    await expect(giftCertificates).toBeVisible();
    await giftCertificates.click();
    await expect(page).toHaveURL(/route=account\/voucher/);

    // 14. Affiliate
    await page.goto(loginUrl);
    const affiliate = page.getByRole('link', { name: 'Affiliate' })
    await expect(affiliate).toBeVisible();
    await affiliate.click();
    await expect(page).toHaveURL(/route=affiliate\/login/);

    // 15. Specials
    await page.goto(loginUrl);
    const specials = page.getByRole('link', { name: 'Specials' });
    await expect(specials).toBeVisible();
    await specials.click();
    await expect(page).toHaveURL(/route=product\/special/);


    // ================= POWERED BY OPENCART =================

    // 16. Powered By OpenCart
    await page.goto(loginUrl);
    const openCart =page.getByText('OpenCart', { exact: true });
    await expect(openCart).toBeVisible();
    await openCart.click();
    await expect(page).toHaveURL("https://www.opencart.com/");

});
