class Peessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }
  get nomeCompleto() {
    return this.nome + ' ' + this.sobrenome
  }
  set nomeCompleto(valor) {
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.nome = valor.join(' ');
  }
};

const p1 = new Pessoa('Dennys', 'Fernandes')
p1.nomeCompleto = 'Dennys Ricardo Fernandes';
console.log(p1.nome);
console.log(p1.sobrenome);