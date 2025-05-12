import { searchElements } from "./searchElements.js";
import productData from '../../fixtures/product.json'; // Importa os dados do produto

class SearchPage {
    constructor(page) {
        this.page = page;
    }
    // Fecha o popup de cookies
    async closePopup() {
        if (await this.page.isVisible(searchElements.btnClose)) {
            await this.page.click(searchElements.btnClose);
        }
    }
    // Remove verificações de bloqueadores para evitar que o Playwright seja detectado como um bot
    async removeBlockers() {
        await this.page.addInitScript(() => {
            Object.defineProperty(navigator, 'webdriver', { get: () => false });
        });
    }
    async goto(url) {
        await this.removeBlockers();
        await this.page.goto(url);
        await this.closePopup(); // Fecha o popup de cookies
    }
    async getRandomProduct() {
        const products = productData.description[0]["1P"]; // Acessa a lista "1P"
        const randomIndex = Math.floor(Math.random() * products.length); // Gera um índice aleatório
        return products[randomIndex]; 
    }
    async searchProduct(product) {       
        await this.page.waitForSelector(searchElements.search);
        await this.page.fill(searchElements.search, product);
        await this.page.click(searchElements.btnStartSearch);
    }
}

module.exports = SearchPage; 