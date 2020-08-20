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
import lastWeek from '../js/utils/lastWeek.js';
import currentDate from '../js/utils/currentDate.js';


import {
  NEWS_CARDS_CONTAINER,
  NEWS_NOT_FOUND_CONTAINER,
  RESULT_CONTAINER,
  NEWS_API_CONFIG,
  SEARCH_FORM,
  INPUT_REQUEST,
  SHOW_MORE_BUTTON,

} from '../js/constants/constants.js';


'use strict';

(function() {

  const newsApi = new NewsApi(NEWS_API_CONFIG);
  const dataStorage = new DataStorage();
  const newsError = new NewsError(NEWS_NOT_FOUND_CONTAINER);
  const notFoundBlock = new NotFoundBlock(NEWS_NOT_FOUND_CONTAINER);
  const preloader = new Preloader;
  const date = new Date;


  const createNewsCard = (sourceName, title, description, urlToNews, urlToImage, publishedAt) => {
    return new NewsCard({sourceName, title, description, urlToNews, urlToImage, publishedAt}).create();
  };
  const newsCardList = new NewsCardList({NEWS_CARDS_CONTAINER, createNewsCard, RESULT_CONTAINER, formattingDate});

  const showMore = new ShowMore(SHOW_MORE_BUTTON, newsCardList);

  


  const searching = (searchRequest) => {
    newsCardList.clearCardsContainer();
    newsCardList.hideResultContainer();
    localStorage.clear();
    preloader.show();
    showMore.hide();
    notFoundBlock.hide();  

    newsApi.getNews(searchRequest, lastWeek, currentDate)
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



  const searchRequest = new SearchInput(SEARCH_FORM, INPUT_REQUEST, dataStorage, searching);
  searchRequest.setSubmitListener();

  initNewsFromLocalStorage(dataStorage, newsCardList, sliceThreeNews, searchRequest, showMore);

  SHOW_MORE_BUTTON.addEventListener('click', () => {
    showMore.showAnotherThree(dataStorage.getNewsArr().splice(3)); //
  });
  
})();