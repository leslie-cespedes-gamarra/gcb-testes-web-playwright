import { vitrineElements } from './vitrineElements.js';

class VitrinePage {
    constructor(page) {
        this.page = page;
    }

    // Método para clicar em um produto disponivel aleatório na vitrine

    async clickRandomValidProduct() {

        const validProducts = []; // Lista para armazenar os índices dos produtos válidos
        const unavailableProducts = []; // Lista para produtos indisponíveis

        await this.filterByFlag();
        await this.page.waitForSelector(vitrineElements.gridProducts);
        const products = await this.page.$$(vitrineElements.gridProducts);

        for (let index = 0; index < products.length; index++) {
            const product = products[index];

            // Verifica se o produto esta disponível
            const priceElement = await product.$(vitrineElements.productPriceCard);
            if (priceElement) {
                validProducts.push(index);
            } else {
                const unavailableElement = await product.$(vitrineElements.productUnavailable);
                if (unavailableElement) {
                    unavailableProducts.push(index);
                    console.log(`Produto no índice ${index} está indisponível.`);
                }
            }
        }

        if (validProducts.length > 0) {
            const randomIndex = validProducts[Math.floor(Math.random() * validProducts.length)];
            const randomProduct = products[randomIndex];
            await this.page.waitForSelector(vitrineElements.titleProductSearch, { state: 'visible' });
            await this.page.waitForLoadState('load');
            await randomProduct.scrollIntoViewIfNeeded();
            await randomProduct.click({ force: true });

        } else {
            throw new Error('Nenhum produto encontrado na vitrine.');
        }
    }

    async filterByFlag() {
        const userAgent = await this.page.evaluate(() => navigator.userAgent);
        await this.page.waitForLoadState('load');
        const isMobile = userAgent.includes('Mobile');
        if (isMobile) {
            console.log('Dispositivo móvel detectado. Aplicando filtro móvel.');
            await this.page.waitForSelector(vitrineElements.btnFilterMobile);
            await this.page.locator(vitrineElements.btnFilterMobile).click({ force: true });
            await this.page.locator(vitrineElements.filterFlag).scrollIntoViewIfNeeded();
            await this.page.locator(vitrineElements.filterFlag).click({ force: true });
            await this.page.locator(vitrineElements.btnAplyFilterMobile).scrollIntoViewIfNeeded()
            await this.page.locator(vitrineElements.btnAplyFilterMobile).click({ force: true });
        } else {
            console.log('Dispositivo desktop detectado. Aplicando filtro desktop.');
            await this.page.locator(vitrineElements.filterFlag).scrollIntoViewIfNeeded();
            await this.page.locator(vitrineElements.filterFlag).click({ force: true });
        }

    }
}
module.exports = VitrinePage;