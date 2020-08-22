'use strict';

export default class NewsCardList {
  constructor(objNewsCardList) {
    this.NEWS_CARDS_CONTAINER = objNewsCardList.NEWS_CARDS_CONTAINER;
    this.createNewsCard = objNewsCardList.createNewsCard;
    this.RESULT_CONTAINER = objNewsCardList.RESULT_CONTAINER;
    this.formattingDate = objNewsCardList.formattingDate;
  }

  showResultContainer = () => {
    this.RESULT_CONTAINER.setAttribute('style', 'display: block');
  }

  hideResultContainer = () => {
    this.RESULT_CONTAINER.setAttribute('style', 'display: none');
  }

  clearCardsContainer = () => {
    this.NEWS_CARDS_CONTAINER.textContent = '';
  }

  addCard = (sourceName, title, description, urlToNews, urlToImage, publishedAt) => {
    const card = this.createNewsCard(sourceName, title, description, urlToNews, urlToImage, publishedAt);
    this.NEWS_CARDS_CONTAINER.appendChild(card);
  }

  render = (res) => {
    const alternativeUrlToImage = '../../images/image_is_null.jpg';

    res.forEach(item => {
      const normalDateFormat = this.formattingDate(item.publishedAt);
      if (item.urlToImage != null) {
        this.addCard(item.source.name, item.title, item.description, item.url, item.urlToImage, normalDateFormat);
      } else {
        this.addCard(item.source.name, item.title, item.description, item.url, alternativeUrlToImage, normalDateFormat);
      }
    });
  }
}