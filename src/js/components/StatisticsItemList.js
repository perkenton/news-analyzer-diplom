'use strict';

export default class StatisticsItemList {
  constructor(LINE_CHART_CONTAINER, createStatisticsItem, searchDayOfWeek) {
    this.LINE_CHART_CONTAINER = LINE_CHART_CONTAINER;
    this.createStatisticsItem = createStatisticsItem;
    this.searchDayOfWeek = searchDayOfWeek;
  }

  addItem = (newsDate, newsDayOfWeek, numberNews) => {
    const item = this.createStatisticsItem(newsDate, newsDayOfWeek, numberNews);
    this.LINE_CHART_CONTAINER.appendChild(item);
  }

  render = (res) => {
    res.forEach(item => {
      const newsDayOfWeek = this.searchDayOfWeek(item.date);
      this.addItem(item.day, newsDayOfWeek, item.quantity);
    });

  }
}