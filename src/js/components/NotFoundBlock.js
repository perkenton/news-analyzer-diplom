'use strict';

export default class NotFoundBlock {
  constructor(NEWS_NOT_FOUND_CONTAINER) {
    this.NEWS_NOT_FOUND_CONTAINER = NEWS_NOT_FOUND_CONTAINER;
  }

  show = () => {
    this.NEWS_NOT_FOUND_CONTAINER.querySelector('.not-found__title').textContent = `Ничего не найдено`;
    this.NEWS_NOT_FOUND_CONTAINER.querySelector('.not-found__subtitle').textContent = `К сожалению по вашему запросу ничего не найдено.`;
    this.NEWS_NOT_FOUND_CONTAINER.setAttribute('style', 'display: flex');
  }

  hide = () => {
    this.NEWS_NOT_FOUND_CONTAINER.setAttribute('style', 'display: none');
  }

}