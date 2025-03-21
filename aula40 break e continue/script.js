const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* 
for (let i = 0; i < numeros.length; i++) {
  let numero = numeros[i];  
  console.log(numero); 
}
for (let i in numeros) {
  let numero = numeros[i];  
  console.log(numero);  
}
*/

for (let numero of numeros) {
  if (numero === 2 || numero === 4) {
    continue;
  }
  if (numero === 7)
    break;

  console.log(numero);
}
let i = 0;
while (i < numeros.length) {
  let numero = numeros[i];
  if (numero === 2 || numero === 4) {
    i++;
    continue;
  }

  if (numero === 7) {
    console.log(numero);
    i++;
    break;

  }
  i++;
}

/*
let i = 0;
do (i < numeros.length) {
  let numero = numeros[i];
  if (numero === 2 || numero === 4) {
    i++;
    continue;
  }

  if (numero === 7) {
    console.log(numero);
    i++;
    break;

  }
  i++;
} while (i < numeros.length)

*/

