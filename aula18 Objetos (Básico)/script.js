const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25,

  fala() {
    console.log(`A minha idade atual é ${this.idade}.`)
    //console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
  },
  incrementaIdade() {
    this.idade++;
  }
}
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();

/* 

function criaPessoa(nome, sobrenome, idade) { // PARÂMETRO
  return {nome, sobrenome, idade,};
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25); //ARGUMENTO (valor que é passado para o parâmetro)
const pessoa2 = criaPessoa('Maria', 'Oliveira', 30);
const pessoa3 = criaPessoa('João', 'Victor', 42);
const pessoa4 = criaPessoa('Junior', 'Soares', 50);
const pessoa5 = criaPessoa('Jean', 'Otávio', 22);

//const pessoa1 = [] <<< ARRAY
//const pessoa1 = {} <<< OBJETO

const pessoa1 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: '25',
};

const pessoa2 = {
  nome: 'Maria',
  sobrenome: 'Oliveira',
  idade: '30',
};

// MODO MENOS PRÁTICO
const nome01 = 'Luiz'
const sobrenome01 = 'Olieveira'
const idade01 = 25;

const nome02 = 'Maria'
const sobrenome02 = 'Olieveira'
const idade02 = 30;

const array = [1, 2, 3];
array.push(4)
array[0] = 'Dennys'
// array = 'Fernandes' (NÃO POSSO RETRIBUIR OUTRO VALOR)
console.log(array)
*/