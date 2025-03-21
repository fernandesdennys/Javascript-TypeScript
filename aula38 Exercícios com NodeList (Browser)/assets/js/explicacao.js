// Seleciona o elemento com a classe 'paragrafos' e armazena na constante 'cont'
const cont = document.querySelector('.paragrafos');

// Seleciona todos os elementos <p> da página e armazena em 'parag', criando uma NodeList (similar a um array)
const parag = document.querySelectorAll('p');

// Obtém os estilos computados do elemento <body> (os estilos finais aplicados, mesmo os vindos de CSS externo)
const style = getComputedStyle(document.body);

// Pega a cor de fundo do <body> e armazena em 'bgbody'
const bgbody = style.backgroundColor;

// Itera sobre cada elemento <p> presente em 'parag'
for (let p of parag) {
  // Define a cor de fundo de cada <p> para a mesma cor de fundo do <body>
  p.style.backgroundColor = bgbody;

  // Define a cor do texto de cada <p> para branco
  p.style.color = '#ffff';

  // Adiciona um arredondamento de 20px nas bordas de cada <p>
  p.style.borderRadius = '20px';

  // Exibe cada elemento <p> no console, útil para verificar se a iteração está funcionando
  console.log(p);
}
