export { 
  NEWS_CARDS_CONTAINER,
  NEWS_NOT_FOUND_CONTAINER,
  RESULT_CONTAINER,
  NEWS_API_CONFIG,
  SEARCH_FORM,
  ERROR_MESSAGES,
  ERROR_BLOCK,
  INPUT_REQUEST,
  SHOW_MORE_BUTTON,
  COMMIT_CARDS_CONTAINER,
  GITHUB_API_URL,
  SWIPER_CONTAINER,
  SWIPER_CONFIG,
};



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

const SEARCH_FORM = document.forms.searchForm;

const ERROR_MESSAGES = {
    empty: 'Введите запрос',
    wrongRequest: 'Запрос может содержать кириллицу, латиницу или цифры',
  };

const ERROR_BLOCK = SEARCH_FORM.querySelector('.search__input-error');

const INPUT_REQUEST = SEARCH_FORM.elements.searchInput;

const SHOW_MORE_BUTTON = document.querySelector('.result__button-more');


const COMMIT_CARDS_CONTAINER = document.querySelector('.history__cards-list');

const GITHUB_API_URL = 'https://api.github.com/repos/perkenton/news-analyzer-diplom/commits';

const SWIPER_CONTAINER = '.swiper-container';

const SWIPER_CONFIG = {
  init: true,
  slidesPerView: 'auto',
  setWrapperSize: true,
  grabCursor: true,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}

