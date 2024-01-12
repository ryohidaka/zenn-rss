import { fetchZennArticles, fetchZennRSS } from "../src/ZennRSS";
import { ZennArticle, ZennRSSFeed } from "../src/types";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

describe("ZennRSS", () => {
  const userId = process.env.USER_ID;
  if (!userId) {
    throw new Error("User ID not available. Please provide a valid user ID.");
  }

  describe("fetchZennRSS", () => {
    it("should return a valid Zenn RSS response", async () => {
      const response = await fetchZennRSS(userId);

      assertZennRSSProperties(response);
    });
  });

  describe("fetchZennArticles", () => {
    it("should return a valid Zenn article response", async () => {
      const response = await fetchZennArticles(userId);

      response.forEach((article) => assertZennArticleProperties(article));
    });
  });
});

function assertZennRSSProperties(response: ZennRSSFeed) {
  // Assert: Check if the response has the expected structure
  const expectedProperties = [
    "items",
    "feedUrl",
    "image",
    "paginationLinks",
    "title",
    "description",
    "generator",
    "link",
    "language",
    "lastBuildDate",
  ];

  expectedProperties.forEach((property) => {
    expect(response).toHaveProperty(property);
  });
}

function assertZennArticleProperties(article: ZennArticle) {
  // Assert: Check if the article has the expected structure
  const expectedProperties = [
    "creator",
    "title",
    "link",
    "pubDate",
    "enclosure",
    "dc:creator",
    "content",
    "contentSnippet",
    "guid",
    "isoDate",
  ];

  expectedProperties.forEach((property) => {
    expect(article).toHaveProperty(property);
  });
}
