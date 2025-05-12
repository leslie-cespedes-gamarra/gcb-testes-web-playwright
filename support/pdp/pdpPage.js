import { pdpElements } from './pdpElements.js';

class PdpPage {
    constructor(page) {
        this.page = page;
    }

    async addProductToCart() {
        await this.page.waitForLoadState('load');
        await this.page.waitForSelector(pdpElements.productName)
        await this.page.locator(pdpElements.btnAddToCart).first().scrollIntoViewIfNeeded();
        await this.page.locator(pdpElements.btnAddToCart).first().click({ force: true });
        await this.page.waitForSelector(pdpElements.btnConfirmPurchase);
        await this.page.locator(pdpElements.btnConfirmPurchase).click({ force: true });
        await this.page.waitForTimeout(1000); 
        await this.page.waitForLoadState('load');
        
        if (await this.page.locator(pdpElements.btnContinue).count() > 0) {
            await this.page.locator(pdpElements.btnContinue).scrollIntoViewIfNeeded();
            await this.page.locator(pdpElements.btnContinue).click({ force: true });
        }

    }

}
module.exports = PdpPage;