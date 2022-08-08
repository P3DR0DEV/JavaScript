function criaPessoa(nome, sobrenome, idade) {
    const pessoaPrototype = {
        nomeCompleto(){
            console.log(`${this.nome} ${this.sobrenome} - ${this.idade}`);
        }
    };
    
    return Object.create(pessoaPrototype, { 
        nome: {value: nome}, 
        sobrenome: {value: sobrenome}, 
        idade: {value: idade} 
    })
};

const pessoa1 = criaPessoa('Pedro', 'Henrique', 20);
console.log(pessoa1)

