// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

/* 
const tresHoras = 60 * 60 * 3 * 1000; // 3 horas em milissegundos
const umDia = 60 * 60 * 24 * 1000; // 1 dia em milissegundos
const data = new Date(0); // 01/01/1970 Timestamp Unix ou época Unix
const data1 = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp Unix ou época Unix + 3 horas + 1 dia

console.log(data.toString()); // Mostra a data e hora
console.log(data.toDateString()); // Mostra a data
console.log(data.toLocaleDateString()); // Mostra a data no formato local
console.log(data.toTimeString()); // Mostra a hora  
const data = new Date(2025, 4, 20, 23, 59, 59); // Ano, Mês, Dia, Hora, Minuto, Segundo, Milissegundo

const data = new Date(1742234629993); // Timestamp Unix ou época Unix
console.log('Timestamp', data.getTime()); // Timestamp Unix ou época Unix
console.log('Dia', data.getDate()); // Dia 
console.log('Mês', data.getMonth()); // Mês começa do 0
console.log('Ano', data.getFullYear()); // Ano 
console.log('Hora', data.getHours()); // Hora 
console.log('Minuto', data.getMinutes()); // Minuto 
console.log('Segundo', data.getSeconds()); // Segundo 
console.log('Milisegundo', data.getMilliseconds()); // Milisegundo 
console.log('Dia da semana', data.getDay()); // Dia da semana 0 é Domingo e 6 é Sábado
console.log(data.toString());
console.log(Date.now()); // Mostra o timestamp atual
*/
