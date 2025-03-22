// Tenta executar o bloco de código, se houver erro, ele será "capturado"
try {
  // Tenta imprimir a variável "naoExisto", que não foi definida, causando um erro
  console.log(naoExisto);
} catch (err) {
  // Captura o erro e permite tratá-lo; o console.log abaixo está comentado, 
  // mas se ativado, exibiria o erro no console.
  // console.log(err)
}
/* 
✨ RESUMO:
O try...catch é usado para capturar e tratar erros sem interromper a execução do programa.
A função soma() verifica se os argumentos são números. Se não forem, ela lança um erro com a mensagem personalizada: "x e y precisam ser números."
O primeiro console.log(soma(1, 2)) funciona normalmente, imprimindo 3.
O segundo console.log(soma('1', 2)) gera um erro que é capturado pelo catch, e o programa não trava. 
*/

function soma(x, y) { // Declara uma função chamada "soma" que recebe dois parâmetros, "x" e "y"   
  if (typeof x !== 'number' || typeof y !== 'number') { // Verifica se "x" ou "y" não são do tipo número

    throw Error('x e y precisam ser números.'); // Lança um erro com a mensagem personalizada
  }
  return x + y; // Se ambos forem números, retorna a soma de "x" e "y"
}

try { // Tenta executar o bloco de código abaixo, capturando erros se existirem  
  console.log(soma(1, 2)); // Chama a função "soma" com 1 e 2, que são válidos, e imprime o resultado (3)  
  console.log(soma('1', 2)); // Chama a função "soma" com '1' (string) e 2, o que causará um erro
} catch (Error) {
  // Captura o erro gerado e permite tratá-lo
  // O console.log abaixo está comentado, mas se ativado, exibiria o erro no console.
  // console.log(Error)    
  console.log(''); // Exibe uma string vazia no console como forma de tratamento do erro (não muito útil nesse caso)
}
