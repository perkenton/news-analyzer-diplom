'use strict';

export default class NewsApi {
    constructor(GITHUB_API_URL) {
    this.GITHUB_API_URL = GITHUB_API_URL;
  }


  _fetchPromise = () => {
    return fetch(`${this.GITHUB_API_URL}`)

      .then(res => {
        if(res.ok) {
          return res.json();
        }

        return Promise.reject(new Error(`${res.status}, ${res.statusText}`));

      })
  }

  getNews() {
    return this._fetchPromise();
  }
}