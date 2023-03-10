/// <reference types = "cypress" />
var faker = require('faker');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.viewport(1600,900);
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    });
    
    afterEach(() => {
        cy.screenshot();
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let nomeFaker = faker.name.firstname();
        let sobrenomeFaker = faker.internet.lastname();
        let emailFaker = faker.internet.email(nomeFaker);

        cy.get('#reg_email').type(emailFaker);
        cy.get('#reg_password').type('teste@teste.com');
        cy.get(':nth-child(4) > .button').click();
        cy.contains('auto_teste_ian_00 !');
        cy.contains('A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.');
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
        cy.get('#account_first_name').type(nomeFaker);
        cy.get('#account_last_name').type(sobrenomeFaker);
        cy.get('.woocommerce-Button').click();
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso');
    })

    it ('Deve completar o pré cadastro com sucesso - Usando Comandos customizados', ()=> {
        let emailFaker2 = faker.internet.email();
        cy.preCadastro(emailFaker2, 'senha!@#forte', 'Ian', 'Santana');
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso');
    })
})