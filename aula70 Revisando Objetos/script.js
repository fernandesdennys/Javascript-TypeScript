// LITERAL
// objeto {}
// sctring ('' "" ``)
// array ([])
// função (function)
// number (1,2,3,4,5...)

const pessoa = {
  nome: 'Dennys',
  sobrenome: 'Fernandes'
};
const chave = 'nome';
console.log(pessoa[chave]);
console.log(pessoa['sobrenome']);
console.log(pessoa.nome);
console.log(pessoa.sobrenome);

console.log('------------------------------')

const pessoa1 = new Object();
pessoa1.nome = 'Dennys'
pessoa1.sobrenome = 'Fernandes'
pessoa1.idade = 32
pessoa1.falarNome = function () {
  return (`${this.nome} está falando com voce.`);
};
pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};
console.log(pessoa1.getDataNascimento())
for (let chave in pessoa1)
  console.log(pessoa1[chave])

console.log('------------------------------')

const pessoa2 = {
  nome: 'Dennys',
  sobrenome: 'Fernandes'
};
delete pessoa2.nome;
console.log(pessoa2)



