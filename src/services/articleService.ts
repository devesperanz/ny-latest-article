import axios from "axios";
import type { DetailedArticle } from "../lib/types";

// function getEnv(key: string): string {
//   // Use process.env in Jest/node
//   if (typeof process !== "undefined" && process.env && process.env[key]) {
//     return process.env[key] as string;
//   }
//   // Use import.meta.env in Vite/browser, but only reference it in a try/catch
//   try {
//     const env =
//       typeof import.meta !== "undefined"
//         ? import.meta.env
//         : (
//             globalThis as unknown as {
//               import: { meta: { env: Record<string, string> } };
//             }
//           ).import.meta.env;
//     if (env && env[key]) {
//       return env[key];
//     }
//   } catch {
//     // ignore
//   }
//   return "";
// }

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
