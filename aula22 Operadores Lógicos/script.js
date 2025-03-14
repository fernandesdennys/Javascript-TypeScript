/*

OPERADORES LÓGICOS
&& -> AND -> E => "TODAS AS EXPRESSÕES PRESISAM SER VERDADEIRAS PARA RETORNAR (TRUE)"
|| -> OR -> OU
! -> NOT -> NÃO
*/

const expAnd1 = true && true; //true, pois ambas as expressões são verdadeiras
const expAnd2 = true && false; //false, pois uma das expressões é falsa
console.log(expAnd1); //true
console.log(expAnd2); //false

const expOr1 = false || true; //true, pois uma das expressões é verdadeira
const expOr2 = false || false; //false, pois ambas as expressões são falsas
console.log(expOr1); //true
console.log(expOr2); //false

const expNot1 = !true; //false, pois inverte o valor de true
const expNot2 = !false;//true, pois inverte o valor de false
console.log(expNot1); //false
console.log(expNot2); //true


const usuario = 'Luiz' //form usuário
const senha = '123456' //form usuário
//                       true               false
const vailogar = usuario === 'Luiz' && senha === '12345'
console.log(vailogar);




