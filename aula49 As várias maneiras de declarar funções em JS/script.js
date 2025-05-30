// Declaração de função (Function Hoisting)
falaOi() // Declaração "Clássica"
function falaOi() {
  console.log('Oi')
}

// First-Class objects (Objetos de primeira classe)
// function expression

const souUmDado = function () {
  console.log('Sou um dado.');
};
souUmDado();

function execFunction(funct) {
  funct();
}
execFunction(souUmDado);

// Arrow function
const funcarrow = () => {
  console.log('Sou uma arrow function');
};
funcarrow();

// Dentro de um objeto
const obj = {
  falar: function () {
    console.log('Estou falando...');
  }
};
obj.falar();