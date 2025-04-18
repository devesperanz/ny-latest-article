export interface Article {
  id: string;
  title: string;
  byline: string;
  section: string;
  source: string;
  publishedDate: string;
  url: string;
  abstract: string;
  des_facet: string[];
  media: {
    "media-metadata"?: {
      url: string;
      format: string;
      height: number;
      width: number;
    }[];
    caption?: string;
  }[];
  keywords: string;
  org_facet: string[];
}

export interface ArticleListProps {
  articles: Article[];
  onSelect: (article: Article) => void;
}

export interface DetailedArticle {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  column: string | null;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  media: {
    type: string;
    subtype: string;
    caption: string;
    copyright: string;
    approved_for_syndication: number;
    "media-metadata": {
      url: string;
      format: string;
      height: number;
      width: number;
    }[];
  }[];
  eta_id: number;
}
