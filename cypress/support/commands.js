Cypress.Commands.add("gerarCPF", () => {
  function random(n) {
    return Math.floor(Math.random() * n);
  }

  let n1 = random(9);
  let n2 = random(9);
  let n3 = random(9);
  let n4 = random(9);
  let n5 = random(9);
  let n6 = random(9);
  let n7 = random(9);
  let n8 = random(9);
  let n9 = random(9);

  let d1 =
    11 -
    ((n1 * 10 +
      n2 * 9 +
      n3 * 8 +
      n4 * 7 +
      n5 * 6 +
      n6 * 5 +
      n7 * 4 +
      n8 * 3 +
      n9 * 2) %
      11);
  d1 = d1 >= 10 ? 0 : d1;

  let d2 =
    11 -
    ((n1 * 11 +
      n2 * 10 +
      n3 * 9 +
      n4 * 8 +
      n5 * 7 +
      n6 * 6 +
      n7 * 5 +
      n8 * 4 +
      n9 * 3 +
      d1 * 2) %
      11);
  d2 = d2 >= 10 ? 0 : d2;

  return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${d1}${d2}`;
});

Cypress.Commands.add("login", () => {
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

    cy.contains("Continuar").click();
  });
});
