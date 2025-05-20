function criaPessoa(nome, sobrenome) {

  const falar = {
    falar() {
      consolo.log(`${this.nome} está falando`)
    },
  };

  const comer = {
    comer() {
      consolo.log(`${this.nome} está comendo`)
    },
  };

  const beber = {
    beber() {
      consolo.log(`${this.nome} está bebendo`)
    },
  };

  const pessoaPrototype = Object.assign({}, falar, comer, beber);

  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  })
};

const p1 = criaPessoa('Dennys', 'Fernandes');
const p2 = criaPessoa('Neusa', 'Diotto');
