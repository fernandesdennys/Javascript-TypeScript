/*
Entre 0 - 11 Bom dia!
Entre 12 - 17 Boa tarde!
Entre 18 - 23 Boa noite!

"if" pode ser usado sozinho.
Sempre que utilizo a palavra else, preciso de um if antes.
Eu posso ter vários else ifs na checagem.
Só posso ter 1 else na checagem
Podemos usar condições sem else if, utilizando apenas if e else.
*/


const hora = 18
if (hora >= 0 && hora <= 5) {
  console.log('Boa Madrugada!');
} else if (hora >= 6 && hora <= 12) {
  console.log('Bom Dia!');
} else if (hora >= 12 && hora < 17) {
  console.log('Boa Tarde!');
} else if (hora >= 18 && hora <= 23) {
  console.log('Boa Noite');
} else {
  console.log('HORA/DIA INVÁLIDO')
}

const tenhoGrana = false;
if (tenhoGrana) {
  console.log('Vou sair de casa')
} else {
  console.log('Vou fazer eco')
}