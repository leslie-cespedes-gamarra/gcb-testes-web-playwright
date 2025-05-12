import { test, expect } from '@playwright/test';

const SearchPage = require('../support/search/searchPage.js');
const VitrinePage = require('../support/vitrine/vitrinePage.js');
const PdpPage = require('../support/pdp/pdpPage.js');
const { cartElements } = require('../support/cart/cart.Elements.js');

test.describe('Deve Inserir produto no carrinho', () => {
    test('Deve adicionar um produto ao carrinho', async ({ page }) => {
        test.setTimeout(120000); 
        const searchPage = new SearchPage(page); // Cria uma instância da classe SearchPage
        const vitrinePage = new VitrinePage(page);
        const pdpPage = new PdpPage(page);

        await searchPage.goto('/', { waitUntil: 'networkidle' });

        const product = await searchPage.getRandomProduct(); 
        console.log(`Produto selecionado: ${product}`);
        await searchPage.searchProduct(product); 
        await vitrinePage.clickRandomValidProduct();
        await pdpPage.addProductToCart(); 
        await page.waitForTimeout(1000);
        await expect(page.locator(cartElements.titleCart)).toHaveCount(1);
        await expect(page.locator(cartElements.titleCart)).toHaveText('Meu carrinho');
        await expect(page.locator(cartElements.soldAndDeliveredBy)).toContainText(/Vendido e entregue por/); // Verifica se o nome do produto está correto

    })
})