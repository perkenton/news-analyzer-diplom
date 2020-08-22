'use strict';

export default function searchDayOfWeek(date) {
  const daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  
  function removeZero(num) {
  if(num.startsWith('0')) {
    return num.slice(1);
    } else {
      return num;
    }
  }

  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);    

  const formattedDate = `${year}, ${removeZero(month)}, ${removeZero(day)}`;

  const data = new Date(formattedDate);

  const weekdayNumber = data.getDay();
  return daysOfWeek[weekdayNumber];
}