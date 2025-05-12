import { test, expect } from '@playwright/test';
const SearchPage = require('../support/search/searchPage.js');
const VitrinePage = require('../support/vitrine/vitrinePage.js');

const { vitrineElements } = require('../support/vitrine/vitrineElements.js');

test.describe('Deve realizar busca de produto e filtrar por bandeira', () => {

    test('Deve buscar um produto e filtrar por bandeira', async ({ page }) => {
        test.setTimeout(120000); 

        const searchPage = new SearchPage(page);// Cria uma instância da classe SearchPage0000000000
        const vitrinePage = new VitrinePage(page);
        
        await searchPage.goto('/', { waitUntil: 'networkidle' });//garanta que a página esteja completamente carregada antes de interagir com elementos
        const product = await searchPage.getRandomProduct(); 
        console.log(`Produto selecionado: ${product}`);
        await searchPage.searchProduct(product);
        await vitrinePage.filterByFlag();
        await page.waitForTimeout(1000);
        
        console.log("Verificando se o filtro foi aplicado com sucesso...")
        await page.waitForSelector(vitrineElements.products); 
        await page.waitForSelector(vitrineElements.titleFilterFlag);
        await expect(page.locator(vitrineElements.titleFilterFlag)).toBeVisible(); 
        const text = await page.locator(vitrineElements.titleFilterFlag).textContent(); 
        expect(text).toContain("Vendido e entregue por");


    })
})