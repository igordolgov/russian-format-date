//Вывод полной даты и времени в консоль в русскоязычном варианте со склонениями, с интервалом 1 сек.
setInterval(function () {
  let d = new Date();
  let day = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  let today = d.getDay();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  let currentMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  let dayOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

// функция склонения чисел (n = что склоняем, titles = как склоняем)
  function declOfNum(n, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[(n % 100 > 4 && n % 100 < 20) ? 2 : cases[(n % 10 < 5) ? n % 10 : 5]];
  }

  console.log('Сегодня ' + day + ' ' + currentMonth[month] + ' ' + year + ' года, ' + dayOfWeek[today] + ', ' + hours + ' ' + (declOfNum(hours, ['час', 'часа', 'часов'])) + ' ' + minutes + ' ' + (declOfNum(minutes, ['минута', 'минуты', 'минут'])) + ' ' + seconds + ' ' + (declOfNum(seconds, ['секунда', 'секунды', 'секунд'])));
}, 1000);