import { useState, useEffect, ReactNode } from "react";
import type { Article } from "../lib/types";

import { ArticleContext } from "./ArticleContext";

export function ArticleProvider({ children }: { children: ReactNode }) {
  const [selectedArticle, setSelectedArticleState] = useState<Article | null>(
    null
  );

  useEffect(() => {
    const stored = localStorage.getItem("selectedArticle");
    if (stored) {
      try {
        setSelectedArticleState(JSON.parse(stored));
      } catch {
        setSelectedArticleState(null);
      }
    }
  }, []);

  const setSelectedArticle = (article: Article | null) => {
    setSelectedArticleState(article);
    if (article) {
      localStorage.setItem("selectedArticle", JSON.stringify(article));
    } else {
      localStorage.removeItem("selectedArticle");
    }
  };

  return (
    <ArticleContext.Provider value={{ selectedArticle, setSelectedArticle }}>
      {children}
    </ArticleContext.Provider>
  );
}
