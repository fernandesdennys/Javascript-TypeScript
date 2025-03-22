function relogio() {  // Declara a função principal chamada "relogio".

  // Função que recebe um número de segundos e retorna a hora formatada (hh:mm:ss).
  function gerTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);  // Cria um objeto Date a partir do número de segundos convertidos em milissegundos.
    return data.toLocaleTimeString('pt-BR', { // Formata a data no formato de hora brasileiro (24 horas).
      hour12: false, // Garante que o formato seja de 24 horas, sem AM/PM.
      timeZone: 'GMT' // Define o fuso horário como GMT para não haver diferença com o horário local.
    });
  }

  const relogio = document.querySelector('.relogio'); // Seleciona o elemento com a classe "relogio" no HTML.
  let seconds = 0;  // Inicializa a variável "seconds" que vai contar o tempo em segundos.
  let timer;  // Declara a variável "timer" que será usada para armazenar o identificador do intervalo.

  // Função que inicia o relógio, incrementando os segundos a cada 1 segundo.
  function startClock() {
    timer = setInterval(function () { // Cria um intervalo que executa a função a cada 1000ms (1 segundo).
      seconds++;  // Incrementa o contador de segundos.
      relogio.innerHTML = gerTimeFromSeconds(seconds);  // Atualiza o conteúdo do elemento "relogio" com o tempo formatado.
    }, 1000);
  }

  // Adiciona um ouvinte de evento que escuta qualquer clique no documento.
  document.addEventListener('click', function (e) {
    const elm = e.target;  // Obtém o elemento que foi clicado.

    // Se o elemento clicado tiver a classe "zerar":
    if (elm.classList.contains('zerar')) {
      clearInterval(timer);  // Para o intervalo de contagem do relógio.
      relogio.innerHTML = '00:00:00';  // Reseta o display do relógio para "00:00:00".
      relogio.classList.remove('pausado');  // Remove a classe "pausado", se estiver presente.
      seconds = 0;  // Reseta a contagem de segundos.
    }

    // Se o elemento clicado tiver a classe "iniciar":
    if (elm.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');  // Remove a classe "pausado", se estiver presente.
      clearInterval(timer);  // Garante que não haja múltiplos intervalos em execução.
      startClock();  // Inicia ou reinicia a contagem do relógio.
    }

    // Se o elemento clicado tiver a classe "pausar":
    if (elm.classList.contains('pausar')) {
      relogio.classList.add('pausado');  // Adiciona a classe "pausado" para identificar que o relógio está pausado.
      clearInterval(timer);  // Para a contagem do relógio.
    }
  });
}

// Chama a função "relogio" para que ela execute imediatamente ao carregar o script.
relogio();
