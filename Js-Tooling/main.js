
class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }
}

const pessoa1 = new Pessoa('Pedro', 'Mendes');

console.log(pessoa1.nomeCompleto())