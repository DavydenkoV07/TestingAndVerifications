const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { CartPage } = require('../pages/CartPage');


test('Deleting Book from Cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    

    await homePage.open();
     await page.waitForTimeout(4000);
    await homePage.AddToCart();
     await page.waitForTimeout(4000);
    await homePage.openCart();
     await page.waitForTimeout(4000);

  //  this.CartItem = page.locator('div.mui-f8tkvr-cart-item-card');

    await cartPage.DeleteButton.click(); 
     await page.waitForTimeout(2000);
    await expect(cartPage.EmptyMessage).toBeVisible();


//npx playwright test DeletingFromCart.spec.js --project=chromium --headed --debug
    
});