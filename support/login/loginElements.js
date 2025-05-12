export const loginElements = { 
    btnLoginHome:'span:has-text("Entre ou cadastre-se")',
    userName: 'input[id="cpfcnpj-verification-input"]',
    password: 'input[id="password-input"]',    
    btnContinueLogin: 'button:has-text("Continuar")',
    btnFinishAuthentication: '[data-testid="loginCompletion-btn"]',
    welcome: 'h1[data-testid="identification-label"]',
    btnClose: '[id="close"]',
    btnDenyBiometry:'[data-testid="deny-biometry-btn"]'
}

class LoginElements{
    get btnClose() {
        return loginElements.btnClose
    }
    get btnLoginHome() {
        return loginElements.btnLoginHome
    }
    get userName() {
        return loginElements.userName
    }
    get password() {
        return loginElements.password
    }    
    get btnContinueLogin() {
        return loginElements.btnContinueLogin
    }
    get btnFinishAuthentication() {
        return loginElements.btnFinishAuthentication
    }
    get btnLogin() {
        return loginElements.btnLogin
    }
    get welcome() {
        return loginElements.welcome
    }
    get btnDenyBiometry() {
        return loginElements.btnDenyBiometry
    }
}
export default new LoginElements()