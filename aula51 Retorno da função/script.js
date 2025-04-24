//Funções com retorno

function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome }
}
const p1 = criaPessoa('Dennys', 'Fernandes');
const p2 = {
  nome: 'Ricardo',
  sobrenome: 'Fernandes'
};
console.log(p1);
console.log(p2);

console.log('-----------------------------------');

function falaFrase(comeco) { // Declara uma função chamada "falaFrase" que recebe um parâmetro chamado "comeco"
  function falaResto(resto) { // Dentro de "falaFrase", declaramos outra função chamada "falaResto", que recebe "resto"
    return comeco + ' ' + resto; // Essa função retorna a junção de "comeco", uma string vazia (desnecessária aqui), e "resto"
  }
  return falaResto; // A função "falaFrase" retorna a função "falaResto" (sem executá-la ainda)
}

const fala = falaFrase('Olá'); // Aqui chamamos "falaFrase" com o argumento 'Olá'. O retorno é a função "falaResto" com "comeco" fixado como 'Olá', e ela é armazenada na constante "fala"
const resto = fala('mundo!'); // Agora chamamos a função "fala" (que é "falaResto") passando 'mundo!' como argumento "resto". Isso retorna 'Olá mundo!' e armazena na constante "resto"
console.log(resto);

/* function criarMensagem(inicio) {
  return function (fim) {
    return inicio + ' ' + fim;
  };
}

const saudacao = criarMensagem('Olá'); // Cria uma função com "Olá" fixo no início
const nome = prompt('Qual seu nome?'); // Pede ao usuário para digitar o nome
const mensagemFinal = saudacao(nome); // Junta "Olá" + nome
console.log(mensagemFinal); // Exibe no console algo como: "Olá João"
 */

function criaMultiplocador(multiplicador) {
  return function (n) {
    return n * multiplicador
  }
}
const duplica = criaMultiplocador(2);
const triplica = criaMultiplocador(3);
const quadriplica = criaMultiplocador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
