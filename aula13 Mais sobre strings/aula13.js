//               01234567  <- Indice da string
let umaString = "Um texto";
//                0123456789
let umaString1 = "O rato roeu a roupa do rei de roma.";

console.log(umaString[3]); // Busca o indice dentro da string
console.log(umaString.concat(" em", " um", " lindo dia."));
console.log(umaString + " em um lindo dia.");
console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf("texto")); // Começa no indice 3 em relação a frase "Um texto".
console.log(umaString.indexOf("o", 4)); // Acha a Letra "o" depois do indice 4.
console.log(umaString.lastIndexOf("m", 3)); // Acha a letra de traz para frente a partir do indice 3.
console.log(umaString.match(/[a-z]/g)); // Expressão regular (mandando a flag "g")
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/x/)); // Pedindo para encontrar a letra "x" (igual ao indexOf, porem ele aceita expressões  regulares).
console.log(umaString.replace("Um", "Outro")); // Substitui uma palavra por outra.
console.log(umaString.replace(/Um/, "Outro")); // Substitui uma palavra por outra usando expressão regular.
console.log(umaString1.replace(/r/g, "#")); // Substitui todas letras "r" por uma "cerquilha (#)".
console.log(umaString1.length); // Exibe exatamente o tamanho da string.
console.log(umaString1.slice(2, 6)); // Começa no indice 2 = "r" e termina no indice 6 = "" (sempre coloque um numero a mais do que o indice desejado)
console.log(umaString1.slice(-3)); // Estou falando que o "start" é no -3, ou seja: "ma."
console.log(umaString1.slice(32)); // Estou falando que o "start" é no 32, que seria a mesma coisa que -3 ("ma.")
console.log(umaString1.slice(-5, umaString1.length - 1)); // Indica que quero que começe no -5 e termine no -1.
console.log(umaString1.substring(umaString1.length - 5)); // Start em -5 sem indicação do final.
console.log(umaString1.substring(umaString1.length - 5, umaString1.length - 1)); // Start em -5 e término em -1.
console.log(umaString1.split("r")); // Serve para dividir uma string de acordo com a caracter escolhido, ou seja, o valor escolhido é excluido da frase.
console.log(umaString1.toUpperCase()); // Tudo maiúsculo
console.log(umaString1.toLowerCase()); // Tudo minúsculo
