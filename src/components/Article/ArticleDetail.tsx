import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

import type { Article } from "../../lib/types";

export default function ArticleDetail({
  article,
}: {
  article: Article | null;
}) {
  if (!article) {
    return (
      <div className="text-center text-muted-foreground py-10">
        Select an article to view details.
      </div>
    );
  }

  const imageUrl =
    article.media?.[0]?.["media-metadata"]?.find(
      (meta: { format: string; url?: string }) =>
        meta.format === "mediumThreeByTwo440"
    )?.url || "";

  return (
    <Card className="w-full border-none shadow-none">
      <CardContent className="p-4 pb-0 space-y-1">
        <div className="w-full max-w-[350px] h-auto mx-auto sm:mx-0 rounded-md">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={article.media?.[0]?.caption || "Article Image"}
              className="w-full h-auto rounded-md"
            />
          )}
        </div>
        <h2 className="text-xl sm:text-2xl font-bold">{article.title}</h2>
        <p className="text-sm text-muted-foreground">{article.byline}</p>

        <div className="overflow-y-scroll max-h-[300px]">
          <p className="text-sm sm:text-base">{article.abstract}</p>
          <div className="mt-4">
            {article.keywords && (
              <div>
                <h4 className="font-semibold">Keywords:</h4>
                <p className="text-sm">{article.keywords}</p>
              </div>
            )}
          </div>
          <div className="mt-4">
            {article.des_facet && article.des_facet.length > 0 && (
              <div>
                <h4 className="font-semibold">Topics:</h4>
                <ul className="list-disc list-inside">
                  {article.des_facet.map((facet: string, index: number) => (
                    <li key={index}>{facet}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-sm">Section:</p>
            <Badge variant="outline">{article.section}</Badge>
          </div>
          <div>
            <p className="font-semibold text-sm">Source:</p>
            <Badge variant="outline">{article.source}</Badge>
          </div>
        </div>
        {article.media?.[0]?.caption && (
          <p className="text-sm italic text-muted-foreground">
            {article.media[0].caption}
          </p>
        )}
        <div className="pt-2 flex justify-end">
          <Button asChild>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              View More
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
