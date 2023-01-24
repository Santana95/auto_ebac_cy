/// <reference types = "cypress" />

context('Funcionalidade Login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.viewport(1600,900);
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
        cy.get('#username').type('aluno_ebac@teste.com');
        cy.get('#password').type('teste@teste.com');
        cy.get('.woocommerce-form > .button').click();
        cy.contains('Welcome aluno_ebac !');
    })

    it('Deve exibir mensagem de erro ao informar um e-mail inválido', () => {
        cy.viewport(1600,900);
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
        cy.get('#username').type('aluno_ebac_invalido@teste.com');
        cy.get('#password').type('teste@teste.com');
        cy.get('.woocommerce-form > .button').click();
        cy.contains('Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.');
    })

    it('Deve exibir mensagem de erro ao informar uma senha inválida', () => {
        cy.viewport(1600,900);
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
        cy.get('#username').type('aluno_ebac@teste.com');
        cy.get('#password').type('teste_inválido@teste.com');
        cy.get('.woocommerce-form > .button').click();
        cy.contains('Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?');
    })
})