//defineProperty - defineProperties
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  let estoquePrivado = estoque

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: true,
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== 'number') {
        throw new TypeError('Err');
      }
      estoquePrivado = valor;
    }
  });
}

function criaProduto() {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace('Ricardo', '')
      nome = valor;
    }
  }
}
const p2 = criaProduto('Camiseta');
p2.nome = 'Dennys Ricardo Fernandes'
console.log(p2.nome)
/* const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1)
p1.estoque = 500
console.log(p1.estoque) */


