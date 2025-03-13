const raiz =  function(n) {
  return n ** 0.5; 
}; 
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));


/*

// MODO SIMPLIFICADO
const raiz = n => n ** 0.5; 

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

const raiz =  (n) => {
  return n ** 0.5; 
}; 
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

const raiz = function(n) {
  return n ** 0.5; // lógica da função
};  // O ponto e vírgula aqui não é estritamente necessário, mas é boa prática usar.
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

function soma(x = 1, y = 1) { // Resultado pré definido.
  const resultado = x + y;
  return resultado;
}
const resultado = soma(); // Será 2 por conta da "pré definição de valores no x e y na função soma"
console.log(resultado);

function soma(x, y) {
  const resultado = x + y;
  return resultado;
}
const resultado = soma('Dennys', ' Fernandes'); //Concatenação
console.log(resultado);

function soma(x, y) {
  const resultado = x + y;
  return resultado;
}
const resultado = soma(2, 2);
console.log(resultado);

function soma(x, y) {
  const resultado = x + y;
  return resultado;
}
console.log(soma(1, 2));
console.log(soma(3, 4));
console.log(soma(5, 6));
console.log(soma(7, 8));

function saudacao(nome) {
  return `Bom dia ${nome}`
  
}
const variavel = saudacao('Luiz');
console.log(variavel)


"A função saudacao recebe um parâmetro nome. 
 Quando a função é chamada com o argumento 'Luiz', ela retorna a string 'Bom dia Luiz'. 
 O valor retornado é atribuído à constante variavel, que é então exibido no console."

*/