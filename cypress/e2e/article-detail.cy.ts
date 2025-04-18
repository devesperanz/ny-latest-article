describe("ArticleDetailPage", () => {
  it("should display articles on the homepage and navigate to an article detail page", () => {
    // Visit the homepage
    cy.visit("/");

    // Click on the first article link
    cy.get("[data-testid='article-link']").first().click();

    // Verify the URL includes the article ID
    cy.url().should("include", "/article/");
  });

  it('should show "Article not found" if no article is selected', () => {
    // Clear localStorage to simulate no selected article
    cy.visit("/article/some-nonexistent-id", {
      onBeforeLoad(win) {
        win.localStorage.removeItem("selectedArticle");
      },
    });

    cy.get('[data-testid="article-not-found"]')
      .should("exist")
      .and("contain", "Article not found");
  });
});
