const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test('SciFi Page', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();
    
    await homePage.browseSciFi();
    

    await expect(page.getByText('Фантастика')).toBeVisible();
    await expect(page).toHaveURL('https://ksd.ua/books/fantastyka');

    //npx playwright test openSciFi.spec.js --project=chromium --headed --debug
});