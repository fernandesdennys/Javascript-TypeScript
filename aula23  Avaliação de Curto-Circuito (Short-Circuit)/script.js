/*
&& -> false && true -> false ("O valor")
|| -> true && false -> vai retornar "o valor verdadeiro"

FALSY (false, 0, '', "", ``, null / undefine, NaN)

*/
function falaOi() {
  return 'Oi';
}
const vaiExecutar = 'Dennys';
console.log(vaiExecutar && falaOi());

console.log(0 || false || null || 'Dennys Fernandes' || true);

const corUsuario = 'vermelho'
const corPadrao = corUsuario || 'preto'

console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;
const f = 0;

console.log(a || b || 'Dennys Fernandes' || c || d || e);