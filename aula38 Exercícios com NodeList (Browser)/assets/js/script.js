const cont = document.querySelector('.paragrafos');
const parag = document.querySelectorAll('p');

const style = getComputedStyle(document.body)
const bgbody = style.backgroundColor

for (let p of parag) {
  p.style.backgroundColor = bgbody
  p.style.color = '#ffff'
  p.style.borderRadius = '20px'
  console.log(p);
}