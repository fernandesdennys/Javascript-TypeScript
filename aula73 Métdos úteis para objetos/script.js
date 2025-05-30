/*
Objetct.value
Objetct.entries
Objetct.assign(des, any)
Objetct.getOwnPropertyDescriptor(o, 'prop')
...(spread)

JA VIMOS
Object.keys (retornaaa as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Produto', preco: 1.5, material: 'procelana'};
Object.defineProperty(produto, 'nome', {
  writable: false,
  configurable: false,
  value: 'Qaulquer outra coisa'
})
for (let [chave, valor] of Object.entries(produto)){
  console.log(chave,valor);
}
console.log('--------------------------');
console.log(Object.entries(produto));
console.log('--------------------------');
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
console.log('--------------------------');
console.log(Object.values(produto));
console.log('--------------------------');
console.log(produto)
console.log('--------------------------');
//Object.freeze(produto);
console.log('--------------------------');
const caneca = Object.assign({}, produto, { material: 'Madeira macissa' });
const caneta = { nome: produto.nome, preco: produto.preco };
const outraOpcao = {
  ...produto,
  material: 'porcelana'
};

outraOpcao.nome = 'Caneca';
outraOpcao.preco = 2.5;
produto.nome = 'Dennys Fernandes'
console.log('--------------------------');
console.log(Object.keys(produto))
console.log('--------------------------');
console.log(produto)
console.log('--------------------------');
console.log(outraOpcao)
console.log('--------------------------');
console.log(caneca)
console.log('--------------------------');
console.log(caneta)
console.log('--------------------------');


