import { createContext } from "react";
import type { Article } from "../lib/types";

type ArticleContextType = {
  selectedArticle: Article | null;
  setSelectedArticle: (article: Article | null) => void;
};

export const ArticleContext = createContext<ArticleContextType | undefined>(
  undefined
);
