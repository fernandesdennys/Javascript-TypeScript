/*
try {
  // console.log(Olá) Erro gerado.
  console.log('Abri um arquivo');
  console.log('Manupulei o arquivo e gerou erro.');
  console.log('Fechei o arquivo.');

  try {
    console.log(Hello)
  } catch (err) {
    console.log('1st ERRO')
  } finally {
    console.log('FINALLY')
  }


  // É executada quando não há erros
} catch (err) {
  console.log('Tratando o erro')
  // É executada quando há erros
} finally {
  console.log('FINALLY: sempre executado.')
  // SEMPRE 
}

 function retornaHora(data) {
  if (!(data instanceof Date)) {
    console.log('Não é')
  }
}
retornaHora(new Date()); */

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Eperando instância de Date.');
  }

  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    seconds: '2-digit',
    hour12: false,
  });
}

try {
  const data = new Date('01-01-1970 12:58:12');
  const hora = retornaHora();
  console.log(hora);
} catch (err) {
  // Tratar erro
} finally {
  console.log('Tenha um ótimo dia.')
}
