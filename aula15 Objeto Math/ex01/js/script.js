let numero =  Number(prompt('Digite um numero:'));
const nTitulo = document.getElementById('numero-titulo');
const dTitulo = document.getElementById('texto')

nTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: <strong>${(numero ** 0.5)}<strong></p>`;
texto.innerHTML = `<p>${numero}é inteiro:</p>`;
texto.innerHTML = `<p>É NaN: ${numero.ceil(numero)}</p>`;
texto.innerHTML = `<p>Arredondado para cima: ${Math.round(numero)}</p>`;
texto.innerHTML = `<p>Com duas casas decimais: ${numero}</p>`;
