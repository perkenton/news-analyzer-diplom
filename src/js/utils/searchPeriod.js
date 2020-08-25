import currentDate from './currentDate.js';
import { NEWS_SEARCH_PERIOD } from '../constants/constants.js';

'use strict';

export default function searchPeriod() {
  const currentTime = new Date().getTime();
  const periodCalculation = currentTime - 86400000 * NEWS_SEARCH_PERIOD;
  const dateInPast = new Date(periodCalculation);
  return dateInPast.toJSON().slice(0, 10);
}