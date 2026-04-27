const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { CartPage } = require('../pages/CartPage');


test('Deleting Book from Cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    

    await homePage.open();
    await homePage.AddToCart();
    await homePage.openCart();

  //  this.CartItem = page.locator('div.mui-f8tkvr-cart-item-card');

    await cartPage.DeleteButton.click(); 
    await expect(cartPage.EmptyMessage).toBeVisible();


//npx playwright test DeletingFromCart.spec.js --project=chromium --headed --debug
    
});