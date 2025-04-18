import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "../pages/HomePage";
import { BrowserRouter } from "react-router-dom";
import { ArticleProvider } from "../context/ArticleProvider";
import * as articleService from "../services/articleService";

jest.mock("../services/articleService");

const mockArticles = [
  {
    id: "1",
    title: "Test Article",
    byline: "By Author",
    publishedDate: "2024-01-01",
    section: "News",
    source: "NY Times",
    url: "https://example.com",
    media: [],
  },
];

beforeEach(() => {
  (articleService.fetchArticles as jest.Mock).mockResolvedValue(mockArticles);
});

it("renders homepage title", async () => {
  render(
    <ArticleProvider>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </ArticleProvider>
  );
  // Wait for the mocked article title to appear
  expect(await screen.findByText("Test Article")).toBeInTheDocument();
});
