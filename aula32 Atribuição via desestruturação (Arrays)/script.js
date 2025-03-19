// Aula: Atribuição via desestruturação (Arrays)
//                   1          2          3
//                1  2  3    1  2  3    1  2  3    
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numeros[1][2]);

const [, [, , ,], [, oito]] = numeros;
console.log(oito);

const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);


/* //               0    1    2    3    4    5    6    7    8   <- Índices
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900]; // <- Array
// ... rest -> pega o restante dos itens
//  ... spread -> espalha os itens
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero, terceiroNumero);
console.log(resto) */


/* let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A
let d = 'D'; // B
let e = 'E'; // C
let f = 'F'; // A

cosnt = numeros =[1, 2, 3];
[a, b, c,] = numeros;
console.log(d, e ,f);

cosnt = letras =[d, e, f];
[d, e, f,] = letras;
console.log(a, b ,c); */