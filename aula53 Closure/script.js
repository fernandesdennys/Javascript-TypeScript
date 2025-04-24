function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}
const funcao = retornaFuncao('Dennys');
const funcao2 = retornaFuncao('Fernandes');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());

function retornaFuncao(nome) {        // Define uma função chamada "retornaFuncao" que recebe um parâmetro "nome"
  return function () {                // Essa função retorna uma outra função anônima (sem nome)
    return nome;                      // A função interna retorna o valor de "nome", que veio da função externa
  };
}
/* const funcao = retornaFuncao('Dennys');   // Aqui, chamamos "retornaFuncao" com 'Dennys'
                                          // Isso retorna a função interna que "lembra" do nome 'Dennys'
                                          // Agora "funcao" é uma função que, quando chamada, retorna 'Dennys'
const funcao2 = retornaFuncao('Fernandes'); // Fazemos a mesma coisa, mas agora com o nome 'Fernandes'
                                            // "funcao2" vai lembrar de 'Fernandes'
console.dir(funcao);   // Mostra a estrutura da função "funcao" no console (inclui o escopo fechado, ou seja, o closure)
console.dir(funcao2);  // Faz o mesmo para "funcao2"
console.log(funcao(), funcao2());   // Executa as duas funções
                                    // "funcao()" retorna 'Dennys'
                                    // "funcao2()" retorna 'Fernandes'
                                    // Resultado final: Dennys Fernandes
 */


