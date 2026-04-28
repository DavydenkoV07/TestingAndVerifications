const { expect } = require("@playwright/test");

class AuthorsPage {
    constructor(page) {
        this.page = page;
        this.header = page.locator('h1');
        

    }

    async findAuthor(authorName){
        await this.page.getByRole('link', { name: authorName }).click();
    }



}

module.exports = { AuthorsPage };