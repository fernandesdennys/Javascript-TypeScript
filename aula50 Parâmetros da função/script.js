/* função definida com a palafra function tem uma variável especial que chama arguments
que sustenta todos os argumentos enviados 

 function funcao(a, b, c, d, e, f) { //<- Parâmetros
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9) //<-- Argumento */


function funcao(a, b, c, d, e, f) { //<- Parâmetros
  console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3) //<-- Argumento são valores que voce envia para os parâmetros

console.log('---------------------');

function funcao1(a, b = 2, c = 4) {
  console.log(a + b + c)
}
funcao1(2, undefined, 20)

console.log('---------------------');

function funcao2({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
funcao2({ nome: 'Dennys', sobrenome: 'Fernandes', idade: '32' });

console.log('---------------------');

function funcao3([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}
funcao3(['Dennys Ricardo', 'Fernandes', 32])

console.log('---------------------');

function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }
  console.log(acumulador);
}
conta('+', 0, 20, 30, 40)
conta('-', 0, 20, 30, 40)
conta('/', 0, 20, 30, 40)
conta('*', 0, 20, 30, 40)

console.log('---------------------');

const conta0 = function(operador, acumulador, ...numeros) {
  console.log(arguments);
};
conta0('+', 1, 20, 30, 40, 50);

console.log('---------------------');

const conta2 = (operador, acumulador, ...numeros) => {
  console.log(operador, acumulador, numeros);
};
conta2('+', 1, 20, 30, 40, 50);

console.log('---------------------');

const conta3 = (...args) => {
  console.log(args);
};
conta3('+', 1, 20, 30, 40, 50);