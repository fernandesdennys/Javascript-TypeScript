/*
JavaScript é baseado em protótipos para passar propriedades e métodos de um obejto para outro.

Definiçao de protótipo
Prototipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para algo que será criado depois.

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem de propriedade prototype da função construtora que foi usada para 
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS
vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada
até o topo (null) até enncontrar (ou não) tal membro.
*/

//Construtora -> molde(classe) para criar objetos
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  /* this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; */
}
//Pessoa.prototype === pessoa1.__proto__ 

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome;
}

//instância -> objeto criado a partir de uma construtora
const pessoa1 = new Pessoa('Dennys', 'F.')// <- Pessoa = Função Construtora
const pessoa2 = new Pessoa('Ricardo', 'F.')// <- Pessoa = Função Construtora
const data = new Date('2023-10-01 00:00:00');

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);