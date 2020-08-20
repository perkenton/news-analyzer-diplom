import currentDate from './currentDate.js';

'use strict';

export default function lastWeek() {
  const currentTime = new Date().getTime();
  const weekAgo = currentTime - 86400000 * 7; // текущая дата в миллисекундах минус сутки в милисекундах умноженные на 7
  const dateWeekAgo = new Date(weekAgo);
  return dateWeekAgo.toJSON().slice(0, 10);
}