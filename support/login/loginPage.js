import { loginElements } from './loginElements.js';

class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async goto(url) {
        await this.page.goto(url);
    }
    async closePopup() {
        
        if (await this.page.locator(loginElements.btnClose).isVisible()) {
            console.log('Popup de cookies visível. Fechando...');
            await this.page.locator(loginElements.btnClose).click(); // Fecha o popup de cookies
        }
    }

    async verifyBiometry() {	
        if (await this.page.isVisible(loginElements.btnDenyBiometry)) {
            console.log('Campo de biometria encontrado.');
            await this.page.locator(loginElements.btnDenyBiometry).click({ force: true });
        } else {
            console.log('Campo de biometria não encontrado.');
        }
    }
    async login(username, password) {
        await this.closePopup(); // Fecha o popup de cookies
        if (await this.page.isVisible(loginElements.userName)) {
            await this.page.waitForSelector(loginElements.userName);
            await this.page.locator(loginElements.userName).fill(username);
            await this.page.locator(loginElements.btnContinueLogin).click({ force: true });
            await this.page.waitForSelector(loginElements.password);
            await this.page.locator(loginElements.password).fill(password);
            await this.page.locator(loginElements.btnFinishAuthentication).click({ force: true });
            await this.verifyBiometry(); // Verifica o campo de biometria
        }
        else {
            console.log('Campo de nome de usuário não encontrado.');
        }
    }

    async isLoggedIn() {
            return await this.page.isVisible(loginElements.welcome);
        }
    }
module.exports = LoginPage;