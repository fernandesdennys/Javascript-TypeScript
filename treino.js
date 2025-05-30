/* function countBy (x,n) { 
 let z = [];
 if (x ** n) {
return z;
 }
 console.log(countBy(1,10))
}


// Declara a função countBy que recebe dois parâmetros: x (o número base) e n (a quantidade de múltiplos desejada)
function countBy(x, n) {   
  let z = []; // Cria um array vazio chamado z para armazenar os múltiplos  
  
  for (let i = 1; i <= n; i++) { // Loop que vai de 1 até n (inclusive), garantindo que pegamos n múltiplos de x    
    z.push(x * i); // Multiplica x pelo valor de i e adiciona o resultado no array z
  }   
  return z; // Retorna o array z com os múltiplos calculados
}
console.log(countBy(1, 10)); // Exibe no console o resultado da função para x = 1 e n = 10
console.log(countBy(2, 5));  // Exibe no console o resultado da função para x = 2 e n = 5 */


function inverter(valor) {
  if (typeof valor === "boolean")
    return !valor;
  else if (typeof valor === "number")
    return -valor;
  else null;
}
console.log(inverter(true))
console.log(inverter(10))


