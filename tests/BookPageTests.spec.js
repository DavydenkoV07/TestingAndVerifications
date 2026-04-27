const { test, expect } = require('@playwright/test');
const { BookPage } = require('../pages/BookPage');

test('Add book to cart', async ({ page }) => {
    const bookPage = new BookPage(page);

    await bookPage.open();

    await bookPage.addToCart();

    await expect(bookPage.addedToCartButton).toBeVisible({ timeout: 5000 });
});