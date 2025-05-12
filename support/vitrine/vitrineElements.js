export const vitrineElements = {
    products: 'h3[class="product-card__title"] a',
    labelProductSearch: 'h3[class="product-card__title"]',
    selectProduct: 'div[data-cy="divProduct"]',
    productWithoutStock: '.dsvia-link',
    btnFilterMobile: 'button[class*="ButtonFilter"]',
    btnAplyFilterMobile: '[data-cy="buttonApplyFilterMobile"]',
    filterFlag: 'input[id*="Vendido"]', 
    titleFilterFlag:'button[data-testid*="filtro-selecionado-btn-Vendido-e-entregue-por-"]',
    gridProducts: '[data-testid="product-card-ProductsGrid"] >div',
    productPriceCard: '[class="product-card__highlight-price"]',
    productUnavailable: '[class="product-card__unavailable-wrapper"]', 
    titleProductSearch: 'span:has-text("Você buscou por")',
}

class VitrineElements{
    get products() {
        return this.page.locator(vitrineElements.products);
    }
    get labelProductSearch() {
        return this.page.locator(vitrineElements.labelProductSearch);
    }
    get selectProduct() {
        return this.page.locator(vitrineElements.selectProduct);
    }
    get productWithoutStock() {
        return this.page.locator(vitrineElements.productWithoutStock);
    }
    get btnFilterMobile() {
        return this.page.locator(vitrineElements.btnFilterMobile);
    }
    get btnAplyFilterMobile() {
        return this.page.locator(vitrineElements.btnAplyFilterMobile);
    }
    get filterFlag() {
        return this.page.locator(vitrineElements.filterFlag);
    }
    get titleFilterFlag() {
        return this.page.locator(vitrineElements.titleFilterFlag);
    }
    get gridProducts() {
        return this.page.locator(vitrineElements.gridProducts);
    }
    get productPriceCard() {
        return this.page.locator(vitrineElements.productPriceCard);
    }
    get productUnavailable() {
        return this.page.locator(vitrineElements.productUnavailable);
    }
    get titleProductSearch() {
        return this.page.locator(vitrineElements.titleProductSearch);
    }
}
export default new VitrineElements()