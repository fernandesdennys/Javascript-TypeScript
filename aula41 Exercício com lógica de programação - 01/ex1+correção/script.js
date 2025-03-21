/*
✨ Explicação de cada parte:
Função res(x, y): A função recebe dois números e compara qual é maior.
Declaração das variáveis num1 e num2: Dentro da função, você armazena os valores de x e y em variáveis locais.
Condição if (num1 >= num2): A função compara os valores para ver qual é maior, retornando o maior número com o return.

*/

function res(x, y) {  // Definindo a função 'res' que recebe dois parâmetros 'x' e 'y'
  const num1 = x;  // Atribui o valor de 'x' à variável 'num1'
  const num2 = y;  // Atribui o valor de 'y' à variável 'num2'

  if (num1 >= num2) {  // Se 'num1' for maior ou igual a 'num2'
    return num1;  // Retorna 'num1' como o maior número
  } else {  // Caso contrário, se 'num2' for maior que 'num1'
    return num2;  // Retorna 'num2' como o maior número
  }
}

console.log(`O maior numero é ${res(4, 8)}`);  // Chama a função 'res' passando 4 e 8, e exibe o resultado no console (deve retornar 8)
