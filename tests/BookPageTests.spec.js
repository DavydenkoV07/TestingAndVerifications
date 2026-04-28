const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { BookPage } = require('../pages/BookPage');
const { CartPage } = require('../pages/CartPage');


test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.open();
    await page.waitForTimeout(4000);

    await homePage.searchInput.fill('Маленький принц');
    await page.waitForTimeout(4000);

    await homePage.ProposedBook.first().click();
    await page.waitForTimeout(4000);
});

test('Is Book Open', async ({ page }) => {
    /*
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.searchInput.fill('Маленький принц');
    await homePage.ProposedBook.first().click();
    */

    const bookPage = new BookPage(page);

    await page.waitForTimeout(4000);
    await expect(bookPage.bookTitle).toBeVisible();
    await expect(bookPage.bookTitle).toHaveText('Маленький принц');

});

test('Adding to Cart', async ({ page }) => {
    /*
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.searchInput.fill('Маленький принц');
    await homePage.ProposedBook.first().click();
    */

    const bookPage = new BookPage(page);
    const cartPage = new CartPage(page);
    await page.waitForTimeout(4000);
    
    
    await bookPage.addToCart();
    await page.waitForTimeout(4000);
    await bookPage.CartButton.click();
    await page.waitForTimeout(4000);
    await expect(cartPage.BuyButton).toBeVisible();


});

//<div class="mui-1mkcuan-search-results-root"><a class="mui-ji3plk-result-link" href="https://ksd.ua/product/paperova-pryntsesa-knyha-1"><picture class="mui-c5wnk8-img-cover ui-img--load"><img alt="" loading="lazy" width="73" height="80" decoding="async" data-nimg="1" src="https://prod-api.ksd.ua/storage/products/covers/small/UPUX83b6OKmulHcNDfqhAomvickm8EHP8lKecmF8.jpg.webp?v=1741081165" style="color: transparent;"></picture><div class="MuiBox-root mui-mz9qt7"><div class="MuiBox-root mui-4cxybv"><p class="MuiTypography-root MuiTypography-subtitle2 mui-1u9mv2q">Паперова принцеса. Книга 1</p><span class="MuiTypography-root MuiTypography-body3 mui-1xljai1">Ерін Ватт</span></div><div class="MuiBox-root mui-70qvj9"><p class="MuiTypography-root MuiTypography-body1 mui-onbwkb">470 грн</p></div></div></a></div>
//npx playwright test BookPageTests.spec.js --project=chromium --headed --debug