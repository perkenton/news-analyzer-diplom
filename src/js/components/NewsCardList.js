'use strict';

export default class NewsCardList {
  constructor(objNewsCardList) {
    this.NEWS_CARDS_CONTAINER = objNewsCardList.NEWS_CARDS_CONTAINER;
    this.TEST_NEWS = objNewsCardList.TEST_NEWS;
    this.createNewsCard = objNewsCardList.createNewsCard;
  }

  addCard = (sourceName, title, description, urlToNews, urlToImage, publishedAt) => {
    const card = this.createNewsCard(sourceName, title, description, urlToNews, urlToImage, publishedAt);
    this.NEWS_CARDS_CONTAINER.appendChild(card);
  }

  render = () => {
    const alternativeUrlToImage = '../../images/jacques-yves-cousteau-464.jpg';

    this.TEST_NEWS.articles.forEach(item => {
      if (item.urlToImage != null) {
        this.addCard(item.source.name, item.title, item.description, item.url, item.urlToImage, item.publishedAt);
      } else {
        this.addCard(item.source.name, item.title, item.description, item.url, alternativeUrlToImage, item.publishedAt);
      }
    });
  }
}