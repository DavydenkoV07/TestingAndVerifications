const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');


test('Add Book to Cart', async ({ page }) => {
    const homePage = new HomePage(page);
    

    await homePage.open();
    await homePage.AddToCart();
    await homePage.openCart();

  //  this.CartItem = page.locator('div.mui-f8tkvr-cart-item-card');

    await expect(page.getByRole('button', { name: 'Видалити' })).toBeVisible();
    await expect(page.locator('button.mui-193bwto-ui-button-cart-submit-button')).toBeVisible();


//npx playwright test AddingToCart.spec.js --project=chromium --headed --debug
    
});