// PADRÃO DE PRECISÃO DE NUMEROS JAVASCRIPT "IEEE 754-2008"

let num1 = 0.7; //Number
let num2 = 0.1; //Number

/*
num1 += num2 = num1 = num1 + num2
num1 += num2 // 0.8
num1 += num2 // 0.9
num1 += num2 // 1.0
num1 += num2 // 1.1
num1 += num2 // 1.2
num1 += num2 // 1.3
num1 += num2 // 1.4
num1 += num2 // 1.5
num1 += num2 // 1.6
num1 += num2 // 1.7
num1 += num2 // 1.8
num1 += num2 // 1.9
num1 += num2 // 2.0
*/

num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;

num1 = Number(num1.toFixed(2))

console.log(num1);
console.log(Number.isInteger(1.0)); // true
console.log(Number.isInteger(num1)); // false

// console.log(num1.toString() + num2); //Convertendo o numero para string (valor temporário)
// num1 = num1.toString // Estou alterando o valor da variável
// console.log(num1.toString(2)); // Convertendo para binário
// console.log(num1.toFixed(2)) //Fixa casas decimais de acordo com o numero escolhido entre ()
// console.log(Number.isInteger(num1)); // Retorna verdadeiro  se for inteiro e falso se for numero "flutuante"
// console.log(Number.isNaN(temp)); //Retorna true se houver somente numeros ou false se houver escrita
// let temp = num1 + '5';
