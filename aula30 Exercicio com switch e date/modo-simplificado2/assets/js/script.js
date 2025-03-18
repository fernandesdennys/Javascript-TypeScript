const h1 = document.querySelector('.container h1');
h1.innerHTML = 'Olá, mundo!';
const data = new Date();
h1.innerHTML = data.toString();

function getDayWeekText(dayWeek) {
  const daysWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysWeek[dayWeek];
}

function getmonthName(monthNumber) {
  const month = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December']
  return month[monthNumber];
}

function addZero(number) {
  return number >= 10 ? number : `0${number}`;
}

function creatDate(date) {
  const dayWeek = date.getDay();
  const monthNumber = date.getMonth();

  const nameDay = getDayWeekText(dayWeek);
  const nameMonth = getmonthName(monthNumber);

  return (`${nameDay}, ${date.getDate()} of ${nameMonth}` +
    ` of ${date.getFullYear()} ${addZero(date.getHours())}:${addZero(date.getMinutes())}`);
}
h1.innerHTML = creatDate(data);
// console.log(getDayWeekText(0));