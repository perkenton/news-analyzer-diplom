import '../pages/index.css';
import NewsCard from '../js/components/NewsCard.js';
import NewsCardList from '../js/components/NewsCardList.js';
import NewsApi from '../js/modules/NewsApi.js';
import DataStorage from '../js/modules/DataStorage.js';
import SearchInput from '../js/components/SearchInput.js';
import NewsError from '../js/components/NewsError.js';
import NotFoundBlock from '../js/components/NotFoundBlock.js';
import Preloader from '../js/components/Preloader.js';
import ShowMore from '../js/components/ShowMore.js';
import sliceThreeNews from '../js/utils/sliceThreeNews.js';
import initNewsFromLocalStorage from '../js/utils/initNewsFromLocalStorage.js';
import formattingDate from '../js/utils/formattingDate.js';
import searchPeriod from '../js/utils/searchPeriod.js';
import currentDate from '../js/utils/currentDate.js';
import FormValidator from '../js/utils/FormValidator.js';


import {
  NUMBER_OF_NEWS_TO_SHOW,
  NUMBER_OF_NEWS_TO_SHOW_MORE,
  NEWS_CARDS_CONTAINER,
  NEWS_NOT_FOUND_CONTAINER,
  RESULT_CONTAINER,
  NEWS_API_CONFIG,
  ERROR_MESSAGES,
  ERROR_BLOCK,
  SHOW_MORE_BUTTON,
} from '../js/constants/constants.js';


'use strict';

(function() {

  const searchForm = document.forms.searchForm;
  const inputRequest = searchForm.elements.searchInput;
  const newsApi = new NewsApi(NEWS_API_CONFIG);
  const dataStorage = new DataStorage();
  const newsArr = dataStorage.getNewsArr();
  const newsError = new NewsError(NEWS_NOT_FOUND_CONTAINER);
  const notFoundBlock = new NotFoundBlock(NEWS_NOT_FOUND_CONTAINER);
  const preloader = new Preloader;
  const formValidator = new FormValidator(searchForm, ERROR_MESSAGES, ERROR_BLOCK);

  const createNewsCard = (sourceName, title, description, urlToNews, urlToImage, publishedAt) => {
    return new NewsCard({sourceName, title, description, urlToNews, urlToImage, publishedAt}).create();
  };
  const newsCardList = new NewsCardList({NEWS_CARDS_CONTAINER, createNewsCard, RESULT_CONTAINER, formattingDate});

  const showMore = new ShowMore({SHOW_MORE_BUTTON, newsCardList, dataStorage, NUMBER_OF_NEWS_TO_SHOW_MORE});

  formValidator.addListener();

  const searching = (searchRequest) => {
    newsCardList.clearCardsContainer();
    newsCardList.hideResultContainer();
    dataStorage.clear();
    preloader.show();
    showMore.hide();
    notFoundBlock.hide();
    document.querySelector('.search__button').setAttribute('disabled', 'disabled');

    newsApi.getNews(searchRequest, searchPeriod, currentDate)
        .then(res => {
          dataStorage.createDataStorage(searchRequest, res.articles);

          if(res.articles.length === 0) {
            preloader.hide();
            newsCardList.hideResultContainer();
            notFoundBlock.show();
            localStorage.clear();
          } else {
            notFoundBlock.hide();
            preloader.hide();
            newsCardList.showResultContainer();
            newsCardList.render(sliceThreeNews(dataStorage.getNewsArr()));
            showMore.show();
          }
        })
        
        .catch((err) => {
          preloader.hide();
          newsError.show(err);
      });
  };

  const searchRequest = new SearchInput(searchForm, inputRequest, dataStorage, searching);
  searchRequest.setSubmitListener();

  initNewsFromLocalStorage(dataStorage, newsCardList, sliceThreeNews, searchRequest, showMore);


})();