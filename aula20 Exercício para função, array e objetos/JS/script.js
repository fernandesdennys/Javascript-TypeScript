function clicar() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('#res');
  const pessoas = []; // Array inicial

  function recebeEventoForm(evento) {
    evento.preventDefault(); // Impede o recarregamento da página

    // Pegamos os valores dentro do evento (agora pega os dados preenchidos no form)
    const nome = form.querySelector('#txtNome');
    const sobrenome = form.querySelector('#txtSobrenome');
    const peso = form.querySelector('#txtPeso');
    const altura = form.querySelector('#txtAltura');
    // Adicionando um novo objeto ao array "pessoas"
    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    form.reset(); // Resetamos o formulário
  }

  // Adicionamos o evento corretamente  
  form.addEventListener('submit', recebeEventoForm);
};

clicar()

/*
form.onsubmit = function (evento) {
  evento.preventDefault();
  alert(1);
  cosole.log(eviado);
};

*/


