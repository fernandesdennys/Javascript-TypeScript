
let numero =  Number(prompt('Digite um numero:'));
const nTitulo = document.getElementById('numero-titulo');
const dTexto = document.getElementById('texto')


nTitulo.innerHTML = numero;
dTexto.innerHTML = '';
dTexto.innerHTML += `<p>Raiz quadrada: <strong>${numero ** 0.5}<strong></p>`;
dTexto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
dTexto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
dTexto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
dTexto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
dTexto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;

