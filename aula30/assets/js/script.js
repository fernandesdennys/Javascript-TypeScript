const h1 = document.querySelector('.container h1');
h1.innerHTML = 'Olá, mundo!';
const data = new Date();
h1.innerHTML = data.toString();

function getDayWeekText(dayWeek) {
  let dayWeekText;
  switch (dayWeek) {
    case 0:
      dayWeekText = 'Sunday';
      return dayWeekText;
    case 1:
      dayWeekText = 'Monday';
      return dayWeekText;
    case 2:
      dayWeekText = 'Tuesday';
      return dayWeekText;
    case 3:
      dayWeekText = 'Wednesday';
      return dayWeekText;
    case 4:
      dayWeekText = 'Thursday';
      return dayWeekText;
    case 5:
      dayWeekText = 'Friday';
      return dayWeekText;
    case 6:
      dayWeekText = 'Saturday';
      return dayWeekText;
    default:
      dayWeekText = '';
      return dayWeekText;
  }
}

function getmonthName(monthNumber) {
  let monthName;
  switch (monthNumber) {
    case 0:
      monthName = 'January';
      return monthName;
    case 1:
      monthName = 'February';
      return monthName;
    case 2:
      monthName = 'March';
      return monthName;
    case 3:
      monthName = 'April';
      return monthName;
    case 4:
      monthName = 'May';
      return monthName;
    case 5:
      monthName = 'June';
      return monthName;
    case 6:
      monthName = 'July';
      return monthName;
    case 7:
      monthName = 'August';
      return monthName;
    case 8:
      monthName = 'September';
      return monthName;
    case 9:
      monthName = 'October';
      return monthName;
    case 10:
      monthName = 'November';
      return monthName;
    case 11:
      monthName = 'December';
      return monthName;
    default:
      monthName = '';
      return monthName;
  }
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