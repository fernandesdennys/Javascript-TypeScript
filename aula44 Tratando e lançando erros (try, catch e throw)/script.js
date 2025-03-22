try {
  console.log(naoExisto);
} catch (err) {
  // console.log(err) <-- exibe o erro novamente.
}

function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw Error('x e y precisam ser números.')
  }
  return x + y;
}

try {
  console.log(soma(1, 2))
  console.log(soma('1', 2))
} catch (Error) {
  //console.log(Error)
  console.log('')
}