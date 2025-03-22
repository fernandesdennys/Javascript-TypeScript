function mostrarHora() { // Declara a função mostrarHora.
  let data = new Date(); // Cria um objeto Date com a data e hora atuais.
  return data.toLocaleTimeString('pt-BR', { // Retorna a hora formatada no padrão brasileiro.
    hour12: false // Define o formato de 24 horas (não usa AM/PM).
  });
}
console.log(mostrarHora()); // Exibe a hora atual no console.

/*
function funDoInterval() {
  cosole.log(mostrarHora()); 
} 
*/

const timer = setInterval(function () { // Inicia um intervalo que executa a função a cada 1000 ms (1 segundo).
  console.log(mostrarHora()); // Exibe a hora atual no console a cada segundo.
}, 1000);

setTimeout(function () { // Define um temporizador para executar uma função após 5000 ms (5 segundos).
  clearInterval(timer); // Para a execução do intervalo criado com setInterval após 5 segundos.
}, 5000);

setTimeout(function () { // Define outro temporizador que executa uma função após 5000 ms (5 segundos).
  console.log('Olá mundo!') // Exibe "Olá mundo!" no console após 5 segundos.
}, 5000);
