'use strict';

export default class NewsCardList {
  constructor(objNewsCardList) {
    this.NEWS_CARDS_CONTAINER = objNewsCardList.NEWS_CARDS_CONTAINER;
    this.createNewsCard = objNewsCardList.createNewsCard;
  }

  addCard = (sourceName, title, description, urlToNews, urlToImage, publishedAt) => {
    const card = this.createNewsCard(sourceName, title, description, urlToNews, urlToImage, publishedAt);
    this.NEWS_CARDS_CONTAINER.appendChild(card);
  }

  render = (res) => {
    const alternativeUrlToImage = 'https://sun9-24.userapi.com/_xiL0k4_od_RDK9Xr9UZ21_LfkdjeOdgdOkBlQ/5bG-BnskZrk.jpg';

    // const arr = this.TEST_NEWS.articles[1];
    const arr = res.slice(0,5);

    arr.forEach(item => {
      if (item.urlToImage != null) {
        this.addCard(item.source.name, item.title, item.description, item.url, item.urlToImage, item.publishedAt);
      } else {
        this.addCard(item.source.name, item.title, item.description, item.url, alternativeUrlToImage, item.publishedAt);
      }
    });
  }
}