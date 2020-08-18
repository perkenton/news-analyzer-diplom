'use strict';

export default class NewsError {
  constructor(NEWS_NOT_FOUND_CONTAINER) {
    this.NEWS_NOT_FOUND_CONTAINER = NEWS_NOT_FOUND_CONTAINER;
  }

  show = (err) => {
    this.NEWS_NOT_FOUND_CONTAINER.querySelector('.not-found__title').textContent = 'Ну, беда...';
    this.NEWS_NOT_FOUND_CONTAINER.querySelector('.not-found__subtitle').textContent = err;
    this.NEWS_NOT_FOUND_CONTAINER.setAttribute('style', 'display: flex');
  }
}