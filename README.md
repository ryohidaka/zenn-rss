# zenn-rss

[![npm version](https://badge.fury.io/js/zenn-rss.svg)](https://badge.fury.io/js/zenn-rss)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview

ZennのRSSフィードを取得するライブラリ

## Notes

## Installation

You can install this library using npm:

```shell
npm install zenn-rss
```

## Usage

```typescript
import { fetchZennRSS } from "zenn-rss";

// Fetch all RSS Feed data
const response = await fetchZennRSS(userId);
console.log(response);

// Fetch all articles
const articles = await fetchZennArticles(userId);
console.log(articles);
```

## Link

- [ZennをRSSフィードで購読する](https://zenn.dev/zenn/articles/zenn-feed-rss)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
