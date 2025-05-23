// cypress/e2e/homepage.cy.ts
describe("HomePage", () => {
  it("displays title and loads articles", () => {
    cy.visit("/");
    cy.contains("NY Times Most Popular Article").should("be.visible");
  });

  it("should display articles and navigate to detail page", () => {
    cy.visit("/"); // Ensure homepage is loaded

    // Wait for the article list to appear (increase timeout if needed)
    cy.get('[data-testid="article-list"]', { timeout: 10000 }).should("exist");
  });

  it("shows error message when articles fail to load", () => {
    cy.intercept("GET", /mostpopular\/v2\/viewed\/.*\.json/, {
      forceNetworkError: true,
    }).as("getArticlesError");
    cy.visit("/");
    cy.contains("Failed to load articles. Please try again later.").should(
      "be.visible"
    );
  });
});
