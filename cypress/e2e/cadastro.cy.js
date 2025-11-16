/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

describe("Fluxo 1 – Cadastro de Novo Usuário", () => {
  it("Deve cadastrar um novo usuário com sucesso", () => {
    cy.visit("https://agendamento.quarkclinic.com.br/index/363622206");

    cy.get('[data-cy="btn-cadastro"]').click();

    const nome = faker.person.fullName();
    const email = `teste_${Date.now()}@mail.com`; // evita email repetido
    const celular = `83${faker.string.numeric(9)}`;
    const senha = "Teste@123";

    cy.get('[data-cy="campo-nome-input"]').type(nome);
    cy.get('[data-cy="campo-telefone-input"]').type(celular);
    cy.get('[data-cy="campo-sexo-select"]').select("MASCULINO");
    cy.get('[data-cy="campo-data-nascimento-input"]').type("08-08-2002");

    cy.get('[data-cy="row-campo-email"] [data-cy="campo-email-input"]').type(
      email
    );
    cy.get('[data-cy="campo-tipo-documento-select"]').select("CPF");

    cy.gerarCPF().then((cpfGerado) => {
      cy.get('[data-cy="campo-numero-documento-input"]').type(cpfGerado);
    });

    cy.get('[data-cy="row-campo-senha"] [data-cy="campo-senha-input"]').type(
      senha
    );
    cy.get('[data-cy="campo-confirmar-senha-input"]').type(senha);

    cy.get('[data-cy="row-aceita-politicas"] input[type="checkbox"]').check({
      force: true,
    });

    cy.intercept("POST", "**/api/social/usuarios").as("postRegister");

    cy.get('[data-cy="btn-criar-conta"]').click();

    cy.wait("@postRegister", { timeout: 30000 })
      .its("response.statusCode")
      .should("eq", 200);
  });
});
