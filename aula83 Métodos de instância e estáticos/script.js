function teste() {
  console.log('Este é meu TESTE')
}
class ControleRemoto {
  constructor(tv) {
    this.tv = tv
    this.volume = 0
    teste();
  }
  //Método de instância
  aumentarVolume() {
    this.volume += 2;
  }
  diminuirVolume() {
    this.volume -= 2;
  }
  //Método estático 
  static trocarPilha() {
    console.log('Ok, Vou trocar!')
  }
  static soma(x, y) {
    return x + y
  }
}

const controle1 = new ControleRemoto('Samsung');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume();
console.log(controle1);
console.log('--------------------')
ControleRemoto.trocarPilha();
console.log('--------------------')
console.log(Math.random());
console.log('--------------------')
console.log(ControleRemoto.soma(4, 6))
console.log('--------------------')