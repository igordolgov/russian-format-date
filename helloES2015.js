//Вывод полной даты и времени в консоль в русскоязычном варианте со склонениями, с интервалом 1 сек.
//Стрелочная функция и const вместо var (ES2015)
setInterval(() => {
  const d = new Date();
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  const today = d.getDay();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  const currentMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const dayOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

// функция склонения чисел (n = что склоняем, titles = как склоняем)
  function declOfNum(n, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[(n % 100 > 4 && n % 100 < 20) ? 2 : cases[(n % 10 < 5) ? n % 10 : 5]];
  }
//Переделка по новому стандарту ES2015:
  console.log(`Сегодня ${day} ${currentMonth[month]} ${year} года, ${dayOfWeek[today]}, ${hours} ${declOfNum(hours, ['час', 'часа', 'часов'])} ${minutes} ${declOfNum(minutes, ['минута', 'минуты', 'минут'])} ${seconds} ${declOfNum(seconds, ['секунда', 'секунды', 'секунд'])}`);
}, 1000);