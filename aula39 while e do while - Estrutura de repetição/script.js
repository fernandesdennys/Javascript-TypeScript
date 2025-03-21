function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r)
}

const min = 1;
const max = 50;
let rand = random(min, max);
console.log(rand !== 10)

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

console.log('################')

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r)
}

const min1 = 1;
const max2 = 50;
let rand3 = 10;
console.log(rand3 !== 10)

while (rand3 !== 10) {
  rand3 = random(min1, max2);
  console.log(rand3);
}

console.log('################')

do {
  rand = random(min, max);
  console.log(rand);
}while (rand !== 10)
  
