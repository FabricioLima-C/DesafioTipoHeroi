class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = '';
  }
  _defineAtaque() {
    if (this.tipo === 'Guerreiro') {
      this.ataque = 'Usando a espada';
    } else if (this.tipo === 'Mago') {
      this.ataque = 'Usando Magia';
    } else if (this.tipo === 'Monge') {
      this.ataque = 'Usando Arte Marcial';
    } else if (this.tipo === 'Ninja') {
      this.ataque = 'Usando Shuriken';
    } else {
      this.ataque = 'Não existe este tipo de herói';
    }
  }

  atacar() {
    this._defineAtaque();
    console.log(`O ${this.tipo} atacou ${this.ataque}`);
  }
}
let nome = prompt('Digite o nome do herói: ');
let idade = parseInt(prompt('Digite a idade: '));
let tipo = prompt(
  'Digite qual tipo do herói (Guerreiro, Mago, Monge, Ninja): '
);
const fabricio = new Heroi(nome, idade, tipo);

fabricio.atacar();
console.log('Terminou!!!');
