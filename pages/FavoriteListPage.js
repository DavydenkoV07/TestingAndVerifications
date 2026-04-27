const { expect } = require("@playwright/test");

class FavoriteListPage {
    constructor(page) {
        this.page = page;
        this.header = page.locator('h1');
        this.FavoriteBook = page.locator('a.ui-catalog-card--variant-default');

    }

    async checkIfFavoriteList() {
        await expect(FavoriteListPage.header).toContainText('Список бажань');

        await expect(page).toHaveURL('https://ksd.ua/wishlist');
    }



}

module.exports = { FavoriteListPage };