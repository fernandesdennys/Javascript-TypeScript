/* 
📌 Resumo:

O while só executa se a condição for verdadeira desde o começo.
O do...while sempre executa o bloco pelo menos uma vez antes de checar a condição.
O código gera números aleatórios entre 1 e 50 até sair o número 10, imprimindo os valores no console.

*/


function random(min, max) { // Função que gera um número aleatório inteiro entre 'min' e 'max'  
  const r = Math.random() * (max - min) + min; // Gera um número decimal aleatório entre 'min' e 'max'  
  return Math.floor(r); // Arredonda o número gerado para baixo, garantindo que ele seja inteiro
}

const min = 1; // Declara a constante 'min' com valor 1
const max = 50; // Declara a constante 'max' com valor 50
let rand = random(min, max); // Chama a função 'random' para gerar um número aleatório entre 1 e 50, armazenando em 'rand'
console.log(rand !== 10); // Verifica se 'rand' é diferente de 10 e exibe o resultado (true ou false) no console

while (rand !== 10) { // Enquanto 'rand' for diferente de 10, continua executando o bloco de código abaixo  
  rand = random(min, max); // Gera um novo número aleatório entre 1 e 50 e atualiza a variável 'rand'  
  console.log(rand); // Exibe o valor de 'rand' no console
}

console.log('################');

// Mesmo código anterior, repetido com pequenas mudanças de nome nas variáveis

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min1 = 1; // Declara a constante 'min1' com valor 1
const max2 = 50; // Declara a constante 'max2' com valor 50
let rand3 = 10; // Inicializa a variável 'rand3' com valor 10
console.log(rand3 !== 10); // Verifica se 'rand3' é diferente de 10 e exibe o resultado no console (vai dar false, pois rand3 = 10)

// Esse loop nunca executa, porque 'rand3' já começa com o valor 10
while (rand3 !== 10) {
  rand3 = random(min1, max2);
  console.log(rand3);
}

console.log('################');


do {  // Faz a mesma lógica do while, mas com o loop 'do...while' que executa o bloco pelo menos uma vez
  rand = random(min, max); // Gera um novo número aleatório entre 1 e 50 e atualiza a variável 'rand'
  console.log(rand); // Exibe o valor de 'rand' no console
} while (rand !== 10); // Continua o loop enquanto 'rand' for diferente de 10
