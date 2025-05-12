//defineProperty - defineProperties
function Produto(nome, preco, estoque) {
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // Mostra a chave
    value: estoque, // Valor
    writable: false, // Pode alterar 
    configurable: true, // Configurável (não permite apagar e reconfigurar a variável)
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // Mostra a chave
      value: nome, // Valor
      writable: true, // Pode alterar 
      configurable: true, // Configurável (não permite apagar e reconfigurar a variável)
    },

    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true,
    },
  });
}
const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)

for (let chave in p1) {
  console.log(chave);
}