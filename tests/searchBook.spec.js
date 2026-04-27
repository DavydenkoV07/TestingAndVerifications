
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { SearchResultsPage } = require('../pages/SearchResultsPage');

test('Пошук книги', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchResultsPage(page);

    await homePage.open();
    await homePage.searchBook('Сяйво');

    await expect(searchPage.header).toContainText('Сяйво');

   // await page.locator('a.ui-catalog-card--variant-default mui-1i20r6w-ui-catalog-card').first().click();

    // a.ui-catalog-card--variant-default mui-1i20r6w-ui-catalog-card
    //npx playwright test searchBook.spec.js --project=chromium --headed --debug

});