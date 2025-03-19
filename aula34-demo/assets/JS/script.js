const elementos = [
  { tag: 'p', texto: '🐞 "Não é um bug, é uma feature."' },
  { tag: 'div', texto: '⚙️ "Funciona na minha máquina."' },
  { tag: 'footer', texto: '🔧 "Em time que está ganhando não se mexe."' },
  { tag: 'section', texto: '⏳ "Compilou… então deve estar certo."' },
];

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
  const { tag, texto } = elementos[i];
  const tagCriada = document.createElement(tag);
  // tagCriada.innerHTML = texto;
  let textoCriado = document.createTextNode(texto);
  tagCriada.appendChild(textoCriado)
  div.appendChild(tagCriada);
  console.log(tag)
}
container.appendChild(div)