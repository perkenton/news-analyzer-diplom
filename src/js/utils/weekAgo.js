import currentDate from './currentDate.js';

'use strict';

export default function weekAgo() {
  const currentTime = new Date().getTime();
  const lastWeek = currentTime - 86400000 * 6;
  const dateWeekAgo = new Date(lastWeek);
  console.log(dateWeekAgo.toJSON().slice(0, 10));
  return dateWeekAgo.toJSON().slice(0, 10);
}