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

import {
  NEWS_CARDS_CONTAINER,
  NEWS_NOT_FOUND_CONTAINER,
  RESULT_CONTAINER,
  NEWS_API_CONFIG,
  SEARCH_FORM,
  INPUT_REQUEST,
  SHOW_MORE_BUTTON,

  TEST_NEWS,
} from '../js/constants/constants.js';


'use strict';

(function() {

  const newsApi = new NewsApi(NEWS_API_CONFIG);
  const dataStorage = new DataStorage();
  const newsError = new NewsError(NEWS_NOT_FOUND_CONTAINER);
  const notFoundBlock = new NotFoundBlock(NEWS_NOT_FOUND_CONTAINER);
  const preloader = new Preloader;
  

  const createNewsCard = (sourceName, title, description, urlToNews, urlToImage, publishedAt) => {
    return new NewsCard({sourceName, title, description, urlToNews, urlToImage, publishedAt}).create();
  };
  const newsCardList = new NewsCardList({NEWS_CARDS_CONTAINER, createNewsCard, TEST_NEWS});

  const threeNews = (arr) => {
    return arr.slice(0,3);
  }

  const showMore = new ShowMore(SHOW_MORE_BUTTON, newsCardList);

  SHOW_MORE_BUTTON.addEventListener('click', () => {
    showMore.showAnotherThree(dataStorage.getNewsArr().splice(3)); //
  });


  const searching = (searchRequest) => {
    NEWS_CARDS_CONTAINER.innerHTML = '';
    // .result hide
    localStorage.clear();
    preloader.show();
    showMore.hide();    

    newsApi.getNews(searchRequest)
        .then(res => {
          dataStorage.createDataStorage(searchRequest, res.articles);

          if(res.articles.length === 0) {
            preloader.hide();
            RESULT_CONTAINER.setAttribute('style', 'display: none');
            notFoundBlock.show();
          } else {
            notFoundBlock.hide();
            preloader.hide();
            RESULT_CONTAINER.setAttribute('style', 'display: block');


            newsCardList.render(threeNews(dataStorage.getNewsArr()));
            showMore.show();
          }
        })
        
        .catch((err) => {
          preloader.hide();
          newsError.show(err);
      });
  };

  const searchRequest = new SearchInput(SEARCH_FORM, INPUT_REQUEST, searching).setSubmitListener();



  // в конце колбека вызывается функция, которая обрезает массив и возвращает новый
  // в начале колбек принимает обрезанный массив

})();