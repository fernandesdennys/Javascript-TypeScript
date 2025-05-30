// IIFE -> Immediately invoked function expression

/* function qqcoisa(){
  console.log(12345);
}
qqcoisa(); */

(function () {
  const nome = 'Dennys';
  console.log(nome);
})();


(function (idade, peso, altura) {
  const sobrenome = 'Fernandes'
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }
  function falaNome() {
    console.log(criaNome('Dennys'))
  }
  falaNome();
  console.log(idade, peso, altura)

})(32, 120, 1.65);

(function () {

});
