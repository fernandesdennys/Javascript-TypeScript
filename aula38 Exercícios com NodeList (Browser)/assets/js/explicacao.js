
const cont = document.querySelector('.paragrafos'); // Seleciona o elemento com a classe 'paragrafos' e armazena na constante 'cont'
const parag = document.querySelectorAll('p'); // Seleciona todos os elementos <p> da página e armazena em 'parag', criando uma NodeList (similar a um array)
const style = getComputedStyle(document.body); // Obtém os estilos computados do elemento <body> (os estilos finais aplicados, mesmo os vindos de CSS externo)
const bgbody = style.backgroundColor; // Pega a cor de fundo do <body> e armazena em 'bgbody'

for (let p of parag) {  // Itera sobre cada elemento <p> presente em 'parag'
  p.style.backgroundColor = bgbody; // Define a cor de fundo de cada <p> para a mesma cor de fundo do <body>
  p.style.color = '#ffff'; // Define a cor do texto de cada <p> para branco
  p.style.borderRadius = '20px'; // Adiciona um arredondamento de 20px nas bordas de cada <p>
  console.log(p); // Exibe cada elemento <p> no console, útil para verificar se a iteração está funcionando
}
