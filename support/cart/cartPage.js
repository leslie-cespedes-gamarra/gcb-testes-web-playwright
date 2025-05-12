import { cartElements } from "./cart.Elements";

class CartPage {
    constructor(page) {
        this.page = page;
    }

    async continueBuy() {
        await this.page.waitForTimeout(1000); 
        await this.page.waitForLoadState('load');
        if (await this.page.locator(cartElements.titleCart).count() > 0) {
            await this.page.locator(cartElements.btnFinishBuy).scrollIntoViewIfNeeded();
            await this.page.locator(cartElements.btnFinishBuy).click({ force: true });
        }
        await this.page.waitForLoadState('load');
        if (await this.page.locator(cartElements.btnContinue).count() > 0) {
            await this.page.locator(cartElements.btnContinue).scrollIntoViewIfNeeded();
            await this.page.locator(cartElements.btnContinue).click({ force: true });
        }

    }

    async continueCheckout() {        
        await this.page.waitForTimeout(1000);
        await this.page.waitForLoadState('load');
        if (await this.page.locator(cartElements.titleCart).count() > 0) {
            await this.page.locator(cartElements.btnContinue).scrollIntoViewIfNeeded();
            await this.page.locator(cartElements.btnContinue).click({ force: true });
        }
        await this.page.waitForLoadState('load');
        if (this.page.locator(cartElements.btnFinishBuy).count() > 0) {
            await this.page.locator(cartElements.btnFinishBuy).scrollIntoViewIfNeeded();
            await this.page.locator(cartElements.btnFinishBuy).click({ force: true }, { timeout: 1000 });

        }
    }
}



module.exports = CartPage;