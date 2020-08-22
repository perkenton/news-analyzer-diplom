'use strict';

export default class NewsCard {
  constructor(objNewsCard) {
    this.urlToNews = objNewsCard.urlToNews;
    this.urlToImage = objNewsCard.urlToImage;
    this.publishedAt = objNewsCard.publishedAt;
    this.title = objNewsCard.title;
    this.description = objNewsCard.description;
    this.sourceName = objNewsCard.sourceName;
  }

  #template = () => {
    const markup = `
      <div>
        <a class="card" target="_blank">
          <div class="card__image" style=""></div>
          <p class="card__published-at"></p>
          <h3 class="card__title"></h3>
          <p class="card__description"></p>
          <p class="card__source-name"></p>
        </a>
      </div>
    `;

    const element = document.createElement('div');
    element.insertAdjacentHTML('afterbegin', markup);
    return element.firstElementChild;
  }

  create = () => {
    this.newsCard = this.#template();

    this.newsCard.querySelector('.card').setAttribute('href', `${this.urlToNews}`);
    this.newsCard.querySelector('.card__image').setAttribute('style', `background-image: url(${this.urlToImage})`);
    this.newsCard.querySelector('.card__published-at').textContent = this.publishedAt;
    this.newsCard.querySelector('.card__title').textContent = this.title;
    this.newsCard.querySelector('.card__title').setAttribute('title', `${this.title}`);
    this.newsCard.querySelector('.card__description').textContent = this.description;
    this.newsCard.querySelector('.card__source-name').textContent = this.sourceName;

    return this.newsCard;
  }
}