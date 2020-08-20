'use strict';

export default function formattingDate(date) {
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