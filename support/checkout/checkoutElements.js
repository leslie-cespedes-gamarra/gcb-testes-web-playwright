import { title } from "process"

export const checkoutElements = {   
    btnPayment: 'button:has-text("Ir para pagamento")',
    btnContinue: '[data-id="btnContinuar"]',
    titleOrderSummary: 'h2:has-text("Resumo do pedido")',
    titleDeliveryAddress: 'h1:has-text("Endereço de entrega")',
    titlePayment: 'h1:has-text("Pagamento")',
    btnPix: 'li[data-qa="checkout-payment-pix"]',
    btnFinishBuy: 'button:has-text("Finalizar compra")',
    titleOrderConfirmation: 'span:has-text("Recebemos seu pedido, obrigado.")',
    titleBuySummary: 'h2:has-text("Resumo da compra")',
}

class CheckoutElements {
    get btnPayment() {
        return checkoutElements.btnPayment
    }
    get btnContinue() {
        return checkoutElements.btnContinue
    }
    get titleOrderSummary() {
        return checkoutElements.titleOrderSummary
    }
    get titleDeliveryAddress() {
        return checkoutElements.titleDeliveryAddress
    }
    get titlePayment() {
        return checkoutElements.titlePayment
    }
    get btnPix() {
        return checkoutElements.btnPix
    }
    get btnFinishBuy() {
        return checkoutElements.btnFinishBuy
    }
    get titleOrderConfirmation() {
        return checkoutElements.titleOrderConfirmation
    }
    get titleBuySummary() {
        return checkoutElements.titleBuySummary
    }
}
export default new CheckoutElements()