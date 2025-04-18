import { useContext } from "react";
import { ArticleContext } from "../context/ArticleContext";

export function useArticle() {
  const context = useContext(ArticleContext);

  if (context === undefined) {
    throw new Error("useArticle must be used within an ArticleProvider");
  }

  return context;
}
