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

function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, '');
    }
  });
}

ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === 'undefined') return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);

  const novoCPF = cpfParcial + digito1 + digito2
  return novoCPF === this.cpfLimpo;
};
ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);

  let regressivo = cpfArray.length + 1;
  let total = cpfArray.reduce((ac, val) => {
    ac += (regressivo * Number(val));
    regressivo--;

    return ac;
  }, 0);

  const digito = 11 - (total % 11);
  return digito > 9 ? '0' : String(digito);
};
ValidaCPF.prototype.isSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo

}

const cpf = new ValidaCPF('398.410.128-71');
if (cpf.valida()) {
  console.log('CPF Válido');
} else {
  console.log('CPF inválido')
}
