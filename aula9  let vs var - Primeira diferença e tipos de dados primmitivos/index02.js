//TIPOS DE DADOS PRIMITIVOS (string, number, undefined, null, boolean, symbol)

const nome = "Luiz"; // string
const nome1 = "Luiz"; // string
const nome2 = `Luiz`; // string
const num1 = 10; // number
const num2 = 10.52; // number
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória. (quando voce quer definir como nulo)
let nomeAluno; // undefined = não aponta para local nenhum na memória. (quando o programa é responsável pelo "resultado")
const aprovado = true / false; // BOOLEAN (valor lógico)

console.log(typeof aprovado, aprovado);

let c = 2;
const d = c;
console.log(c, d); // 2, 2

c = 3;
console.log(c, d); // 3, 2+

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);
