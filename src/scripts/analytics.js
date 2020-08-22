import '../pages/analytics.css';

import DataStorage from '../js/modules/DataStorage.js';
import Statistics from '../js/components/Statistics.js';
import StatisticsItem from '../js/components/StatisticsItem.js';
import StatisticsItemList from '../js/components/StatisticsItemList.js';
import searchDayOfWeek from '../js/utils/searchDayOfWeek.js';
import weekAgo from '../js/utils/weekAgo.js';
import currentDate from '../js/utils/currentDate.js';
import getMonth from '../js/utils/getMonth.js';

import {
  LINE_CHART_CONTAINER,
} from '../js/constants/constants.js';


'use strict';

(function() {
  
  const initAnanlisys = () => {
    const dataStorage = new DataStorage();
    const newsArr = dataStorage.getNewsArr();

    if(newsArr !== null) {
      document.querySelector('.request-data__no-data').setAttribute('style', 'display: none');
      document.querySelector('.request-data__is-data').setAttribute('style', 'display: block');
      document.querySelector('.tabel').setAttribute('style', 'display: block');
      const request = dataStorage.getSearchRequest();
      const statistics = new Statistics(newsArr);

      const statisticsData = statistics.makeObject();
      const requestCounter = statistics.numberOfRequestInTitle(newsArr, request);

      const createStatisticsItem = (newsDate, newsDayOfWeek, numberNews) => {
        return new StatisticsItem(newsDate, newsDayOfWeek, numberNews).create();
      };
      const statisticsItemList = new StatisticsItemList(LINE_CHART_CONTAINER, createStatisticsItem, searchDayOfWeek);
      statisticsItemList.render(statisticsData);


      const fillPage = () => {
        const month = getMonth();
        document.querySelector('.request-data__request').textContent = request;
        document.querySelector('.request-data__news-for-week').textContent = newsArr.length;
        document.querySelector('.request-data__request-in-title').textContent = requestCounter;
        document.querySelector('.tabel__date-month').textContent = month;
      };
      fillPage();
    }
  };

  initAnanlisys();

})();