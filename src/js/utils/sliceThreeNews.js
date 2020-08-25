import { NUMBER_OF_NEWS_TO_SHOW } from '../constants/constants.js';

'use strict';

export default function sliceThreeNews(arr) {
  return arr.slice(0, NUMBER_OF_NEWS_TO_SHOW);
}