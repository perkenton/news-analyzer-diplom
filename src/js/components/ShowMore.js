'use strict';

export default class ShowMore {
  constructor(SHOW_MORE_BUTTON, newsCardList, dataStorage) {
    this.SHOW_MORE_BUTTON = SHOW_MORE_BUTTON;
    this.newsCardList = newsCardList;
    this.dataStorage = dataStorage;
    this.number = 0;
  }

  show = () => {
    this.SHOW_MORE_BUTTON.setAttribute('style', 'display: flex');
    this.SHOW_MORE_BUTTON.addEventListener('click', () => {
      this.showAnotherThree(this.dataStorage.getNewsArr().splice(3));
    });
  }

  hide = () => {
    this.SHOW_MORE_BUTTON.setAttribute('style', 'display: none');
    this.SHOW_MORE_BUTTON.removeEventListener('click', () => {
      this.showAnotherThree(this.dataStorage.getNewsArr().splice(3));
    });
  }

  showAnotherThree = (arr) => {

    const threeNews = arr.slice(this.number * 3, (this.number + 1) * 3);
    this.newsCardList.render(threeNews);

    let arrLegth = (arr.length - ((this.number + 1) * 3));

    if(arrLegth <= 0) {
      this.hide();
    }

    this.number += 1;
  }
}