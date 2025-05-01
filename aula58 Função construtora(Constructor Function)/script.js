// Função construtora -> Objetos
// Função fábrica -> Objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
  //Metodos ou -Atributos privados, por nao estarem disponivel no corpo do objeto.
const ID = 123456;
const metodoInterno = function(){
  
};
  //Atributos ou Metodos PÚBLICOS
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + ': Sou um metodo');
  };
}
const p1 = new Pessoa('Dennys', 'Fernandes')
const p2 = new Pessoa('Ricardo', 'Fernandes')
//cria um novo objeto vazio, faz o "this" apontar para um objeto vazio criado e retorna o objeto para a variável
p1.metodo();

console.log(p1.nome, p1.sobrenome)