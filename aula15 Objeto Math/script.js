let num1 = 9;
console.log(num1 ** (1 / 2));
console.log(num1 ** 0.5); // Para achara raiz quadrada.

console.log(100 / 0);
console.log(!!(100 / 0)); //true

// let num2 = Math.floor(num1); // Arredonda para o numero inteiro mais proximo, para baixo.
// let num2 = Math.ceil(num1); // Arredonda para o numero inteiro mais proximo, para cima.
//let num2 = Math.round(num1); // Aredonda de acordo com as casas decimais acima de 0.5 para cima e 0.49 para baixo
console.log(
  Math.max(1, 2, 3, 4, 5, 6, 7, 8, 2, 1500, 245, 4205, 15924, 1099433, 1425115)
); //Me mostra o maior numero da lista
console.log(
  Math.min(1, 2, 3, 4, 5, 6, 7, 8, 2, 1500, 425, 4225, 26362, 42352352, 15215)
); //Me mostra o menor numero da lista
console.log(Math.random()); // Mostra um numero aleatório
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); //Serve para aleatoriedade de números inteiros para numeros flutuantes "const aleatorio = Math.random() * (10 - 5) + 5;

console.log(Math.PI);
console.log(Math.pow(2, 10)); // Potenciação
console.log(2 ** 10); // Potenciação
