class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    };
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    };
};

const p3 = {
    nome: 'Pedro',
    sobrenome: 'Teste'
}
Object.setPrototypeOf(p3, Pessoa.prototype)



const pessoa1 = new Pessoa('Pedro', 'Mendes')
const pessoa2 = new Pessoa('Pablo', 'Lúcio')


console.log(pessoa1)
console.log(pessoa1.nomeCompleto())
console.log(pessoa2.nomeCompleto())
console.log(p3.nomeCompleto())