function num(myN) { // Declara uma função chamada "num" que recebe um parâmetro "myN"  
  if (typeof myN !== 'number') return myN; // Verifica se "myN" não é do tipo 'number'; se não for, retorna "myN" sem alterações  
  if (myN % 3 === 0 && myN % 5 === 0) return 'FizBuzz'; // Verifica se "myN" é divisível por 3 e por 5 ao mesmo tempo; se for, retorna 'FizBuzz'  
  if (myN % 3 === 0) return 'Fizz'; // Verifica se "myN" é divisível apenas por 3; se for, retorna 'Fizz'  
  if (myN % 5 === 0) return 'Buzz'; // Verifica se "myN" é divisível apenas por 5; se for, retorna 'Buzz'  
  return myN; // Se "myN" não for divisível por 3 nem por 5, retorna o próprio número
};

for (let i = 0; i <= 100; i++) { // Loop que percorre de 0 a 100, incrementando 1 a cada iteração  
  console.log(i, num(i)); // Imprime no console o valor de "i" e o resultado da função "num(i)"
};
