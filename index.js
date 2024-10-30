class Heroi {
    constructor(tipo, idade, nome) {
        this.nome = nome || "Herói sem nome";
        this.idade = idade || "Idade desconhecida";
        this.tipo = tipo;

        const tiposValidos = ["mago", "guerreiro", "monge", "ninja"];

        if (!tiposValidos.includes(tipo)) {
            this.tipo = "inexistente";
            this.ataque = null;
        } else {
            this.ataque =
                tipo === "mago" ? "magia" :
                tipo === "guerreiro" ? "espada" :
                tipo === "monge" ? "artes marciais" :
                "shuriken";
        }
    }

    atacar() {
        if (this.tipo === "inexistente") {
            return "Herói inexistente.";
        }
        return `O ${this.tipo} atacou usando ${this.ataque}.`;
    }
}


const heroi1 = new Heroi("ninja", 25, "Jack");
console.log(heroi1.atacar());