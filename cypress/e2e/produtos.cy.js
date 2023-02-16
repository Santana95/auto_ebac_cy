/// <reference types = "cypress" />
var faker = require('faker');

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.viewport(1600,900);
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    });
    
    afterEach(() => {
        cy.screenshot();
    });

    it('Deve selecionar o produto da lista', () => {
        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshrit')
            .click();
    })

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3;
        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshrit').click();
        cy.get('.button-variable-item-M').click();
        cy.get('.button-variable-item-Purple').click();
        cy.get('.input-text').clear().type(quantidade);
        cy.get('.single_add_to_cart_button').click();

        cy.get('.dropdown-toogle > .mini-cart-items').should('contain' , quantidade);
        cy.get('.woocommerce-message').should('contain', quantidade + ' x "Ariel Roll Sleeve Sweatshirt" foram adicionados no seu carrinho.');
    })

    it('Deve adicionar um produto ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshrit', 'XS', 'Red', 5);
    })

    it('Deve adicionar um produto ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', 3);
    })
})