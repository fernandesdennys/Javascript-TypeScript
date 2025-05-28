function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('CAI NO ERRO');
        return;
      }
      resolve(msg.toUpperCase() + ' - Passei na PROMISE');
      return;
    }, tempo)
  });
}
function baixaPagina() {
  const emCache = true;

  if (emCache) {
    //return Promise.resolve('Página em Cache');
    return Promise.reject('Página em Cache');
  } else {
    return esperaAi('Baixei e página', 3000);
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log('ERRO', e));

//Promise.all Promise.race Promise.resolve Promise.reject
/* const promises = [
  //'Primeiro valor',
  esperaAi(1000, rand(1, 5)),
  esperaAi('Promise 1', 3000),//rad(1, 5 )
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 1000),
  // 'Outro VALOR'
];

Promise.race(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro)
  });

Promise.all(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro)
  }); */