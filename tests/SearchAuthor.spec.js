const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { AuthorsPage } = require('../pages/AuthorsPage');

test('Open Authors Page', async ({ page }) => {
    const homePage = new HomePage(page);
    const authorsPage = new AuthorsPage(page);

    await homePage.open();
    await page.waitForTimeout(3000);

    await homePage.AuthorsLink.click();
    await page.waitForTimeout(6000);
    await expect(authorsPage.header).toHaveText('Автори');

    //npx playwright test SearchAuthor.spec.js --project=chromium --headed --debug
    
});

test('Search for author', async ({ page }) => {
    const homePage = new HomePage(page);
    const authorsPage = new AuthorsPage(page);

    await homePage.open();
    await page.waitForTimeout(4000);

    await homePage.AuthorsLink.click();
    await page.waitForTimeout(3000);
    
    await authorsPage.findAuthor('Едґар Аллан По');
    await page.waitForTimeout(3000);
    await expect(page.locator('h1')).toHaveText('Едґар Аллан По');


    //npx playwright test SearchAuthor.spec.js --project=chromium --headed --debug
    
});

