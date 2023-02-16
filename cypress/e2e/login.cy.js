/// <reference types = "cypress" />

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.viewport(1600,900);
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    });
    
    afterEach(() => {
        cy.screenshot();
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com');
        cy.get('#password').type('teste@teste.com');
        cy.get('.woocommerce-form > .button').click();
        
        cy.get('.page-tittle').should('contain', 'Minha conta');
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac');
    })

    it('Deve exibir mensagem de erro ao informar um e-mail inválido', () => {
        cy.get('#username').type('aluno_ebac_invalido@teste.com');
        cy.get('#password').type('teste@teste.com');
        cy.get('.woocommerce-form > .button').click();
        
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido');
    })

    it('Deve exibir mensagem de erro ao informar uma senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com');
        cy.get('#password').type('teste_invalido@teste.com');
        cy.get('.woocommerce-form > .button').click();
        cy.contains('Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?');
    })
})