/// <reference types="Cypress" />

import elements from "../elements/elements";

const Elements = new elements();
 

describe('Nesse parte teremos que desenvolver um projeto para testar vários aspectos da página Beta da Coodesh:', () => {

    it('Se a página está carregando corretamente a home page', () => {
        cy.fixture("dados").then(({ urlBase }) => {
            cy.visit(urlBase);

            cy.get(Elements.btnVerVagasHome())
                .contains("Ver Vagas")
                .should('be.visible');

            cy.get(Elements.btnBlog())
                .should('be.visible');

            cy.get(Elements.btnLogin())
                .should('be.visible');

            cy.get("#content > div > div > div > div.text-center.text-lg-left.space-top-2.col-lg-6 > div > h1")
                .contains("Conectamos developers validados às empresas")
                .should('be.visible');
        });
    })

    it('Navegar pela página e ir ao sistema de vagas no menú superior', () => {
        cy.get(Elements.btnVerVagasHome())
            .click();
    })


    it('Um vez na tela de vagas, nosso sistema de teste automatizado terá que buscar por uma empresa onde terá um ou mais resultados de vagas', () => {
        cy.get(Elements.primeiraEmpresaListagemVagas()).invoke('text').then((pEmpresa) => {
            var pEmpresa = pEmpresa.trim();

            cy.get(Elements.searchVagas())
                .type(pEmpresa);

            cy.get(Elements.btnBuscar())
                .click({ force: true });

            cy.contains('Ver Vaga');
        });


        it('Depois obter o resultado, deveremos abrir a vaga e revisar se o carregamento é realizado com sucesso ou não;', () => {
            cy.get(Elements.btnVisualizarDetalheVaga())
                .click();

            cy.get(Elements.btnTenhoInteresse())
                .contains("Tenho Interesse")
                .should('be.visible');

            cy.contains('Ver empresa');

            cy.contains('Descrição:');

        })

        it('Por último, precisamos saber se o sistema de candidatar está funcionando e para isso é necessário clicar no botão Candidatar-se e revisar se abriu o modal corretamente.', () => {
            cy.get(Elements.btnTenhoInteresse())
                .click();

            cy.contains('NOME COMPLETO*:');

            cy.get(Elements.inputNomeCadVaga())
                .should('be.visible');
        })
    })
})

