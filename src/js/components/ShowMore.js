'use strict';

export default class ShowMore {
  constructor(newsCardList, count) {
    this.count = count;
    this.newsCardList = newsCardList;
    this.number = 0;
  }

  cutArray = (arr) => {
    return arr.splice(3);
  }

  saveCatedArray = () => {
    
  }

  counter = () => {
    this.number += 1;
    console.log(this.number);
    // return number;
  }

  showAnotherThree = () => {
    // const cut = arr.slice(this.number * 3, (this.number + 1) * 3);
    // this.newsCardList.render(cut);
    // this.cutArray(arr);

    this.counter();
    // this.number += 1;
    // console.log(this.number);
    // return this.number;
    // arr.forEach
  }
}