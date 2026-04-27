
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { SearchResultsPage } = require('../pages/SearchResultsPage');

test('Пошук книги', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchResultsPage(page);

    await homePage.open();
    await homePage.searchBook('Сяйво');

   // await page.getByText('Сяйво').first().click();

    await expect(searchPage.header).toContainText('Сяйво');
    
});