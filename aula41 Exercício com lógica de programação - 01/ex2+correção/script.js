function ePaisagem(larg, alt) {
  const w = larg
  const h = alt

  if (w > h) {
    return true;
  } else {
    return false;
  }
}
console.log(ePaisagem(1290, 960))

//------------------------

function ePaisagem(largura, altura) {
  return largura >= altura;
  // return largura > altura ? true : false
}
console.log(ePaisagem(1920, 1080));

//---------------------------

const ePaisagem = (largura, altura) => largura >= altura;
console.log(ePaisagem(1920, 1080));