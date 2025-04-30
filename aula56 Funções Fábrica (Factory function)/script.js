//Factory function (Função Fábrica)
//Constructor function (Função Construtora)

function criarPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    //Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },
    fala(assunto = 'Falando sobre JS') {
      return `${this.nome} está ${assunto}.`;
    },

    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },
    altura: a,
    peso: p,

    //Getter
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criarPessoa('Dennys', 'Fernandes', 1.65, 110);
p1.nomeCompleto = 'Dennys Ricardo Fernandes';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());

/* 
console.log(p1.imc());
console.log(p1.nome);
console.log(p1.sobrenome)
console.log(p1.imc)
 */

/* const p2 = criarPessoa('Ricardo', 'Fernandes', 1.80, 90);
console.log(p2.imc()); */
