// Cria um array de objetos, onde cada objeto tem uma tag HTML e um texto associado.
const elementos = [
  { tag: 'p', texto: '🐞 "Não é um bug, é uma feature."' },
  { tag: 'div', texto: '⚙️ "Funciona na minha máquina."' },
  { tag: 'footer', texto: '🔧 "Em time que está ganhando não se mexe."' },
  { tag: 'section', texto: '⏳ "Compilou… então deve estar certo."' },
];

// Seleciona o elemento com a classe 'container' no documento e armazena a referência na variável container.
const container = document.querySelector('.container');

// Cria um novo elemento <div> que servirá como "container" para os elementos gerados dinamicamente.
const div = document.createElement('div');

// Itera sobre o array 'elementos' para criar os elementos HTML dinamicamente.
for (let i = 0; i < elementos.length; i++) {
  // Desestruturação: extrai as propriedades 'tag' e 'texto' do objeto atual no array.
  const { tag, texto } = elementos[i];

  // Cria um novo elemento HTML com a tag especificada no objeto (ex: 'p', 'div', 'footer', 'section').
  const tagCriada = document.createElement(tag);

  // Cria um nó de texto com o conteúdo fornecido no objeto.
  let textoCriado = document.createTextNode(texto);

  // Adiciona o nó de texto criado como filho do elemento criado, garantindo que o texto apareça dentro da tag.
  tagCriada.appendChild(textoCriado);

  // Adiciona o elemento criado (com seu texto) dentro da <div> criada anteriormente.
  div.appendChild(tagCriada);
}

// Por fim, adiciona a <div> que contém todos os elementos criados dentro do elemento com a classe 'container'.
container.appendChild(div);
