'use strict';

export default function currentDate() {
  const date = new Date();

  function addZero(num) {
    if (num >= 0 && num <= 9) {
      return '0' + num;
    } else {
      return num;
    }
  };

  return addZero(date.getFullYear()) + '-' + addZero(date.getMonth() + 1) + '-' + addZero(date.getDate());
}