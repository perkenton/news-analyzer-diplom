'use strict';

export default class Statistics {
  constructor(newsArr) {
    this.newsArr = newsArr;
  }

  #arrDateNews = () => {
    const arrPublishedAt = [];

    this.newsArr.forEach(item => {
      arrPublishedAt.push(item.publishedAt.slice(0, 10));
    })

    return arrPublishedAt.sort();
  }

  #listOfDateNews = () => {
    const arrPublishedAt = this.#arrDateNews();

    return Array.from(new Set(arrPublishedAt));
  }

  #listOfDaysNews = () => {
    const arrDaysNews = this.#listOfDateNews();
    const listOfDays = [];

    arrDaysNews.forEach(item => {
      listOfDays.push(item.slice(8, 10));
    })

    return listOfDays;
  }

  #numbersNewsByDay  = () => {
    const arrPublishedAt = this.#arrDateNews();
    const numberNews = [];
    let count = 1;

    for (let i = 0; i < arrPublishedAt.length; i = i + count) {
      count = 1;
      for (let j = i + 1; j < arrPublishedAt.length; j++) {
        if (arrPublishedAt[i] === arrPublishedAt[j])
          count++;
        }
        numberNews.push(count);
      }

    return numberNews;
  }

  makeObject = () => {
    const listOfDays = this.#listOfDaysNews();
    const numbers = this.#numbersNewsByDay();
    const listOfDate = this.#listOfDateNews();
    const obj = [ {day: '', quantity: '', date: ''}, ];

    for (let i = 0; i < listOfDays.length; i++) {
      obj[i] = { day: listOfDays[i], quantity: numbers[i], date: listOfDate[i] };
    }

    return obj;
  }

  numberOfRequestInTitle = (newsArr, request) => {
    let requestCounter = 0;

    newsArr.forEach(item => {
      if(item.title !== null) {
        if(item.title.toLowerCase().includes(request.toLowerCase()) === true) {
          ++requestCounter;
        }
      } else {
        console.log('А в заголовке есть null!')
      }
    })
    
    return requestCounter;
  }

}