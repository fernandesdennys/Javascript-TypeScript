const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/* 

// For clássico — percorre os índices do array
for (let i = 0; i < numeros.length; i++) {
  let numero = numeros[i];  // Pega o valor no índice 'i'
  console.log(numero);  // Exibe o valor no console (ou faça algo com ele)
}

// For...in — percorre os índices do array (menos usado para arrays)
for (let i in numeros) {
  let numero = numeros[i];  // Pega o valor no índice 'i'
  console.log(numero);  // Exibe o valor no console (ou faça algo com ele)
}

*/


// Loop for...of — percorre diretamente os valores do array
for (let numero of numeros) {
  if (numero === 2 || numero === 4) {  // Se 'numero' for 2 ou 4, pula para a próxima iteração
    continue;
  }
  if (numero === 7)  // Se 'numero' for 7, interrompe o loop e sai dele
    break;

  console.log(numero);  // Exibe no console os valores que passaram pelas verificações
}

// Loop while — executa enquanto a condição for verdadeira
let i = 0;  // Inicializa a variável de controle 'i'
while (i < numeros.length) {  // Enquanto 'i' for menor que o comprimento do array, executa o bloco
  let numero = numeros[i];  // Pega o número atual do array

  if (numero === 2 || numero === 4) {  // Se 'numero' for 2 ou 4, incrementa 'i' e pula para a próxima iteração
    i++;
    continue;
  }

  if (numero === 7) {  // Se 'numero' for 7, exibe no console, incrementa 'i' e interrompe o loop
    console.log(numero);
    i++;
    break;
  }

  i++;  // Incrementa 'i' para avançar no array
}

/* 
let i = 0;  // Inicializa a variável de controle 'i'
do {  // Executa o bloco pelo menos uma vez antes de verificar a condição
  let numero = numeros[i];  // Pega o número atual do array com base no índice 'i'

  if (numero === 2 || numero === 4) {  // Se 'numero' for 2 ou 4:
    i++;  // Incrementa 'i' para avançar no array
    continue;  // Pula o restante do bloco e vai para a próxima iteração
  }

  if (numero === 7) {  // Se 'numero' for 7:
    console.log(numero);  // Exibe o número 7 no console
    i++;  // Incrementa 'i' para não entrar em loop infinito
    break;  // Interrompe o loop imediatamente
  }

  i++;  // Incrementa 'i' para avançar no array
} while (i < numeros.length);  // Repete o bloco enquanto 'i' for menor que o comprimento do array
*/
