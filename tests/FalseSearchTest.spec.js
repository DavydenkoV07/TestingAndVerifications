const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { SearchResultsPage } = require('../pages/SearchResultsPage');

test('Book Search with False Value', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchResultsPage(page);

    await homePage.open();
    await page.waitForTimeout(4000);
    await homePage.searchBook('@@@');
    await page.waitForTimeout(4000);

   // await page.getByText('Сяйво').first().click();

    await expect(searchPage.ErrorMessage).toContainText('Вибачте, на сайті виникла помилка');

    //npx playwright test FalseSearchTest.spec.js --project=chromium --headed --debug
    
});