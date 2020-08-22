'use strict';

export default class DataStorage {
  constructor() {
    
  }

  createDataStorage = (searchRequest, newsArr) => {
    localStorage.setItem('request', searchRequest);
    localStorage.setItem('newsArr', JSON.stringify(newsArr));
  }

  getNewsArr = () => {
    return JSON.parse(localStorage.getItem('newsArr'));
  }

  getSearchRequest = () => {
    return localStorage.getItem('request');
  }

  clear = () => {
    localStorage.clear();
  }
}