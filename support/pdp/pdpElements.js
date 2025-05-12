export const pdpElements = {
    inputCep: 'input[data-testid="digitar-frete"]',
    btnAddToCart: 'button[id="buy-button"]', 
    btnConfirmPurchase: 'button:has-text("Continuar")',
    btnContinueService: '[data-testid="continuar"]',
    btnFinishCart: '[data-qa="cart-finish-buy"]',
    btnContinue: 'button:has-text("Continuar")', 
    productName: 'div[data-testid="dsvia-base-div"] > h1',
   
   
}

class PdpElements {
    get inputCep() {
        return pdpElements.inputCep
    }
    get btnAddToCart() {
        return pdpElements.btnAddToCart
    }
    get btnConfirmPurchase() {
        return pdpElements.btnConfirmPurchase
    }
    get btnContinueService() {
        return pdpElements.btnContinueService
    }
    get btnFinishCart() {
        return pdpElements.btnFinishCart
    }
    get btnContinue() {
        return pdpElements.btnContinue
    }
    get btnSearchCep() {
        return pdpElements.btnSearchCep
    }
    get btnAddFavorites() {
        return pdpElements.btnAddFavorites
    }
    get productName() {
        return pdpElements.productName
    }
    
}

export default new PdpElements()