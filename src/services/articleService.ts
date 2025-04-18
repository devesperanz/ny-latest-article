import axios from "axios";
import type { DetailedArticle } from "../lib/types";

const baseUrl = process.env.VITE_ARTICLES_BASE_URL || "";
const apiKey = process.env.VITE_ARTICLES_API_KEY || "";

export const fetchArticles = async (
  period: number
): Promise<DetailedArticle[]> => {
  if (!apiKey) {
    throw new Error("API key is missing.");
  }
  if (!baseUrl) {
    throw new Error("Base URL is missing.");
  }

  const url = `${baseUrl.replace("1", period.toString())}?api-key=${apiKey}`;
  const response = await axios.get(url);
  if (!response.data.results) {
    throw new Error("Failed to fetch articles");
  }
  return response.data.results;
};
