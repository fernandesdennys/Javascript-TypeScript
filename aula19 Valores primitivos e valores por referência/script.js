const a = {
  nome: 'Dennys',
  sobrenome: 'Fernandes'
};
const b = { ...a }; // O Valor de "a" foi copiado para o valor de "b" (spread do array a dentro de b)
a.nome = 'Ricardo'; // Altera o valor dome dentro da "-const a"
console.log(a);
console.log(b);

/*
Tipos de Dados Primitivos (Imutáveis - Valores copiados):
* string: 'Dennys',
* number: '1, 2, 3, 4, 5,'
* boolean: 'true, false'
* undefined: 
* null: 
* (bigint, symbol)

Referência (multável - Passados por referência) 
* arrays 
* object 
* function

let a = [1, 2, 3];
let b = [...a]; // O Valor de "a" foi copiado para o valor de "b" (spread do array a dentro de b)
let c = b;
console.log(a, b);

a.push(4)
console.log(a, b);

b.pop();
console.log(a);
console.log(a, b);
console.log(c);

a.push('Dennys');
console.log(a, c);

let a = 'A';
let b = a; // Cópia
console.log(a,b);

a = 'Outra coisa';
console.log(a, b);

//          0123
let nome = 'Luiz'; //(Variável é só uma caixa que contém o valor)
nome[0] = 'R' // Não irá alterar o valor, pois a string é "IMUTÁVEL"
console.log(nome[0], nome); // Retorna somente o indice 0
*/