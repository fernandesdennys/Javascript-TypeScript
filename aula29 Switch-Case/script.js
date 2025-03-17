function getDayWeekText(dayWeek) {
  let dayWeekText;
  switch (dayWeek) {
    case 0:
      dayWeekText = 'Domingo';
      return dayWeekText;
    case 1:
      dayWeekText = 'Segunda-Feira';
      return dayWeekText;
    case 2:
      dayWeekText = 'Terça-feira';
      return dayWeekText;
    case 3:
      dayWeekText = 'Quarta-feira';
      return dayWeekText;
    case 4:
      dayWeekText = 'Quinta-feira';
      return dayWeekText;
    case 5:
      dayWeekText = 'Sexta-feira';
      return dayWeekText;
    case 6:
      dayWeekText = 'Sábado';
      return dayWeekText;
    default:
      dayWeekText = '';
      return dayWeekText;
  }
}

const date = new Date('1987-04-25 00:00:00');
const dayWeek = date.getDay();
const dayWeekText = getDayWeekText(dayWeek);

console.log(dayWeek, dayWeekText);



/* if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) { 
    diaSemanaTexto = 'Segunda-Feira';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça-feira';
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta-feira';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta-feira';
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta-feira';
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sábado';
} else {
    diaSemanaTexto = '';
}
 */
