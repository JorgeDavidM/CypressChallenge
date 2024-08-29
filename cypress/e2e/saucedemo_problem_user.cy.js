describe("SauceDemo Tests for Problem User", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#user-name").type("problem_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
  });

  it("Login", () => {
    cy.url().should("include", "/inventory.html");
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click();
    cy.url().should("include", "/");
  });

  it("Logout", () => {
    cy.url().should("include", "/inventory.html");
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click();
    cy.get("#login-button").should("be.visible");
  });

  it("Add an item to Cart", () => {
    cy.get(".inventory_item").first().find("button").click();
    cy.get(".shopping_cart_badge").should("contain", "1");
  });

  it("Remove an item from the Cart", () => {
    cy.get(".inventory_item").first().find("button").click();
    cy.get(".inventory_item").first().find("button").click();
    cy.get(".shopping_cart_badge").should("be.exist");
  });

  it("Checkout an item from the Cart", () => {
    cy.get(".inventory_item").first().find("button").click();
    cy.get(".shopping_cart_link").click();
    cy.get("#checkout").click();
    cy.get("#first-name").type("Jorge");
    cy.get("#last-name").type("Munoz");
    cy.get("#postal-code").type("12345");
    cy.get("#continue").click();
    cy.get('h3[data-test="error"]').should("be.visible");
  });
});
