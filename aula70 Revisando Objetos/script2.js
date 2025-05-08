/* // Factory functions / Construtctor functions / Classes
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    }
  };
}

const p1 = criaPessoa('Dennys', 'Fernandes')
console.log(p1.nomeCompleto()) */

function Pessoa(nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome;
  /*  Object.freeze(this) //Trava a edição do objeto  */
}

// {} <- this -> 
//p1 = (254as-arawr-1241-aeewr) -> valor <== PERMITE ALTERAR O VALOR DO ENDEREÇO
//p1 = (novo endereço) <== NAO PERMITE ALTERAR O ENDEREÇO
const p2 = new Pessoa('Dennys', 'Fernandes');
delete p2.nome
p2.nome = 'Outra Coisa';
p2.fala = function () { console.log('Oi') };
p2.fala();
console.log(p2);

console.log('--------------------------');

const p3 = new Pessoa('Ricardo', 'Fernandes');
console.log(p3);

console.log('--------------------------');

const p4 = {}
p4.nome = 'Dennys'