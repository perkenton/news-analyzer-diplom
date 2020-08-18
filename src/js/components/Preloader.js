'use strict';

export default class Preloader {
  constructor() {
    this.preloaderContainer = document.querySelector('.preloader');
  }

  show = () => {
    this.preloaderContainer.setAttribute('style', 'display: block');
  }

  hide = () => {
    this.preloaderContainer.setAttribute('style', 'display: none');
  }

}