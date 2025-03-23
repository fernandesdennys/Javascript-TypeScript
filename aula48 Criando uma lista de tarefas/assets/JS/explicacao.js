const inputTarefa = document.querySelector('.input-tarefa'); // Seleciona o input de tarefas
const btnTarefa = document.querySelector('.btn-tarefa'); // Seleciona o botão de adicionar tarefa
const tarefas = document.querySelector('.tarefas'); // Seleciona a lista de tarefas

// Função que cria um elemento <li>
function criaLi() {
  const li = document.createElement('li'); // Cria um elemento <li>
  return li; // Retorna o elemento criado
}

// Adiciona um evento para capturar quando a tecla Enter for pressionada no input
inputTarefa.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) { // Verifica se a tecla pressionada foi Enter (código 13)
    if (!inputTarefa.value) return; // Se o input estiver vazio, não faz nada
    criaTarefa(inputTarefa.value); // Cria a tarefa com o valor do input
  }
});

// Função que limpa o campo input e foca novamente nele
function limpaInput() {
  inputTarefa.value = ''; // Limpa o valor do input
  inputTarefa.focus(); // Coloca o foco novamente no input
}

// Função que cria o botão "Apagar" para cada tarefa
function criaBotaoApagar(li) {
  li.innerHTML += ' '; // Adiciona um espaço após o texto da tarefa
  const botaoApagar = document.createElement('button'); // Cria um elemento <button>
  botaoApagar.innerHTML = 'Apagar'; // Define o texto do botão
  botaoApagar.setAttribute('title', 'Apagar esta tarefa'); // Adiciona o atributo "title" ao botão
  botaoApagar.setAttribute('class', 'apagar'); // Adiciona a classe "apagar" ao botão
  li.appendChild(botaoApagar); // Adiciona o botão ao elemento <li>
}

// Função que cria uma nova tarefa
function criaTarefa(textoInput) {
  const li = criaLi(); // Cria um novo elemento <li>
  li.innerHTML = textoInput; // Define o texto do <li> com o valor do input
  tarefas.appendChild(li); // Adiciona o <li> à lista de tarefas
  limpaInput(); // Limpa o input após criar a tarefa
  criaBotaoApagar(li); // Adiciona o botão "Apagar" à tarefa
  salvarTarefas(); // Salva a lista de tarefas no localStorage
}

// Adiciona um evento ao botão de adicionar tarefa
btnTarefa.addEventListener('click', function () {
  if (!inputTarefa.value) return; // Se o input estiver vazio, não faz nada
  criaTarefa(inputTarefa.value); // Cria a tarefa com o valor do input
});

// Adiciona um evento ao documento para capturar cliques em qualquer elemento
document.addEventListener('click', function (e) {
  const el = e.target; // Obtém o elemento clicado
  if (el.classList.contains('apagar')) { // Verifica se o elemento clicado tem a classe "apagar"
    el.parentElement.remove(); // Remove o elemento pai (a tarefa) do botão clicado
    salvarTarefas(); // Atualiza a lista de tarefas no localStorage
  }
});

// Função que salva a lista de tarefas no localStorage
function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li'); // Seleciona todas as tarefas
  const listaDeTarefas = []; // Cria um array vazio para armazenar as tarefas

  // Percorre todas as tarefas e armazena seus textos no array
  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerHTML; // Pega o conteúdo HTML de cada <li>
    tarefaTexto = tarefaTexto.replace('Apagar', ' ').trim(); // Remove a palavra "Apagar" do texto
    listaDeTarefas.push(tarefaTexto); // Adiciona a tarefa no array
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas); // Converte o array para JSON
  localStorage.setItem('tarefas', tarefasJSON); // Salva o JSON no localStorage
}

// Função que adiciona as tarefas salvas no localStorage ao recarregar a página
function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas'); // Obtém as tarefas do localStorage
  const listaDeTarefas = JSON.parse(tarefas); // Converte o JSON para array

  // Adiciona cada tarefa salva novamente à lista
  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa); // Cria a tarefa com o texto salvo
  }
}

// Chama a função para carregar as tarefas salvas ao abrir a página
adicionaTarefasSalvas();
