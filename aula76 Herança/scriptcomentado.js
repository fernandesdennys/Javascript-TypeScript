// Produto -> aumento, desconto
// Camiseta = cor, Caneca = material

// Função construtora para Produto
function Produto(nome, preco) {
  this.nome = nome;        // Define a propriedade 'nome' do produto
  this.preco = preco;      // Define a propriedade 'preco' do produto
}

// Adiciona um método 'aumento' ao protótipo de Produto
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;   // Aumenta o preço do produto em uma quantia fixa
};

// ATENÇÃO: Esta linha repete a definição do método 'aumento' e sobrescreve a anterior
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;   // Mesmo comportamento: soma uma quantia ao preço
};

// Função construtora para Camiseta, herdando de Produto
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco); // Chama o construtor de Produto com this da Camiseta
  this.cor = cor;                  // Define a propriedade 'cor' específica da Camiseta
};

// Faz com que Camiseta herde de Produto
Camiseta.prototype = Object.create(Produto.prototype); // Cria um novo protótipo baseado em Produto
Camiseta.prototype.constructor = Camiseta;              // Corrige a referência ao construtor

// Sobrescreve o método 'aumento' apenas para Camiseta
Camiseta.prototype.aumento = function (percentual) {
  // Aumenta o preço em uma porcentagem
  this.preco = this.preco + (this.preco * (percentual / 100));
};

// Função construtora para Caneca, herdando de Produto
function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco); // Chama o construtor de Produto
  this.materia = material;         // Define a propriedade 'materia' (obs: nome está com erro de digitação, o correto seria 'material')

  // Define uma propriedade com getter e setter para 'estoque'
  Object.defineProperty(this, 'estoque', {
    get: function () {
      return estoque;              // Retorna o valor de 'estoque'
    },
    set: function (valor) {
      if (typeof valor !== 'number') return; // Só permite número
      estoque = valor;                       // Atualiza 'estoque'
    }
  });
};

// Faz com que Caneca herde de Produto
Caneca.prototype = Object.create(Produto.prototype); // Herança de Produto
Caneca.prototype.constructor = Caneca;               // Corrige a referência ao construtor

// Cria uma instância de Produto
const produto = new Produto('Gen', 111);

// Cria uma instância de Camiseta
const camiseta = new Camiseta('Regata', 7.5, 'Preta');

// Cria uma instância de Caneca (estoque não foi passado como argumento)
const caneca = new Caneca('Stanley', 50, 'Aluminio');

// Usa o setter para definir o estoque da caneca
caneca.estoque = 100;

// Aplica um aumento percentual à camiseta (10% de 7.5 = +0.75 => total: 8.25)
camiseta.aumento(10);

// Usa o getter para acessar o estoque da caneca
console.log(caneca.estoque); // Exibe: 100

// Exibe os dados da camiseta
console.log(camiseta);

// Exibe os dados do produto genérico
console.log(produto);
