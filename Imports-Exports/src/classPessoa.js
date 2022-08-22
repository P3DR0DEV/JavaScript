export class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    };
    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    };
};

export function soma(num1, num2) {
    return Number(num1+num2);
};
