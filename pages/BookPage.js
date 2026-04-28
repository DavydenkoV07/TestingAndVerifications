class BookPage {
    constructor(page) {
        this.page = page;
        
        this.addToCartButton = page.locator('button.mui-j6qv6p-ui-button');
        this.CartButton = page.getByRole('button', { name: 'Кошик', exact: true });
        this.bookTitle = page.locator('h1');
       
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

}

module.exports = { BookPage };