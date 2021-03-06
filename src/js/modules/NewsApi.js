'use strict';

export default class NewsApi {
    constructor(NEWS_API_CONFIG) {
    this.url = NEWS_API_CONFIG.url;
    this.headers = NEWS_API_CONFIG.headers;
  }


  #fetchPromise = (request, searchPeriod, currentDate) => { 
    return fetch(`${this.url}` + 
      `q=${request}&` + 
      `from=${searchPeriod()}&` + 
      `to=${currentDate()}&` +
      'sortBy=popularity&' + 
      'pageSize=100&' +
      `apiKey=${this.headers.authorization}`
    )

      .then(res => {
        if(res.ok) {
          return res.json();
        }

        return Promise.reject(new Error(`${res.status}, ${res.statusText}`));

      })
  }

  getNews(request, searchPeriod, currentDate) {
    return this.#fetchPromise(request, searchPeriod, currentDate);
  }
}