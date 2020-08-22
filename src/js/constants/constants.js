export { 
  NEWS_CARDS_CONTAINER,
  NEWS_NOT_FOUND_CONTAINER,
  RESULT_CONTAINER,
  NEWS_API_CONFIG,
  ERROR_MESSAGES,
  ERROR_BLOCK,
  SHOW_MORE_BUTTON,
  COMMIT_CARDS_CONTAINER,
  GITHUB_API_URL,
  SWIPER_CONTAINER,
  SWIPER_CONFIG,
  LINE_CHART_CONTAINER,
};

// index.js constants

const NEWS_CARDS_CONTAINER = document.querySelector('.result__cards-list');

const NEWS_NOT_FOUND_CONTAINER = document.querySelector('.not-found');

const RESULT_CONTAINER = document.querySelector('.result');

const NEWS_API_CONFIG = {
  url: 'https://nomoreparties.co/news/v2/everything?',
  headers: {
    authorization: '153e4610e1864db79dbf8252a34f5610',
    'Content-Type': 'application/json'
  }
};

const ERROR_MESSAGES = {
    empty: 'Введите запрос',
    wrongRequest: 'Запрос может содержать кириллицу, латиницу или цифры',
  };

const ERROR_BLOCK = document.querySelector('.search__input-error');

const SHOW_MORE_BUTTON = document.querySelector('.result__button-more');

// about.js constants

const COMMIT_CARDS_CONTAINER = document.querySelector('.history__cards-list');

const GITHUB_API_URL = 'https://api.github.com/repos/perkenton/news-analyzer-diplom/commits';

const SWIPER_CONTAINER = document.querySelector('.swiper-container');

const SWIPER_CONFIG = {
  init: true,
  slidesPerView: 'auto',
  setWrapperSize: true,
  grabCursor: true,
  loop: true,

  pagination: {
    el: '.history__pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'history__pagination-item',
    bulletActiveClass: 'history__pagination-item_active',
  },

  navigation: {
    nextEl: '.history__card-arrow-right',
    prevEl: '.history__card-arrow-left',
  },
}

// analitics.js constants

const LINE_CHART_CONTAINER = document.querySelector('.tabel__statistics');

