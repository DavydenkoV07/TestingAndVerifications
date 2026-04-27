const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { FavoriteListPage } = require('../pages/FavoriteListPage');

test('Add Book to Favorites', async ({ page }) => {
    const homePage = new HomePage(page);
    const favList = new FavoriteListPage(page);

    await homePage.open();
    await homePage.AddToFav();
    await homePage.openFavs();

    
    await expect(favList.header).toContainText('Список бажань');
    await expect(page).toHaveURL('https://ksd.ua/wishlist');

    await expect(favList.FavoriteBook.first()).toBeVisible();

    
});