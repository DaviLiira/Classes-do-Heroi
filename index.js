class classeDoHeroi {
  constructor(tipoClasse) {
    this.tipoClasse = tipoClasse;
  }
  ataque() {
    let tipoAtaque = "";
    switch (true) {
      case this.tipoClasse == "mago":
        tipoAtaque = "magia";
        break;
      case this.tipoClasse == "guerreiro":
        tipoAtaque = "espada";
        break;
      case this.tipoClasse == "monge":
        tipoAtaque = "artes marciais";
        break;
      case this.tipoClasse == "ninja":
        tipoAtaque = "shuriken";
        break;
    }
    console.log(`O ${this.tipoClasse} atacou utilizando ${tipoAtaque}`);
  }
}

let heroiMago = new classeDoHeroi("mago");
let heroiGuerreiro = new classeDoHeroi("guerreiro");
let heroininja = new classeDoHeroi("ninja");
let heroiMonge = new classeDoHeroi("monge");

heroiMago.ataque();
heroiGuerreiro.ataque();
heroininja.ataque();
heroiMonge.ataque();
