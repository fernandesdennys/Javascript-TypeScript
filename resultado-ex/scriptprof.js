const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) { // adiciona um evento de submit ao formulário
  e.preventDefault(); // previne o comportamento padrão do formulário
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) { // se peso for falso
    setResultado('Peso inválido', false); // resultado invalido
    return; // para a execução
  }

  if (!altura) { // se altura for falso
    setResultado('Altura inválida', false); // resultado invalido
    return; // para a execução
  }

  const imc = getImc(peso, altura); // chama a função getImc com os valores de peso e altura
  const nivelImc = getNivelImc(imc); // chama a função getNivelImc com o valor do IMC
  const msg = `Seu IMC é ${imc} (${nivelImc}).`; // mensagem com o IMC e o nível do IMC
  setResultado(msg, true); // seta o resultado com a mensagem e true

  console.log(imc); // imprime o IMC no console  

});
function getNivelImc(imc) { // função para retornar o nível do IMC
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; // array com os níveis do IMC
  if (imc >= 39.9) return nivel[5]; // se o IMC for maior ou igual a 39.9 retorna Obesidade grau 3
  if (imc >= 34.9) return nivel[4]; // se o IMC for maior ou igual a 34.9 retorna Obesidade grau 2
  if (imc >= 29.9) return nivel[3]; // se o IMC for maior ou igual a 29.9 retorna Obesidade grau 1
  if (imc >= 24.9) return nivel[2]; // se o IMC for maior ou igual a 24.9 retorna Sobrepeso
  if (imc >= 18.5) return nivel[1]; // se o IMC for maior ou igual a 18.5 retorna Peso normal
  if (imc < 18.5) return nivel[0]; // se o IMC for menor que 18.5 retorna Abaixo do peso
}

function getImc(peso, altura) { // função para calcular o IMC
  const imc = peso / altura ** 2; // calcula o IMC
  return imc.toFixed(2); // retorna o IMC com 2 casas decimais

}

function criaP() { // função para criar parágrafo
  const p = document.createElement('p'); // cria um elemento p
  return p; // retorna o elemento p
}


function setResultado(msg, isValid) { // função para setar o resultado
  const resultado = document.querySelector('#resultado'); // seleciona o elemento com id resultado
  resultado.innerHTML = ''; // limpa o conteúdo do elemento

  const p = criaP(); // cria um parágrafo

  if (isValid) { // se for válido
    p.classList.add('paragrafo-resultado'); // adiciona a classe paragrafo-resultado ao parágrafo
  } else { // se não for válido
    p.classList.add('bad'); // adiciona a classe bad ao par
  }

  document.getElementById("reset").addEventListener("click", function () {
    const resultadop = document.querySelector(".paragrafo-resultado, .bad"); // Seleciona o parágrafo do resultado
    if (resultadop) {
      resultadop.textContent = ""; // Remove o conteúdo do resultado
      resultadop.classList.remove("paragrafo-resultado", "bad"); // Remove a classe que aplica o background  
      resultado.style.backgroundColor = "transparent"; // Reseta o fundo (se precisar)
    }
  });

  p.innerHTML = msg; // adiciona a mensagem ao parágrafo
  resultado.appendChild(p); // adiciona o parágrafo ao elemento resultado
}