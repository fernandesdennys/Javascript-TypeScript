function clicar() {
  const form = document.querySelector('.form');
  const resultado = document.getElementById('res');
  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault(); // Impede o recarregamento da página

    // Pegamos os valores dentro do evento (agora pega os dados preenchidos no form)
    const nome = form.querySelector('#txtNome');
    const sobrenome = form.querySelector('#txtSobrenome');
    const peso = form.querySelector('#txtPeso');
    const altura = form.querySelector('#txtAltura');

    // Criamos o objeto com os valores no momento do submit
    const resFrom = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: Number(peso.value),
      altura: Number(altura.value)
    };

    // Adicionamos ao array
    pessoas.push(resFrom)
    resultado.innerHTML += (`<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`)
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


