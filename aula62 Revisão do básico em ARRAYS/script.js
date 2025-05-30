//Remove o último elemento do array e o retorna. O array original é modificado
const frutasPop = ['maçã', 'banana', 'uva'];
frutasPop.pop(); // Remove 'uva'
console.log(frutasPop); // ['maçã', 'banana']

//Adiciona elementos no final do array. Retorna o novo comprimento. O array é modificado.
const numerosPush = [1, 2, 3];
numerosPush.push(4); // Adiciona 4
console.log(numerosPush); // [1, 2, 3, 4]

//Remove o primeiro elemento do array. Retorna o valor removido. O array é modificado.
const nomesShift = ['Ana', 'Carlos', 'João'];
nomesShift.shift(); // Remove 'Ana'
console.log(nomesShift); // ['Carlos', 'João']

//Adiciona elementos no início do array. Retorna o novo comprimento. O array é modificado.
const letrasUnshift = ['b', 'c'];
letrasUnshift.unshift('a'); // Adiciona 'a' no início
console.log(letrasUnshift); // ['a', 'b', 'c']

//Pode remover, substituir ou inserir elementos em qualquer posição. O array é modificado.
const coresSplice = ['vermelho', 'verde', 'azul'];
coresSplice.splice(1, 1, 'amarelo'); // Remove 'verde' e adiciona 'amarelo' na mesma posição
console.log(coresSplice); // ['vermelho', 'amarelo', 'azul']

//Retorna uma cópia parcial do array, sem modificar o original.
const animaisSlice = ['cachorro', 'gato', 'pássaro'];
const copia = animaisSlice.slice(0, 2); // Copia do índice 0 até 2 (excluindo 2)
console.log(copia); // ['cachorro', 'gato']
console.log(animaisSlice); // ['cachorro', 'gato', 'pássaro']

//Une os elementos do array em uma string, usando o separador especificado.
const palavrasJoin = ['Olá', 'mundo'];
const frase = palavrasJoin.join(' '); // Junta com espaço
console.log(frase); // "Olá mundo"

//Retorna true se o valor estiver presente no array.
const coresIncludes = ['azul', 'preto', 'branco'];
console.log(coresIncludes.includes('preto')); // true

//Retorna o índice do elemento. Se não existir, retorna -1.
const cidadesIndex = ['São Paulo', 'Rio', 'Curitiba'];
console.log(cidadesIndex.indexOf('Rio')); // 1

// Inverte os elementos no próprio array.
const numerosReverse = [1, 2, 3];
numerosReverse.reverse();
console.log(numerosReverse); // [3, 2, 1]

