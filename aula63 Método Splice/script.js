//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']
//nomes.splice(indice, delete, elem1, elem2, elem3);
//pop

nomes.pop(4, 1);
console.log(nomes);

const removidos = nomes.splice(3, 2)
const removidos1 = nomes.splice(3, 2, 'Luiz', 'Otávio') //Remove 'Gabriel' e 'Júlia' e adiciona 'Luiz' e 'Otávio' 
const removidos2 = nomes.splice(3, 0, 'Luiz') //Remove 'Gabriel' e adiciona Luiz
console.log(nomes, removidos)

console.log('-------------------------')

//Shift
const removidos3 = nomes.splice(0, 1) //Remove um nome começando pelo indice 0, 'Maria'

//Push
nomes.splice(nomes.length, 0, 'Dennys', 'Ricardo', 'Fernandes');
console.log(nomes)

//Unshift
nomes.splice(0, 2, 'Dennys', 'Fernandes');
console.log(nomes)