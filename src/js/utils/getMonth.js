import currentDate from './currentDate.js';
import weekAgo from './weekAgo.js';

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
  const dateWeekAgo = weekAgo();
  const today = currentDate();
  const monthWeekAgo = dateWeekAgo.slice(5, 7);
  const monthToday = today.slice(5, 7);

  function removeZero(num) {
    if(num.startsWith('0')) {
      return num.slice(1);
      } else {
        return num;
      }
    }

  const monthIndexWeekAgo = removeZero(monthWeekAgo) - 1;
  const monthIndexToday = removeZero(monthToday) - 1;
  let month;

  if(monthIndexWeekAgo === monthIndexToday) {
    month = `(${months[monthIndexWeekAgo]})`;
  } else {
    month = `(${months[monthIndexWeekAgo]}–${months[monthIndexToday]})`;
  }

  return month;
}