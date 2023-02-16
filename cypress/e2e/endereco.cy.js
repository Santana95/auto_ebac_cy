/// <reference types = "cypress" />
import enderecoPage from "../support/page-objects/endereco.page";

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {

    beforeEach(()=> {
        cy.viewport(1600,900);
        cy.visit(baseUrl.baseUrl + 'minha-conta/');
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha);
        })
    })

    it('Deve fazer cadastro de faturamento com sucesso', () =>{
        enderecoPage.editarEnderecoFaturamento('Ian', 'Santana', 'Google', 'Brasil', 'Rua 01', '123', 'Sorocaba' , 'São Paulo', '1234567', '11987654321', 'email@dominio.com');
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.');
    })
})