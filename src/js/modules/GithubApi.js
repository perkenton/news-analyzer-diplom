'use strict';

export default class GithubApi {
  constructor() {
    
  }


  _fetchPromise = (partOfUrl) => {
    return fetch(`${this.serverUrl}${partOfUrl}`, {
      headers: this.headers
    })

      .then(res => {
        if(res.ok) {
          return res.json();
        }

        return Promise.reject(new Error(`Ошибка: ${res.status}, ${res.statusText}`));

      })
  }

  getCards() {
    return this._fetchPromise(`cards`);
  }
}