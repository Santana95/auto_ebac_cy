/// <reference types = "cypress" />

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.viewport(1600,900);
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    });
    
    afterEach(() => {
        cy.screenshot();
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        cy.get('#reg_email').type('auto_teste_ian_00@teste.com');
        cy.get('#reg_password').type('teste@teste.com');
        cy.get(':nth-child(4) > .button').click();
        cy.contains('auto_teste_ian_00 !');
        cy.contains('A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.');
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
        cy.get('#account_first_name').type('Auto');
        cy.get('#account_last_name').type('Ian');
        cy.get('.woocommerce-Button').click();
        cy.contains('Detalhes da conta modificados com sucesso');
    })
})