function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject(new Error('not VALUE'));

    setTimeout(() => {
      resolve(msg)
    }, tempo);
  });
}

esperaAi('Estabelecendo conexão com o banco de dados e carregando o documento de usuários...', rand(1, 3))
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Documento "clientes_ativos" localizado no banco de dados; iniciando leitura dos dados.', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta)
    return esperaAi(2222, rand(1, 3));
    /* return esperaAi('Conexão bem-sucedida com o banco de dados — acessando informações do documento "relatorio_financeiro_2025".', rand(1, 3)); */
  })
  .then(resposta => {
    console.log(resposta);
  }).then(() => {
    console.log('Leitura concluída — encerrando a conexão com o banco de dados e salvando alterações no documento.')
  })
  .catch(e => {
    console.log('ERROR:', e);
  });
