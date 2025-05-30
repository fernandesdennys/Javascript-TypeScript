// 705.484.450-52 070.987.720-03 — exemplos de CPFs válidos para testes

// Declara a classe responsável por validar CPFs
class ValidaCPF {
  constructor(cpfEnviado) {
    // Define a propriedade cpfLimpo, contendo apenas os números do CPF
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false, // não pode ser reatribuída
      enumerable: true, // pode ser listada em loops
      configurable: false, // não pode ser deletada ou reconfigurada
      value: cpfEnviado.replace(/\D+/g, '') // remove tudo que não for número
    });
  }

  // Verifica se o CPF é uma sequência de números iguais (inválido)
  éSequência() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  // Gera um novo CPF válido a partir dos primeiros 9 dígitos
  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2); // remove os dois últimos dígitos
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos); // calcula o primeiro dígito verificador
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1); // calcula o segundo dígito verificador
    this.novoCPF = cpfSemDigitos + digito1 + digito2; // concatena tudo para formar o novo CPF
  }

  // Método estático para gerar um dígito verificador
  static geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    // Multiplica cada dígito por um peso decrescente e soma os resultados
    for (let stringNumerica of cpfSemDigitos) {
      total += reverso * Number(stringNumerica);
      reverso--;
    }

    const digito = 11 - (total % 11); // fórmula do dígito verificador
    return digito <= 9 ? String(digito) : '0'; // se > 9, retorna '0'
  }

  // Método principal que valida o CPF
  valida() {
    if (!this.cpfLimpo) return false; // se CPF não existe
    if (typeof this.cpfLimpo !== 'string') return false; // se não for string
    if (this.cpfLimpo.length !== 11) return false; // se não tiver 11 dígitos
    if (this.éSequência()) return false; // se for uma sequência inválida
    this.geraNovoCpf(); // gera um CPF válido para comparação

    return this.novoCPF === this.cpfLimpo; // compara o gerado com o original
  }
}

// Cria uma nova instância da classe com o CPF a ser validado
let validacpf = new ValidaCPF('070.987.720-03');
// validacpf = new ValidaCPF('999.999.999-99'); // outro exemplo (inválido)

// Exibe no console se o CPF é válido ou não
if (validacpf.valida()) {
  console.log('CPF válido');
} else {
  console.log('CPF inválido');
}
