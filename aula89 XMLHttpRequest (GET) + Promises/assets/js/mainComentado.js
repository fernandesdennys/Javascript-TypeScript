// ✅ Função responsável por fazer a requisição AJAX
const request = obj => {
  // Retorna uma Promise para permitir uso de async/await
  return new Promise((resolve, reject) => {

    // Cria uma instância do XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Prepara a requisição com método, URL e define como assíncrona
    xhr.open(obj.method, obj.url, true);

    // Envia a requisição
    xhr.send();

    // Escuta o evento 'load' que dispara quando a resposta chega
    xhr.addEventListener('load', () => {

      // Verifica se a resposta foi bem-sucedida (status 200 a 299)
      if (xhr.status >= 200 && xhr.status < 300) {

        // Resolve a Promise com o conteúdo da resposta (HTML ou JSON)
        resolve(xhr.responseText);
      } else {

        // Rejeita a Promise com o texto do erro (ex: "Not Found")
        reject(xhr.statusText);
      }
    });
  });
};

// ✅ Evento global de clique para interceptar cliques em links <a>
document.addEventListener('click', e => {
  const el = e.target; // Elemento clicado
  const tag = el.tagName.toLowerCase(); // Nome da tag em minúsculo

  // Verifica se o elemento clicado é um link
  if (tag === 'a') {
    e.preventDefault(); // Evita que o navegador recarregue a página
    carregaPagina(el);  // Chama a função que irá carregar a nova página via AJAX
  }
});

// ✅ Função assíncrona que lida com a requisição AJAX ao clicar em um link
async function carregaPagina(el) {
  const href = el.getAttribute('href'); // Obtém o link da âncora clicada

  // Cria objeto de configuração da requisição
  const objConfig = {
    method: 'GET',
    url: href
  };

  try {
    // Aguarda o resultado da requisição AJAX
    const response = await request(objConfig);

    // Chama a função que insere o conteúdo na página
    carregaResultado(response);

  } catch (e) {
    // Caso ocorra um erro na requisição, exibe no console
    console.log(e);
  }
}

// ✅ Função que insere o conteúdo retornado dentro do elemento com classe .resultado
function carregaResultado(response) {
  const resultado = document.querySelector('.resultado'); // Seleciona o contêiner
  resultado.innerHTML = response; // Insere o conteúdo da página carregada
}
