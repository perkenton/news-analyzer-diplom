'use strict';

export default class ShowMore {
  constructor(SHOW_MORE_BUTTON, newsCardList) {
    this.SHOW_MORE_BUTTON = SHOW_MORE_BUTTON;
    this.newsCardList = newsCardList;
    this.number = 0;
  }

  show = () => {
    this.SHOW_MORE_BUTTON.setAttribute('style', 'display: flex');
  }

  hide = () => {
    this.SHOW_MORE_BUTTON.setAttribute('style', 'display: none');
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