export const cartElements = {
    orderSummaryTitle:'h2:has-text("Resumo do pedido")',
    btnContinueBuy: 'button:has-text("Continuar")',
    btnConfirmBuy: '[data-testid="confirm-button"]', 
    btnContinue: 'button:has-text("Continuar")',
    titleCart: 'h1:has-text("Meu carrinho")',
    btnFinishBuy: '[data-qa="cart-finish-buy"]', 
    soldAndDeliveredBy:'p:has-text("Vendido e entregue por")',

}
class CartElements {
    get orderSummaryTitle() {
        return cartElements.orderSummaryTitle
    }
    get btnContinueBuy() {
        return cartElements.btnContinueBuy
    }
    get btnConfirmBuy() {
        return cartElements.btnConfirmBuy
    }
    get btnContinue() {
        return cartElements.btnContinue
    }
    get btnFinishBuy() {
        return cartElements.btnFinishBuy
    }
    get titleCart() {
        return cartElements.titleCart
    }
    get soldAndDeliveredBy() {
        return cartElements.soldAndDeliveredBy
    }

    
}	
export default new CartElements()