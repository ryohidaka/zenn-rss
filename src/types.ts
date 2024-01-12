export type ZennRSSFeed = {
  items: ZennArticle[];
  feedUrl: string;
  image: Image;
  paginationLinks: PaginationLinks;
  title: string;
  description: string;
  generator: "zenn.dev";
  link: string;
  language: string;
  lastBuildDate: string;
};

type Image = {
  link: string;
  url: string;
  title: string;
};

type PaginationLinks = {
  self: string;
};

export type ZennArticle = {
  creator: string;
  title: string;
  link: string;
  pubDate: string;
  enclosure: {};
  "dc:creator": string;
  content: string;
  contentSnippet: string;
  guid: string;
  isoDate: string;
};
