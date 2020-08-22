'use strict';

export default class StatisticsItem {
  constructor(newsDate, newsDayOfWeek, numberNews) {
    this.newsDate = newsDate;
    this.newsDayOfWeek = newsDayOfWeek;
    this.numberNews = numberNews;
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

    this.item.querySelector('.tabel__date').textContent = `${this.newsDate}, ${this.newsDayOfWeek}`;
    this.item.querySelector('.tabel__strip').textContent = this.numberNews;
    this.item.querySelector('.tabel__strip').setAttribute('style', `width: ${this.numberNews}%`);

    return this.item;
  }
}