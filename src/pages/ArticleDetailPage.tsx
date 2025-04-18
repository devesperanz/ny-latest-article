import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useArticle } from "../hooks/useArticle";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

function ArticleDetailPage() {
  const navigate = useNavigate();
  const { selectedArticle, setSelectedArticle } = useArticle();

  useEffect(() => {
    if (!selectedArticle) {
      const stored = localStorage.getItem("selectedArticle");
      if (stored) {
        setSelectedArticle(JSON.parse(stored));
      }
    }
  }, [selectedArticle, setSelectedArticle]);

  if (!selectedArticle) {
    return (
      <div className="p-6 text-center" data-testid="article-not-found">
        Article not found
      </div>
    );
  }

  const imageUrl =
    selectedArticle.media?.[0]?.["media-metadata"]?.find(
      (meta: { format: string; url?: string }) =>
        meta.format === "mediumThreeByTwo440"
    )?.url || "";

  return (
    <div
      className="p-6 max-w-7xl mx-auto"
      data-testid="article-details-container"
    >
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="mt-4 text-blue-500 flex items-center gap-2 ml-0 pl-0"
      >
        <ArrowLeftIcon />
        Go Back
      </Button>
      <div className="p-4 pb-0 space-y-4">
        <div className="w-full max-w-[350px] h-auto mx-auto sm:mx-0 rounded-md">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={selectedArticle.media?.[0]?.caption || "Article Image"}
              className="w-full h-auto rounded-md"
            />
          )}
        </div>
        <h2 className="text-xl sm:text-2xl font-bold">
          {selectedArticle.title}
        </h2>
        <p className="text-sm text-muted-foreground">
          {selectedArticle.byline}
        </p>

        <div className="">
          <p className="text-sm sm:text-base">{selectedArticle.abstract}</p>
          <div className="mt-4">
            {selectedArticle.keywords && (
              <div>
                <h4 className="font-semibold">Keywords:</h4>
                <p className="text-sm">{selectedArticle.keywords}</p>
              </div>
            )}
          </div>
          <div className="mt-4">
            {selectedArticle.des_facet &&
              selectedArticle.des_facet.length > 0 && (
                <div>
                  <h4 className="font-semibold">Topics:</h4>
                  <ul className="list-disc list-inside">
                    {selectedArticle.des_facet.map(
                      (facet: string, index: number) => (
                        <li key={index}>{facet}</li>
                      )
                    )}
                  </ul>
                </div>
              )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-sm">Section:</p>
            <Badge variant="outline">{selectedArticle.section}</Badge>
          </div>
          <div>
            <p className="font-semibold text-sm">Source:</p>
            <Badge variant="outline">{selectedArticle.source}</Badge>
          </div>
        </div>
        {selectedArticle.media?.[0]?.caption && (
          <p className="text-sm italic text-muted-foreground">
            {selectedArticle.media[0].caption}
          </p>
        )}
        <div className="pt-2 flex justify-end">
          <Button asChild data-testid="read-full-article-button">
            <a
              href={selectedArticle.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Full Article
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetailPage;
