import { checkoutElements } from "./checkoutElements";

class CheckoutPage {
    constructor(page) {
        this.page = page;
    }
    async checkout() {
        await this.page.waitForLoadState('load');
        await this.page.waitForSelector(checkoutElements.titleOrderSummary, { timeout: 10000 });
        await this.page.waitForSelector(checkoutElements.btnPayment);
        await this.page.locator(checkoutElements.btnPayment).click({ force: true });
        await this.page.waitForTimeout(1000); 
        if (await this.page.locator(checkoutElements.btnContinue).count() > 0) {
            await this.page.locator(checkoutElements.btnContinue).scrollIntoViewIfNeeded();
            await this.page.locator(checkoutElements.btnContinue).click({ force: true });
        }
    }
    async goToPayment() {
        await this.page.waitForLoadState('load');
        await this.page.waitForSelector(checkoutElements.titleOrderSummary, { timeout: 10000 });
        await this.page.locator(checkoutElements.btnPayment).scrollIntoViewIfNeeded();
        await this.page.locator(checkoutElements.btnPayment).click({ force: true });
        await this.page.waitForLoadState('load');
        await this.page.locator(checkoutElements.btnPix).scrollIntoViewIfNeeded();
        await this.page.locator(checkoutElements.btnPix).click({ force: true });
        await this.page.locator(checkoutElements.btnFinishBuy).scrollIntoViewIfNeeded({ timeout: 10000 });
        await this.page.locator(checkoutElements.btnFinishBuy).click({ force: true });
        await this.page.waitForTimeout(2000); 
    }
   
}

module.exports = CheckoutPage;