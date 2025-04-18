import { render, screen } from "@testing-library/react";
import ArticleDetailPage from "../pages/ArticleDetailPage";
import { MemoryRouter } from "react-router-dom";
import { ArticleProvider } from "../context/ArticleProvider";

test("renders fallback for missing article", () => {
  render(
    <MemoryRouter>
      <ArticleProvider>
        <ArticleDetailPage />
      </ArticleProvider>
    </MemoryRouter>
  );

  expect(screen.getByText(/Article not found/i)).toBeInTheDocument();
});
