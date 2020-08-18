'use strict';

export default class NewsApi {
    constructor(NEWS_API_CONFIG) {
    this.url = NEWS_API_CONFIG.url;
    this.headers = NEWS_API_CONFIG.headers;
  }


  #fetchPromise = (request) => { //currentDate
    return fetch(`${this.url}` + 
      `q=${request}&` + 
      'sortBy=popularity&' + 
      `apiKey=${this.headers.authorization}` //currentDate
    )

      .then(res => {
        if(res.ok) {
          return res.json();
        }

        return Promise.reject(new Error(`${res.status}, ${res.statusText}`));

      })
  }

  getNews(request) {
    return this.#fetchPromise(request); //currentDate
  }
}