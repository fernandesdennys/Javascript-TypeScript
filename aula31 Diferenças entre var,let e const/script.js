function falaOi() {
  let nome = 'Luiz';
  console.log(nome);
  let sobrenome = 'Miranda'; // criando
}
falaOi();
var nome = 'Qualquer coisa'; // criando
console.log(nome, sobrenome); // erro, sobrenome is not defined
// var é global e poderá ser acessada em qualquer lugar
// let e const são locais e só funcionam no escopo onde foi criada
// console.log(nome, sobrenome); // erro, sobrenome is not defined


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
  const verdadeiro = true;
  function falaOi() {
    if (verdadeiro) {
      let nome = 'Luiz'; // criando
      var sobrenome2 = 'Miranda'; // redeclarando
      console.log(nome, sobrenome2); // Let só funnciona dentro do bloco "Function"
    }
    console.log(nome, sobrenome2); // var funciona fora do bloco "Function"
  }
  falaOi()
  } 
  */