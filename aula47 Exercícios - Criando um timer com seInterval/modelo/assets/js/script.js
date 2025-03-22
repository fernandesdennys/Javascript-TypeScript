function relogio() {

  function gerTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'GMT'
    });
  }

  const relogio = document.querySelector('.relogio');
  let seconds = 0
  let timer;

  function startClock() {
    timer = setInterval(function () {
      seconds++;
      relogio.innerHTML = gerTimeFromSeconds(seconds);
    }, 1000);
  }

  document.addEventListener('click', function (e) {
    const elm = e.target;

    if (elm.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado')
      seconds = 0;
    }

    if (elm.classList.contains('iniciar')) {
      relogio.classList.remove('pausado')
      clearInterval(timer);
      startClock();
    }

    if (elm.classList.contains('pausar')) {
      relogio.classList.add('pausado')
      clearInterval(timer);
    }
  });
}
relogio();


/* iniciar.addEventListener('click', function (event) {
  relogio.classList.remove('pausado')
  clearInterval(timer)
  startClock();
});

pausar.addEventListener('click', function (event) {
  relogio.classList.add('pausado')
  clearInterval(timer);
});

zerar.addEventListener('click', function (event) {
  relogio.classList.remove('pausado')
  clearInterval(timer);
  relogio.innerHTML = '00:00:00';
  seconds = 0;
}); */