/* 
for classico --> Geralmente com iteráveis (array ou strings)
for in --> Retorna o índice ou chave (strings, arrays ou objetos)
for of --> Retorna o valor em si (iteráveis, arrays ou strings) 
*/

//            123456...
const nomes = ['Dennys', 'Ricardo', 'Fernandes'];

// For clássico: mais controle sobre o índice
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]); // Acessa cada caractere usando o índice
}

console.log('----------');

// For...in: itera sobre os índices (ou chaves em objetos)
for (let i in nomes) {
  console.log(nomes[i]); // i representa o índice, então acessamos nomes[i]
}

console.log('----------');

// For...of: itera diretamente sobre os valores (não precisa acessar via índice)
for (let valor of nomes) {
  console.log(valor); // Valor já representa o caractere diretamente
}

console.log('----------');

// Utiliza o método forEach para iterar sobre cada elemento do array
nomes.forEach(function (valor, indice, array) {
  // "valor": representa o elemento atual do array em cada iteração
  // "indice": representa o índice (posição) do elemento atual no array
  // "array": representa o próprio array completo em cada iteração
  console.log(valor, indice, array);
});

