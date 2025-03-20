/* 
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925924
Luiz Otávio nasceu em 1980
*/

const nome = "Luiz Otávio";
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const altura = 1.8;
const imc = peso / (altura * altura);
console.log(imc);
const anoNascimento = 2025 - idade;
console.log(anoNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, 
tem ${altura} de altura e seu IMC é de ${imc}. 
${nome} ${sobrenome} nasceu em ${anoNascimento}`);
