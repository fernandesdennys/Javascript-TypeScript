/*             0123456789
const nome = 'Dennys Fernandes'
console.log(nome[0]); */

//               0         1          2              3      4
const alunos = ['Dennys', 'Ricardo', 'Fernandes']; //test3, test4
let alunos1 = ['Dennys', 'Ricardo', 'Fernandes']; //test3, test4
alunos1 = 123

console.log(typeof alunos);
console.log(alunos instanceof Array); // True = sim, False = não
console.log(alunos1 instanceof Array);

/*

alunos.push('test3'); // Adiciona arrays somente depois do ultimo indice
alunos.push('test4');

console.log(alunos.slice(0, 3)); // O primeiro argumento (0) indica o índice inicial (inclusive). O segundo argumento (3) indica até onde copiar (exclusivo), ou seja, copia até o índice 3, mas sem incluí-lo.
console.log(alunos.slice(0, -2)) // Como -2 representa "dois elementos antes do final", o slice pega do índice 0 até antes dos últimos 2 elementos.

console.log(alunos[50]); // Undefined (pois nao tem nenhum elemento no array)

delete alunos[1]; // Deleta o elemento do array, sem alterar o indice
console.log(alunos[1]);

alunos.pop(); // Remove o ultimo elemento do ARRAY

Consigo salvar o elemento removido com uma const. Ex:
const removido = alunos.pop();
console.log(removido);
console.log(alunos);

const removido = alunos.shift(); // Remove sempre no começo do ARRAY
console.log(removido);
console.log(alunos);


alunos.unshift('test0') // Insere o elemento sempre no começo do ARRAY
alunos.unshift('test1')

alunos[alunos.length] = 'Test3' // Adiciona um novo elemento no final do array usando a propriedade length
alunos[alunos.length] = 'Test4'
alunos[alunos.length] = 'Test5'

alunos[0] = 'test'; // Altera o indice selecionado
alunos[3] = 'test1'; // Se nao hover o indice no array, ele adiciona ao final. 
console.log(alunos);

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);


*/
