function clicar() {
  const peso = document.getElementById('txtpeso').value;
  const altura = document.getElementById('txtaltura').value;
  const resultado = document.getElementById('res');
  const imc = (peso / (altura * altura));

  if (peso === '' || altura === '' || isNaN(peso) || isNaN(altura)) {
    resultado.innerHTML = 'Por favor, insira valores numéricos válidos em ambos os campos!';
  } else if (imc <= 18.5) {
    resultado.innerHTML = 'Abaixo do peso!';
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultado.innerHTML = 'Peso normal!';
  } else if (imc >= 25 && imc <= 29.9) {
    resultado.innerHTML = 'Sobrepeso!';
  } else if (imc >= 30 && imc <= 34.9) {
    resultado.innerHTML = 'Obesidade grau 1!';
  } else if (imc >= 35 && imc <= 39.9) {
    resultado.innerHTML = 'Obesidade grau 2!';
  } else if (imc >= 40) {
    resultado.innerHTML = 'Obesidade grau 3!';
  }

}