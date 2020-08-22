import currentDate from './currentDate.js';

'use strict';

export default function weekAgo() {
  const currentTime = new Date().getTime();
  const lastWeek = currentTime - 86400000 * 7;
  const dateWeekAgo = new Date(lastWeek);
  return dateWeekAgo.toJSON().slice(0, 10);
}