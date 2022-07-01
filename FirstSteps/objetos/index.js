const pessoa01 = {
    nome: 'Pedro',
    sobrenome: 'Henrique', 
    idade: 20
}

console.log(pessoa01)


function criaPessoa(nome, sobrenome, idade){
    return{
        nome, //nome:nome
        sobrenome, //sobrenome:sobrenome
        idade // idade: idade
    }
}

const pessoa02 = criaPessoa('Pedro', 'Henrique', 20)
console.log(pessoa02)

