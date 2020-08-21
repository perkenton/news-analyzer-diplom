import '../pages/analytics.css';

import DataStorage from '../js/modules/DataStorage.js';
import Statistics from '../js/components/Statistics.js';
import StatisticsItem from '../js/components/StatisticsItem.js';
import StatisticsItemList from '../js/components/StatisticsItemList.js';

// import {
  

// } from '../js/constants/constants.js';


'use strict';

(function() {

  const dataStorage = new DataStorage();
  const newsArr = dataStorage.getNewsArr();
  const statistics = new Statistics(newsArr);

  const requestElem = document.querySelector('.request-data__request');
  const newsForWeekElem = document.querySelector('.request-data__news-for-week');
  const requestInTitleElem = document.querySelector('.request-data__request-in-title');
  
  const request = dataStorage.getSearchRequest();

  // console.log(dataStorage.getSearchRequest());

  const fillHeader = () => {
    requestElem.textContent = request;

    let requestCounter = 0;

    newsArr.forEach(item => {
      if(item.title.toLowerCase().includes(request.toLowerCase()) === true) {
        ++requestCounter;
      }
      return requestCounter;
    })

    // console.log(requestCounter);

    newsForWeekElem.textContent = newsArr.length;
    requestInTitleElem.textContent = requestCounter;
  };
  fillHeader();


  // const newsArrToDays = () => {
  //   const arrPublishedAt = [];

  //   newsArr.forEach(item => {
  //     arrPublishedAt.push(item.publishedAt.slice(0, 10));
  //   })

  //   arrPublishedAt.sort();
  //   console.log(arrPublishedAt);

  //   const numberRequest =[];

  //   function counerNews() {
  //     let count = 1;

  //     for (var i = 0; i < arrPublishedAt.length; i = i + count) {
  //       count = 1;
  //       for (var j = i + 1; j < arrPublishedAt.length; j++) {
  //         if (arrPublishedAt[i] === arrPublishedAt[j])
  //           count++;
            
  //       }
  //       numberRequest.push(count);
        
  //       }
  //       return numberRequest;
  //     }
  //     counerNews();
  //     console.log(numberRequest);
  //   }

  // newsArrToDays();
  console.log(statistics.numberNewsByDay());

})();