const pessoas = [
  { id: 3, nome: 'Dennys' },
  { id: 2, nome: 'Ricardo' },
  { id: 1, nome: 'Fernandes' },
];

/* const novaPessoas = {} 
  for(const pessoa of pessoa) {
  const {id} = pessoa;
  novaPessoas[id] = {...pessoa};
  } */

const novaPessoas = new Map()
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novaPessoas.set(id, { ...pessoa });
}

console.log('-----------------------------------')

console.log(novaPessoas);

console.log('-----------------------------------')

console.log(novaPessoas.get(2));

console.log('-----------------------------------')


for (const pessoa of novaPessoas) {
  console.log(pessoa);
}

console.log('-----------------------------------')

for (const [identifier, { id, nome }] of novaPessoas) {
  console.log(identifier, id, nome);
}

console.log('-----------------------------------')

for (const pessoa of novaPessoas.keys()) {
  console.log(pessoa);
}

console.log('-----------------------------------')

for (const pessoa of novaPessoas.values()) {
  console.log(pessoa);
}

console.log('-----------------------------------')

novaPessoas.delete(2)
console.log(novaPessoas);
