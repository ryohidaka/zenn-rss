import Parser from "rss-parser";
import { ZennArticle, ZennRSSFeed } from "./types";
import { BASE_URL } from "./constants";

/**
 * Parses Zenn RSS feed for a given user ID.
 * @param userID - Zenn user ID.
 * @returns A promise that resolves to the parsed Zenn RSS feed.
 */
let parser: Parser<ZennRSSFeed> = new Parser();

/**
 * Retrieves Zenn RSS feed for a given user ID.
 * @param userID - Zenn user ID.
 * @returns A promise that resolves to the Zenn RSS feed.
 */
export const fetchZennRSS = async (userID: string): Promise<ZennRSSFeed> => {
  return parser.parseURL(`${BASE_URL}${userID}/feed`);
};

/**
 * Retrieves Zenn articles for a given user ID.
 * @param userID - Zenn user ID.
 * @returns A promise that resolves to an array of Zenn articles.
 */
export const fetchZennArticles = async (
  userID: string,
): Promise<ZennArticle[]> => {
  const feed = await fetchZennRSS(userID);
  return feed.items;
};
