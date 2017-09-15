export class NewsModel {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;

  constructor(config) {
    config = config || {};
    this.author = config.author;
    this.title = config.title;
    this.description = config.description;
    this.url = config.url;
    this.urlToImage = config.urlToImage;
    this.publishedAt = config.publishedAt;
  }
}