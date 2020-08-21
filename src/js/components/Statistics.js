'use strict';

export default class Statistics {
  constructor(newsArr) {
    this.newsArr = newsArr;
    
  }

  arrDateNews = () => {
    const arrPublishedAt = [];

    this.newsArr.forEach(item => {
      arrPublishedAt.push(item.publishedAt.slice(0, 10));
    })

    return arrPublishedAt.sort();
  }

  numberNewsByDay  = () => {
    const arrPublishedAt = this.arrDateNews();
    const numberNews = [];
    let count = 1;

    for (var i = 0; i < arrPublishedAt.length; i = i + count) {
      count = 1;
      for (var j = i + 1; j < arrPublishedAt.length; j++) {
        if (arrPublishedAt[i] === arrPublishedAt[j])
          count++;
        }
        numberNews.push(count);
      }

    return numberNews;
  }

}