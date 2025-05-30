// 398.410.128-71 

/*
3x  9x  8x  4x  1x  0x  1x  2x  8x
10  9   8   7   6   5   4   3   2 
30  81 64  28   6   0   4   6  16 = 235

11 - (235 % 11) = 7 (primeiro dígito)
Se o numero for menor que 2, o dígito é 0

 3x  9x  8x  4x  1x  0x  1x  2x  8x  7x
11  10   9   8   7   6   5   4   3   2 
33  90  72  32   7   0   5   8  24  14 = 285

11 -  (285 % 11) = 1 (segundo dígito)
Se o numero for menor que 2, o dígito é 0
CPF válido: 398.410.128-71
*/

let cpf = '398.410.128-71';
let cpfSemMascara = cpf.replace(/\D/g, '');
let cpfArray = Array.from(cpfSemMascara);
console.log(cpfArray);