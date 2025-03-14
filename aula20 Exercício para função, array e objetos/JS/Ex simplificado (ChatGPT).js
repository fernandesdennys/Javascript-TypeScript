const pessoas = []; // Array inicial

document.querySelector("#formulario").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita recarregar a página ao enviar o formulário

  // Pegando os elementos do DOM
  let nome = document.querySelector("#nome");
  let sobrenome = document.querySelector("#sobrenome");
  let peso = document.querySelector("#peso");
  let altura = document.querySelector("#altura");

  // Adicionando um novo objeto ao array "pessoas"
  pessoas.push({
    nome: nome.value,
    sobrenome: sobrenome.value,
    peso: peso.value,
    altura: altura.value
  });

  console.log(pessoas); // Exibe o array atualizado no console
});