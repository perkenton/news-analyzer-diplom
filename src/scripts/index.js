import '../pages/index.css';
import NewsCard from '../js/components/NewsCard.js';
import NewsCardList from '../js/components/NewsCardList.js';

import {
  NEWS_CARDS_CONTAINER,
  TEST_NEWS,
} from '../js/constants/constants.js';


'use strict';

(function() {

  const createNewsCard = (sourceName, title, description, urlToNews, urlToImage, publishedAt) => {
    return new NewsCard({sourceName, title, description, urlToNews, urlToImage, publishedAt}).create();
  }
  const newsCardList = new NewsCardList({NEWS_CARDS_CONTAINER, createNewsCard, TEST_NEWS});
  newsCardList.render();

})();