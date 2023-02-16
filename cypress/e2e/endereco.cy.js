/// <reference types = "cypress" />
import enderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require('../fixtures/endereco.json')

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

    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () =>{
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
            );
        cy.get('.woocommerce-message').should('contain', 'Endereço aterado com sucesso.');
    })
})