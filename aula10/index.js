const num1 = 10;
const num2 = 3;
const num3 = 2;

// ORDEM DE PRECEDÊNCIA
console.log((num1 + num2) * num3); // PRIMEIRO OS PARENTESES ()
console.log(num1 ** num2); // POTENCIACÃO
console.log(num1 * num2); // MULTIPLOCAÇÃO
console.log(num1 / num2); // DIVISÃO
console.log(num1 % num2); // RESTO DA DIVISÃO
console.log(num1 + num2); // ADIÇÃO / CONCATENAÇÃO
console.log(num1 - num2); // SUBTRAÇÃO

//OPAREDOR DE INCREMENTO ++ (Não pode usar em constante)
let contador = 1;
contador++; //2
contador++; //3
contador++; //4
contador++; //5
console.log(contador);

// -----------------------------------

let contador1 = 1;
++contador1; //2
++contador1; //3
++contador1; //4
++contador1; //5
console.log(contador1);

//------------------------------------

let contador2 = 1;
console.log(contador2++); // (Primeiro execulta a ação, depois incrementa o resultado na linha seguite (console.log contador2))
console.log(contador2);
console.log(++contador2); //(Primeiro incrementa, depois mostra o valor (Não retem o valor antigo))

//------------------------------------

//OPERADOR DE DECREMENTO --
let contador3 = 10;
console.log(--contador3);
console.log(--contador3);
console.log(--contador3);
console.log(--contador3);

//------------------------------------

const passo = 30;
let contador4 = 0;
contador4 = contador4 + passo;
console.log(contador4);
contador4 = contador4 + passo;
console.log(contador4);
contador4 = contador4 + passo;
console.log(contador4);

//-------------------------------------

let contador5 = 0;
contador5 += 2; // (contador5 = contador5 + contador5)
contador5 += 2;
contador5 += 2;
console.log(contador5);

//-------------------------------------

/* NaN - Not a Number

const numero1 = 10;
const numero2 = "Dennys"; String
console.log(numero1 * numero2);

*/

//--------------------------------------

const numero3 = 10;
const numero4 = Number('5.2'); // parseInt(inteiro) parseFloat(decimais) Number(não tem a destinção de decimais ou inteiro)
console.log(numero3 + numero4);