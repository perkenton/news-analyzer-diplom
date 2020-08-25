import currentDate from './currentDate.js';
import searchPeriod from './searchPeriod.js';

'use strict';

export default function getMonth() {
  const months = [
      'январь',
      'февраль',
      'март',
      'апрель',
      'май',
      'июнь',
      'июль',
      'август',
      'сентябрь',
      'октябрь',
      'ноябрь',
      'декабрь'
    ];
  const dayInPast = searchPeriod();
  const today = currentDate();
  const monthInPast = dayInPast.slice(5, 7);
  const monthToday = today.slice(5, 7);

  function removeZero(num) {
    if(num.startsWith('0')) {
      return num.slice(1);
      } else {
        return num;
      }
    }

  const monthIndexInPast = removeZero(monthInPast) - 1;
  const monthIndexToday = removeZero(monthToday) - 1;
  let month;

  if(monthIndexInPast === monthIndexToday) {
    month = `(${months[monthIndexInPast]})`;
  } else {
    month = `(${months[monthIndexInPast]}–${months[monthIndexToday]})`;
  }

  return month;
}