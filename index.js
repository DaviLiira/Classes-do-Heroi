let heroi = {
    nome: "José",
    idade: 23,
    tipo: {
        0: ["mago", "magia"],
        1: ["guerreiro", "espada"],
        2: ["monge", "artes marciais"],
        3: ["ninja", "shuriken"]
    }
}

function ataque(heroi) {
    for(let index in heroi.tipo){
        let [tipoClasse, tipoAtaque] = heroi.tipo[index]
        console.log(`O ${tipoClasse} atacou usando ${tipoAtaque}`)
    }
}

ataque(heroi)
