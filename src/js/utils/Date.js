'use strict';

export default class Date {
  constructor() {
    
  }

  currentDate = () => {
    const date = new Date();

    function addZero(num) {
      if (num >= 0 && num <= 9) {
        return '0' + num;
      } else {
        return num;
      }
    }

    return addZero(date.getFullYear()) + '-' + addZero(date.getMonth() + 1) + '-' + addZero(date.getDate());
  }

  lastWeek = () => {
    const currentTime = new Date().getTime();
    const weekAgo = currentTime - 86400000 * 7; // текущая дата в миллисекундах минус сутки в милисекундах умноженные на 7
    const dateWeekAgo = new Date(weekAgo);
    return dateWeekAgo.toJSON().slice(0, 10);
  }

  formattingDate = (date) => {
    const months = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря'
    ];
    
    function removeZero(num) {
      if(num.startsWith('0')) {
        return num.slice(1);
      } else {
        return num;
      }
    }
    
    const day = date.slice(8, 10);
    const month = date.slice(5, 7);
    const monthIndex = removeZero(month) - 1;
    const year = date.slice(0, 4);

    return `${removeZero(day)} ${months[monthIndex]}, ${year}`;
  }
}