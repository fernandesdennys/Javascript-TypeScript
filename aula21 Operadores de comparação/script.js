/*

OPERADORES DE COMPARAÇÃO
> maior que
>= maior que ou igual a (maior ou igual para retornar um valor (true/false))
< menor que
<= menor que ou igual a (menor ou igual para retornar um valor (true/false))
== igualdade (valor) **********
=== igualdade estrita (valor e tipo)
!= diferente (valor) **********
!== diferente estrito (valor e tipo) 

*/

const maiorque = 10 > 5;
console.log(10 > 5);

const maiorouiguala = 10 >= 11;
console.log(10 >= 11);

const menorque = 10 < 11;
console.log(10 < 11);

const menorouiguala = 12 <= 11;
console.log(12 <= 11);

const igual = 12 == 12;
console.log(12 == 12);

const num1 = 10 //Number
const num2 = '10' //String
const comp = num1 === num2 //(Inspesiona os valores e tipos)
console.log(comp);

const num3 = 10 //Number
const num4 = '10' //String
const comp1 = num3 == num4 //(Valores iguais mesmo sendo de tipos diferentes "TRUE")
console.log(comp1);

const num5 = 10 //Number
const num6 = '10' //String
const comp2 = num5 != num6 //(Valores iguais mesmo sendo de tipos diferentes "FALSE")
console.log(comp2);

const num7 = 10 //Number
const num8 = '10' //String
const comp3 = num7 !== num8 //(Inspesiona os tipos e valores)
console.log(comp3);


