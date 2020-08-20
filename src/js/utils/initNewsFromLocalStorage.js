'use strict';

export default function initNewsFromLocalStorage(dataStorage, newsCardList, sliceThreeNews, searchRequest, showMore) {
  if(dataStorage.getNewsArr() !== null) {
    searchRequest.insertRequest();
    newsCardList.render(sliceThreeNews(dataStorage.getNewsArr()));
    newsCardList.showResultContainer();
    showMore.show();
  } 
}