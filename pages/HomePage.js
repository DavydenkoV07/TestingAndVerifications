class HomePage {
    constructor(page) {
        this.page = page;

        this.searchInput = page.getByRole('textbox', { name: 'Пошук в КСД' });
        this.likedButton = page.getByRole('button', { name: 'Улюблені', exact: true });
        this.cartButton = page.getByRole('button', { name: 'Кошик', exact: true });
        this.fictionDropdown = page.getByRole('navigation').getByText('Художні');
        this.scifi = page.getByRole('link', { name: 'Фантастика' });
        this.AddToFavButton = page.getByRole('button', { name: 'Додати в улюблені' }).first();
        this.AddToCartButton = page.getByRole('button', { name: 'Додати в кошик' }).first();

    }

    async open() {
        await this.page.goto('https://ksd.ua/');
    }

    async searchBook(bookName) {
        await this.searchInput.fill(bookName);
        await this.page.keyboard.press('Enter');
    }

    async browseSciFi(){
        await this.fictionDropdown.hover();
        await this.scifi.click();
    }

    async AddToFav(){
        await this.AddToFavButton.click();
    }

    async openFavs(){
        await this.likedButton.click();
    }

    async AddToCart(){
        await this.AddToCartButton.click();
    }

    async openCart(){
        await this.cartButton.click();
    }

    

    
}

module.exports = { HomePage };