const { expect } = require("@playwright/test");

class CartPage {
    constructor(page) {
        this.page = page;
        this.header = page.locator('h1');
        this.CartItem = page.locator('div.mui-f8tkvr-cart-item-card');
        this.DeleteButton = page.getByRole('button', { name: 'Видалити' });
        this.EmptyMessage = page.getByText('Тут поки що нічого не має'); 
        this.BuyButton = page.locator('button.mui-193bwto-ui-button-cart-submit-button');

    }

    



}

module.exports = { CartPage };