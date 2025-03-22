/*
try { // Início do bloco try para capturar possíveis erros.
  // console.log(Olá) Erro gerado. // Código comentado, causaria erro se descomentado (Olá não está entre aspas).
  console.log('Abri um arquivo'); // Simula a abertura de um arquivo.
  console.log('Manupulei o arquivo e gerou erro.'); // Simula manipulação do arquivo.
  console.log('Fechei o arquivo.'); // Simula fechamento do arquivo.

  try { // Bloco try aninhado para tratamento interno de erros.
    console.log(Hello) // Gera erro (Hello não está entre aspas).
  } catch (err) { // Captura o erro do bloco interno.
    console.log('1st ERRO') // Exibe mensagem de erro.
  } finally { // Sempre executa, independentemente de erro ou não.
    console.log('FINALLY') // Exibe "FINALLY".
  }

  // É executada quando não há erros
} catch (err) { // Captura erros do bloco externo.
  console.log('Tratando o erro') // Exibe mensagem de tratamento de erro.
  // É executada quando há erros
} finally { // Sempre executa, independentemente de erro ou não.
  console.log('FINALLY: sempre executado.') // Exibe "FINALLY: sempre executado."
  // SEMPRE 
}

function retornaHora(data) { // Função para retornar a hora formatada.
  if (!(data instanceof Date)) { // Verifica se o argumento passado não é do tipo Date.
    console.log('Não é') // Exibe "Não é" se não for do tipo Date.
  }
}
retornaHora(new Date()); // Chama a função passando uma instância de Date.
*/

function retornaHora(data) { // Função que retorna a hora formatada.
  if (data && !(data instanceof Date)) { // Verifica se data foi passada e se não é do tipo Date.
    throw new TypeError('Eperando instância de Date.'); // Lança um erro se não for do tipo Date.
  }

  if (!data) { // Se data não for passada, cria uma nova instância com a data atual.
    data = new Date();
  }
  return data.toLocaleTimeString('pt-BR', { // Retorna a hora formatada no padrão brasileiro.
    hour: '2-digit', // Exibe a hora com dois dígitos.
    minute: '2-digit', // Exibe os minutos com dois dígitos.
    seconds: '2-digit', // Exibe os segundos com dois dígitos.
    hour12: false, // Utiliza o formato de 24 horas.
  });
}

try { // Início do bloco try para capturar possíveis erros.
  const data = new Date('01-01-1970 12:58:12'); // Cria uma instância de Date com a data especificada.
  const hora = retornaHora(); // Chama a função retornaHora sem argumentos, pegando a hora atual.
  console.log(hora); // Exibe a hora retornada.
} catch (err) { // Captura erros lançados no bloco try.
  // Tratar erro (nenhuma ação definida aqui).
} finally { // Sempre executa, independentemente de erro ou não.
  console.log('Tenha um ótimo dia.') // Exibe "Tenha um ótimo dia.".
}