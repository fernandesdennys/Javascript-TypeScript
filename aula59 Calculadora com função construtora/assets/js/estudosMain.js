// Declaração de uma função construtora chamada 'Calculadora'
function Calculadora() {

  // Seleciona o elemento com a classe 'display' do HTML e armazena em uma propriedade chamada 'display'
  this.display = document.querySelector('.display');

  // Método que inicia a calculadora, chamando os métodos de captura de cliques e enter
  this.inicia = () => {
    this.capturaCliques();   // Ativa os cliques dos botões
    this.capturaEnter();     // Ativa a tecla Enter do teclado
  }

  // Método que escuta o evento de tecla pressionada (keyup)
  this.capturaEnter = () => {
    document.addEventListener('keyup', e => {
      // Verifica se a tecla pressionada foi Enter (código 13)
      if (e.keyCode === 13) {
        this.realizaConta(); // Se sim, executa a conta
      }
    });
  }

  // Método que escuta os cliques nos botões da calculadora
  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const el = event.target; // Pega o elemento clicado

      // Se o elemento tiver a classe 'btn-num', adiciona o número ou operador ao display
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);

      // Se for o botão 'C' (limpar), limpa todo o conteúdo do display
      if (el.classList.contains('btn-clear')) this.clear();

      // Se for o botão 'DEL', apaga o último caractere do display
      if (el.classList.contains('btn-del')) this.del();

      // Se for o botão '=', realiza o cálculo da expressão no display
      if (el.classList.contains('btn-eq')) this.realizaConta();
    });
  }

  // Método que realiza o cálculo da expressão escrita no display
  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value); // Usa eval para calcular a expressão como código JavaScript

      // Se o resultado for falsy (null, undefined, 0, '', etc), exibe alerta
      if (!conta) {
        alert('Conta inválida');
        return;
      }

      // Se tudo certo, exibe o resultado no display
      this.display.value = conta;

    } catch (e) {
      // Se houver erro no cálculo (ex: expressão mal formada), exibe alerta
      alert('Conta inválida');
      return;
    }
  };

  // Método que adiciona o texto do botão clicado ao display
  this.addNumDisplay = el => {
    this.display.value += el.innerText; // Concatena o valor do botão ao display
    this.display.focus(); // Mantém o foco no input do display
  };

  // Método que limpa completamente o display
  this.clear = () => this.display.value = '';

  // Método que remove o último caractere do display (como um backspace)
  this.del = () => this.display.value = this.display.value.slice(0, -1);

}

// Cria uma nova instância da calculadora
const calculadora = new Calculadora();

// Inicia os eventos da calculadora (cliques e enter)
calculadora.inicia();
