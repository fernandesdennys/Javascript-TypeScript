class DispositorEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }
  ligar() {
    if (this.ligado) {
      console.log(' já ligado ');
      return;
    }
    this.ligado = true;
  }
  desligar() {
    if (this.ligado) {
      console.log(' já desligado ');
      return;
    }
    this.ligado = false;
  }
}
class SmartPhone extends DispositorEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo
  }
}
class Tablet extends DispositorEletronico {
  constructor(nome, wifi) {
    super(nome);
    this.wifi = wifi
  }
  ligar() {
    if (this.ligado) {
      console.log('Olha, você alterou o método ligar.');
    }
  }
}


const s1 = new SmartPhone('iPhone', 'Preto', 'Pro MAX')
console.log(s1)
s1.ligar();
s1.ligar();

console.log('-----------------------------')

const t1 = new Tablet('iPad', true);
console.log(t1.ligado);
t1.ligar();


/* const d1 = new DispositorEletronico('SmartPhone')
d1.ligar();
d1.ligar();
d1.desligar();
console.log(d1)
 */