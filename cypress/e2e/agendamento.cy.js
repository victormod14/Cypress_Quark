describe("Fluxo 3 – Agendamento de Consulta Presencial", () => {
  beforeEach(() => {
    cy.login(); // custom command
  });

  it("Deve agendar consulta presencial com sucesso", () => {
    cy.get('[data-cy="btn-consulta-presencial"]').click();

    cy.get('[data-cy="convenio-radio-148"]').click({
      force: true,
    });
    cy.get('[data-cy="especialidade-item-60"]').click({
      force: true,
    });
    cy.get("#clinica-363622231").click({
      force: true,
    });

    cy.get(
      '[data-cy="agenda-item-horarios-container"] [data-cy^="agenda-item-horario-"]'
    ).then(($horarios) => {
      const random = Math.floor(Math.random() * $horarios.length);
      cy.wrap($horarios[random]).click();
    });

    cy.get('[data-cy="paciente-card-radio-input"]').click({
      force: true,
    });

    cy.get('[data-cy="confirmacao-btn-confirmar"]').click();

    cy.contains("Confirmar Agendamento").click();

    cy.get('[data-cy="finalizacao-msg-sucesso"]').should("be.visible");
  });
});
