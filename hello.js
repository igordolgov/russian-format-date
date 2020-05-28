//Вывод полной даты и времени в консоль в русскоязычном варианте со склонениями
let now = new Date();
let day = now.getDate();
let month = now.getMonth();
let year = now.getFullYear();
let today = now.getDay();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let currentMonth = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
let dayOfWeek = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];

// функция склонения чисел (n = что склоняем, titles = как склоняем)
function declOfNum(n, titles) {
  cases = [2, 0, 1, 1, 1, 2];
  return titles[(n%100 > 4 && n%100 < 20) ? 2 : cases[(n%10 < 5) ? n%10 : 5]];
}

// //Второй вариант
// function declOfNum(n, titles) {
//   return titles[n%10 == 1 && n%100 != 11 ? 0 : n%10 >= 2 && n%10 <= 4 && (n%100 < 10 || n%100 >= 20) ? 1 : 2];
// }

console.log('Сегодня ' + day + ' ' + currentMonth[month] + ' ' + year + ' года, ' + dayOfWeek[today] + ', ' + hours + ' ' + (declOfNum(hours, ['час', 'часа', 'часов'])) + ' ' + minutes + ' ' + (declOfNum(minutes, ['минута', 'минуты', 'минут'])) + ' ' + seconds + ' ' + (declOfNum(seconds, ['секунда', 'секунды', 'секунд'])));