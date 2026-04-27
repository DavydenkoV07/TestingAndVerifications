class BookPage {
    constructor(page) {
        this.page = page;
        
        this.wishlistButton = page.getByRole('button', { name: 'Додати в улюблені' });
        this.deleteFromLikedButton = page.getByRole('button', { name: 'Видалити з улюблених' });
        this.addToCartButton = page.locator('#id-root-product').getByText('Додати в кошик');
        this.addedToCartButton = page.locator('[aria-label="Додано в кошик"]');
        this.bookTitle = page.locator('h1');
       
    }

    async open() {
        await this.page.goto('https://ksd.ua/product/zona-pokryttia');
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async addToWishlist() {
        await this.wishlistButton.click();
    }
}

module.exports = { BookPage };