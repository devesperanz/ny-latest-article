import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

import type { Article, ArticleListProps } from "../../lib/types";

export default function ArticleList({ articles, onSelect }: ArticleListProps) {
  if (!articles.length)
    return <p className="text-muted-foreground">No articles available.</p>;

  return (
    <div className="grid grid-cols-1 gap-4 max-h-[800px] overflow-scroll">
      {articles.map((article: Article) => (
        <Card
          key={article.id}
          onClick={() => onSelect(article)}
          className="cursor-pointer hover:shadow-md transition-all"
          data-testid="article-link"
        >
          <CardContent className="p-4 space-y-1">
            <div className="flex items-center gap-4">
              {article.media?.[0]?.["media-metadata"]?.[0]?.url && (
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={article.media[0]["media-metadata"][0].url}
                    alt={article.title}
                    width={75}
                    height={75}
                    className="rounded"
                  />
                </a>
              )}
              <div>
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {article.byline}
                </p>
                {article.publishedDate && (
                  <p className="text-xs text-muted-foreground">
                    Published: {article.publishedDate}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {article.section && (
                <Badge variant="secondary">{article.section}</Badge>
              )}
              {article.source && <Badge>{article.source}</Badge>}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
