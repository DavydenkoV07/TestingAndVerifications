const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { FavoriteListPage } = require('../pages/FavoriteListPage');

test('Add Book to Favorites', async ({ page }) => {
    const homePage = new HomePage(page);
    const favList = new FavoriteListPage(page);

    await homePage.open();
    await page.waitForTimeout(4000);
    await homePage.AddToFav();
    await page.waitForTimeout(4000);
    await homePage.openFavs();
    await page.waitForTimeout(4000);

    
    await expect(favList.header).toContainText('Список бажань');
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL('https://ksd.ua/wishlist');
    await page.waitForTimeout(1000);

    await expect(favList.FavoriteBook.first()).toBeVisible();

     //npx playwright test FavoriteListTest.spec.js --project=chromium --headed --debug
});