//defineProperty - defineProperties
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // Mostra a chave
    value: estoque, // Valor
    writable: false, // Pode alterar 
    configurable: true, // Configurável (não permite apagar e reconfigurar a variável)
  });
}
const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)

for (let chave in p1) {
  console.log(chave);
}