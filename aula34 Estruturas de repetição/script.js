/* 
console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5'); 
*/

/*
// i -> index
 for (let i = -10; i <= 10; i++) { //  i++ Pula de 1 em 1
  console.log(`linha ${i}`)
}

for (let i = 100; i <= 1000; i += 100) { //  i += Pula de 100 em 100
  console.log(`linha ${i}`)
}

for (let i = 200; i >= 100; i -= 10) { //  i -= Pula de -10 em -10 (decrementa)
  console.log(`linha ${i}`) 
}
*/

for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0; // Confere se o numero é par ou impar (par = tru / impar = false)
  console.log(i, par)
}

for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? 'par' : 'ímpar';
  console.log(i, par)
}
//                 0       1      2        3         4         5  <-- índice
const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Abacaxi', 'Melão']
for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i}`, frutas[i])
}