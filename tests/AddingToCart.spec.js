const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { CartPage } = require('../pages/CartPage');

test('Add Book to Cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    

    await homePage.open();
    await page.waitForTimeout(3000);
    await homePage.AddToCart();
    await page.waitForTimeout(3000);
    await homePage.openCart();
    await page.waitForTimeout(2000);

  //  this.CartItem = page.locator('div.mui-f8tkvr-cart-item-card');

    await expect(cartPage.DeleteButton).toBeVisible();
    await page.waitForTimeout(2000);
    await expect(cartPage.BuyButton).toBeVisible();


//npx playwright test AddingToCart.spec.js --project=chromium --headed --debug
    
});