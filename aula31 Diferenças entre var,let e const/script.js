/* const verdadeiro = true;
// let tem escopo de bloco { ... bloco }
// var só tem escopo de função
// const não pode ser reatribuído

let nome = 'Luiz'; // criando
var nome2 = 'Luiz'; // criando
const nome3 = 'Luiz'; // criando

if (verdadeiro) {
  let nome = 'Otávio'; // criando
  var nome2 = 'Rogério'; // redeclarando
  const nome3 = 'Luiza'; // criando

  if (verdadeiro) {
    let nome = 'Dennys'; // criando
    var nome2 = 'Ricardo'; // redeclarando
    const nome3 = 'Fernandes'; // criando
    console.log(nome, nome2, nome3);
  }
  console.log(nome, nome2, nome3);
}

function falaOi() {
  const nome = 'João'; // criando
  console.log(nome);
} */

function falaOi() {
  if (verdadeiro) {
    let sobrenome = 'Miranda'; // criando
    var sobrenome2 = 'Silva'; // redeclarando
  }
 console.log(sobrenome, sobrenome2);
}