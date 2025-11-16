describe("Fluxo 2 – Login", () => {
  it("Deve realizar login com sucesso", () => {
    cy.fixture("usuario").then((usuario) => {
      cy.visit("https://agendamento.quarkclinic.com.br/index/363622206");

      cy.get('[data-cy="btn-login"]').click();

      cy.get('[data-cy="campo-usuario-input"]').type(usuario.email);
      cy.get(
        '[data-cy="campo-senha-container"] [data-cy="campo-senha-input"]'
      ).type(usuario.senha);

      cy.get(
        '[data-cy="checkbox-aceita-politicas"] input[type="checkbox"]'
      ).check({
        force: true,
      });

      cy.intercept("POST", "**/login").as("postLogin");
      cy.contains("Continuar").click();

      cy.wait("@postLogin").its("response.statusCode").should("eq", 200);
      cy.contains(`Bem-vindo(a)`).should("be.visible");
    });
  });
});
