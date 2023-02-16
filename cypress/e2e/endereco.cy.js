/// <reference types = "cypress" />

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {

    beforeEach(()=> {
        cy.viewport(1600,900);
        cy.visit(baseUrl.baseUrl + 'minha-conta/');
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha);
        })
    })

    it('Deve fazer cadastro de faturamento com sucesso', () =>{
        //
    })
})