class SearchResultsPage {
    constructor(page) {
        this.page = page;
        this.searchResults = page.locator('main .ui-catalog-card--variant-home');
        this.header = page.locator('h1');
       
    }

    async verifyResultsContain(bookName) {
        await this.page.locator('body').waitFor();
    }

    async clickFirstResult() {
        await this.searchResults.first().click();
    }
}

module.exports = { SearchResultsPage };