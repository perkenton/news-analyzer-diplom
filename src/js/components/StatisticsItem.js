'use strict';

export default class StatisticsItem {
  constructor(newsArr) {
    this.newsArr = newsArr;
  }

  #template = () => {
    const markup = `
      <div class="tabel__grid-two-columns">
        <span class="tabel__date">19, пн</span>
        <span class="tabel__strip" style="width: 15%;">15</span>
      </div>
    `;

    const element = document.createElement('div');
    element.insertAdjacentHTML('afterbegin', markup);
    return element.firstElementChild;
  }

  create = () => {
    this.item = this.#template();

    this.item.querySelector('.tabel__date').textContent = this.publishedAt;
    this.item.querySelector('.tabel__strip').textContent = this.publishedAt;
    this.item.querySelector('.tabel__strip').setAttribute('style', `width: ${this.urlToImage}%`);

    return this.item;
  }
}