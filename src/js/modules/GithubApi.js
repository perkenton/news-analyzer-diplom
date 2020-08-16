'use strict';

export default class GithubApi {
  constructor(GITHUB_API_URL) {
    this.GITHUB_API_URL = GITHUB_API_URL;
  }

  #fetchPromise = () => {
    return fetch(`${this.GITHUB_API_URL}`)

      .then(res => {
        if(res.ok) {
          return res.json();
        }

        return Promise.reject(new Error(`${res.status}, ${res.statusText}`));

      })
  }

  getCommits() {
    return this.#fetchPromise();
  }
}