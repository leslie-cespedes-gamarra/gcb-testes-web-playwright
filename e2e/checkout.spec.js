import { test, expect } from '@playwright/test';
import userData from '../fixtures/user.json';

const SearchPage = require('../support/search/searchPage.js');
const VitrinePage = require('../support/vitrine/vitrinePage.js');
const PdpPage = require('../support/pdp/pdpPage.js');
const LoginPage = require('../support/login/loginPage.js');
const CartPage = require('../support/cart/cartPage.js');
const CheckoutPage = require('../support/checkout/checkoutPage.js');
const { checkoutElements } = require('../support/checkout/checkoutElements.js');

const username = userData.cpf1, password = userData.password1

test.describe('Deve Inserir produto no carrinho e realizar a compra', () => {
    test('Deve adicionar um produto ao carrinho e finalizar a compra', async ({ page }) => {
        test.setTimeout(240000); 
        const searchPage = new SearchPage(page);// Cria uma instância da classe SearchPage
        const vitrinePage = new VitrinePage(page);
        const pdpPage = new PdpPage(page);
        const loginPage = new LoginPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await searchPage.goto('/', { waitUntil: 'networkidle' });

        const product = await searchPage.getRandomProduct();
        console.log(`Produto selecionado: ${product}`);
        await searchPage.searchProduct(product);
        await vitrinePage.clickRandomValidProduct();
        await pdpPage.addProductToCart();
        await cartPage.continueBuy();
        await cartPage.continueCheckout();
        await loginPage.login(username, password);
        await checkoutPage.checkout();
        await checkoutPage.goToPayment();
        await page.waitForTimeout(1000);
        await page.waitForLoadState('load');
        await expect(page.locator(checkoutElements.titleOrderConfirmation)).toHaveText('Recebemos seu pedido, obrigado.');
        await page.locator(checkoutElements.titleBuySummary).scrollIntoViewIfNeeded();
        await expect(page.locator(checkoutElements.titleBuySummary)).toBeVisible();
        await expect(page.locator(checkoutElements.titleBuySummary)).toHaveText('Resumo da compra');

    });
});