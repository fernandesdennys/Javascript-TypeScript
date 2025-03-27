/* 
O que este código faz?
Captura elementos HTML (input, button, ul).
Permite adicionar tarefas com o botão ou pressionando "Enter".
Cria um botão "Apagar" para cada tarefa.
Salva as tarefas no LocalStorage para manter os dados mesmo após atualizar a página.
Remove tarefas ao clicar no botão "Apagar".
Recupera e exibe tarefas salvas ao recarregar a página.
*/


// Seleciona os elementos do DOM e os armazena em variáveis  
const inputTarefa = document.querySelector('.input-tarefa'), // Campo de entrada onde o usuário digita a tarefa  
  btnTarefa = document.querySelector('.btn-tarefa'), // Botão para adicionar uma nova tarefa  
  tarefas = document.querySelector('.tarefas'); // Lista (<ul>) onde as tarefas serão adicionadas  

// Função que cria um elemento <li>  
const criaLi = () => document.createElement('li'); // Retorna um novo elemento <li>  

// Evento que adiciona uma tarefa ao pressionar a tecla "Enter"  
inputTarefa.addEventListener('keypress', e => {
  if (e.keyCode === 13 && inputTarefa.value) // Se a tecla pressionada for "Enter" (código 13) e o campo não estiver vazio  
    criaTarefa(inputTarefa.value); // Chama a função criaTarefa passando o valor do input como argumento  
});

// Função que limpa o campo de entrada e retorna o foco para ele  
const limpaInput = () => (inputTarefa.value = '', inputTarefa.focus()); // Define o valor do input como vazio e foca nele  

// Função que cria um botão "Apagar" dentro da <li>  
const criaBotaoApagar = li => {
  const botao = document.createElement('button'); // Cria um elemento <button>  
  botao.textContent = 'Apagar'; // Define o texto do botão como "Apagar"  
  botao.classList.add('apagar'); // Adiciona a classe "apagar" ao botão para futura referência  
  li.appendChild(botao); // Adiciona o botão dentro da <li>  
};

// Função que cria e adiciona uma nova tarefa à lista  
const criaTarefa = texto => {
  const li = criaLi(); // Cria um novo <li>  
  li.textContent = texto; // Define o texto da <li> com o valor passado como argumento  
  tarefas.appendChild(li); // Adiciona a <li> dentro da lista <ul>  
  limpaInput(); // Limpa o campo de entrada e mantém o foco nele  
  criaBotaoApagar(li); // Adiciona o botão "Apagar" à nova <li>  
  salvarTarefas(); // Salva as tarefas no LocalStorage  
};

// Evento que adiciona uma tarefa ao clicar no botão  
btnTarefa.addEventListener('click', () => {
  if (inputTarefa.value) // Se o campo de entrada não estiver vazio  
    criaTarefa(inputTarefa.value); // Chama a função criaTarefa passando o valor do input como argumento  
});

// Evento que remove uma tarefa ao clicar no botão "Apagar"  
document.addEventListener('click', e => {
  if (e.target.classList.contains('apagar')) { // Se o elemento clicado tiver a classe "apagar"  
    e.target.parentElement.remove(); // Remove o elemento pai (<li>) do botão clicado  
    salvarTarefas(); // Atualiza o LocalStorage removendo a tarefa excluída  
  }
});

// Função que salva as tarefas no LocalStorage  
const salvarTarefas = () => {
  const listaDeTarefas = [...tarefas.querySelectorAll('li')] // Seleciona todas as <li> da lista e as transforma em um array  
    .map(li => li.firstChild.textContent.trim()); // Mapeia cada <li>, pegando apenas o texto, removendo espaços extras  
  localStorage.setItem('tarefas', JSON.stringify(listaDeTarefas)); // Converte o array em JSON e armazena no LocalStorage  
};

// Função que recupera tarefas salvas no LocalStorage e as exibe na tela  
const adicionaTarefasSalvas = () => {
  (JSON.parse(localStorage.getItem('tarefas')) || []) // Obtém as tarefas do LocalStorage e transforma em array, ou usa um array vazio se não houver tarefas  
    .forEach(criaTarefa); // Para cada item na lista recuperada, chama a função criaTarefa para recriá-la na tela  
};

adicionaTarefasSalvas(); // Executa a função ao carregar a página para restaurar as tarefas salvas  
