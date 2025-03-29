/* let A = 10;
let B = 5;
let C = A + B;
console.log(`Resultado C = ${C}`)

if ( A > B) {
   return console.log("É MAIOR")
} else {
  return console.log("É MENOR")
  } */



const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const semPares = []; // Criamos um array vazio para armazenar os ímpares  

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {  // Verifica se o número é ímpar  
    semPares.push(arr[i]); // Adiciona o número ao array `semPares`
  }
}

console.log(semPares); // Exibe o resultado