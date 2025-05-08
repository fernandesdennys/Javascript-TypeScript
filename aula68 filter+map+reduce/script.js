const numeros = [50, 10, 11, 25, 2, 5, 12, 56, 4, 9, 121];
const nPar = numeros.filter(function (valor) {
  return valor % 2 === 0
}).map(function (valor) {
  return valor * 2
}).reduce(function (ac, valor) {
  return ac + valor
})
console.log(nPar)

console.log('----------------------------------')

const nPar1 = numeros.filter(valor => valor % 2 === 0)
  .map(valor => valor * 2)
  .reduce((ac, valor) => ac + valor)

console.log(nPar)

console.log('----------------------------------')

