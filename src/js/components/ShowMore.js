'use strict';

export default class ShowMore {
  constructor(objShowMore) {
    this.SHOW_MORE_BUTTON = objShowMore.SHOW_MORE_BUTTON;
    this.newsCardList = objShowMore.newsCardList;
    this.dataStorage = objShowMore.dataStorage;
    this.NUMBER_OF_NEWS_TO_SHOW_MORE = objShowMore.NUMBER_OF_NEWS_TO_SHOW_MORE;
    this.number = 0;
  }

  show = () => {
    this.SHOW_MORE_BUTTON.setAttribute('style', 'display: flex');
    this.SHOW_MORE_BUTTON.addEventListener('click', () => {
      this.#showOtherNews(this.dataStorage.getNewsArr().splice(this.NUMBER_OF_NEWS_TO_SHOW_MORE));
    });
  }

  hide = () => {
    this.SHOW_MORE_BUTTON.setAttribute('style', 'display: none');
    this.SHOW_MORE_BUTTON.removeEventListener('click', () => {
      this.#showOtherNews(this.dataStorage.getNewsArr().splice(this.NUMBER_OF_NEWS_TO_SHOW_MORE));
    });
  }

  #showOtherNews = (arr) => {

    const threeNews = arr.slice(this.number * this.NUMBER_OF_NEWS_TO_SHOW_MORE, (this.number + 1) * this.NUMBER_OF_NEWS_TO_SHOW_MORE);
    this.newsCardList.render(threeNews);

    let arrLegth = (arr.length - ((this.number + 1) * this.NUMBER_OF_NEWS_TO_SHOW_MORE));

    if(arrLegth <= 0) {
      this.hide();
    }

    this.number += 1;
  }
}