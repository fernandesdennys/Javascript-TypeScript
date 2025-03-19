const pessoa = {
  nome: 'Dennys',
  sobrenome: 'Fernandes',
  idade: 32,
  endereco: {
    rua: 'Av. Pedro Perissoto',
    numero: 2611
  }
};
const {
  endereco: { rua: r = 12345, numero: n }, // Valor padrão para a variável ex:(r = 12345)
  endereco
} = pessoa;
console.log(r, n, endereco);

const { nome, sobrenome, ...resto } = pessoa; // Pega o nome e o resto do objeto
console.log(nome, sobrenome, resto);

/*  
(ATRIBUIÇÃO VIA DESESTRUTURAÇÃO)
// Também posso desestruturar um objeto dentro de outro objeto ex: (endereco: {rua, numero})
const { endereco: {rua, numero} } = pessoa;
const { endereco: endereco } = pessoa;
console.log(endereco);
console.log(rua, numero);

// Posso informar a chave que quero pegar e atribuir a uma variável ex:(nome: test = '')
const { nome: test = '', sobrenome, idade } = pessoa; 
console.log(test, sobrenome, idade);

const { nome = 'Não existe', sobrenome, idade } = pessoa; // Posso dar um valor padrão para a variável ex:(nome = 'Não existe')
console.log(nome, sobrenome, idade); 

// (ATRIBUIÇÃO NORMAL)

// variável nome recebe o valor de pessoa.nome
// const nome = pessoa.nome;
// console.log(nome);
*/