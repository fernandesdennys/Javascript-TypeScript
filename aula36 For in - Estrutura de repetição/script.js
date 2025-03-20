// for in -> lê os índices ou chaves do objeto
const frutas = ['Pera', 'Maçã', 'Uva'] // Vetor (array com uma dimenção)
for (let indice in frutas) {
  console.log(frutas[indice]);
}

const pessoa = {
  nome: 'Dennys',
  sobrenome: 'Fernandes',
  idade: 32
};

// acessando propriedades de maneiras diferentes
console.log(pessoa.nome);
console.log(pessoa['nome']);

const chave = 'nome';
console.log(pessoa[chave]);

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]); /// Exibe a chave e o valor associado a essa chave no objeto
}

/* for (i = 0; i < frutas.length; i++){
console.log(frutas[i])
} */
