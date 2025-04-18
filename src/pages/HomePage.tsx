import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchArticles } from "../services/articleService";
import ArticleList from "../components/Article/ArticleList";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Skeleton } from "../components/ui/skeleton";
import type { Article } from "../lib/types";
import { useArticle } from "../hooks/useArticle";

function HomePage() {
  const [period, setPeriod] = useState(1);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setSelectedArticle } = useArticle();

  useEffect(() => {
    const loadArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const results = await fetchArticles(period);
        const mappedResults: Article[] = results.map((article) => ({
          id: article.id.toString(),
          title: article.title || "",
          byline: article.byline || "",
          abstract: article.abstract || "",
          publishedDate: article.published_date || "",
          media: article.media || [],
          url: article.url || "",
          section: article.section || "",
          source: article.source || "",
          des_facet: article.des_facet || [],
          keywords: article.adx_keywords || "",
          org_facet: article.org_facet || [],
        }));
        setArticles(mappedResults);
        setLoading(false);
      } catch {
        setError("Failed to load articles. Please try again later.");
        setLoading(false);
      }
    };

    loadArticles();
  }, [period]);

  const handleSelectAction = (article: Article) => {
    console.log("Selected Article:", article); // Debug log
    setSelectedArticle(article);
    navigate(`/article/${article.id}`);
  };

  return (
    <div className="p-6 pt-0 max-w-7xl mx-auto space-y-6">
      <div className="my-10 flex items-end justify-end">
        <Select
          value={String(period)}
          onValueChange={(value) => setPeriod(Number(value))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Last 1 Day</SelectItem>
            <SelectItem value="7">Last 7 Days</SelectItem>
            <SelectItem value="30">Last 30 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : loading ? (
        <div className="grid grid-cols-1 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-24 w-full" />
          ))}
        </div>
      ) : (
        <div data-testid="article-list">
          <ArticleList articles={articles} onSelect={handleSelectAction} />
        </div>
      )}
    </div>
  );
}

export default HomePage;
