import { useContext, useState, useEffect } from "react";
import { ArticleContext } from "../context/ArticleContext";

export function useArticle() {
  const context = useContext(ArticleContext);
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  if (context === undefined) {
    throw new Error("useArticle must be used within an ArticleProvider");
  }

  useEffect(() => {
    console.log("Current Selected Article:", selectedArticle); // Debug log
  }, [selectedArticle]);

  return { ...context, selectedArticle, setSelectedArticle };
}
