const Pessoa = new Object();
Pessoa.nome = 'Pedro';
Pessoa.sobrenome = 'Mendes';
Pessoa.idade = 20;
Pessoa.getAnoNasc = function(){
    const data = new Date();
    return data.getFullYear() - this.idade;
};
console.log(`${Pessoa.nome} ${Pessoa.sobrenome}, ${Pessoa.idade}, ${Pessoa.getAnoNasc()}`)

const Pessoa = {
    nome: 'Pedro',
    sobrenome: 'Mendes',
    idade: 20,
    getAnoNascimento:  function(){
        const data = new Date();
        return data.getFullYear() - this.idade
    }
}

// utilizar arrow function nessa situação da problema 
console.log(Pessoa.getAnoNascimento())