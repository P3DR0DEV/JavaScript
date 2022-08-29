const pessoa ={
    nome: 'Pedro',
    sobrenome: 'Henrique',
    idade: 20,
    endereço: {
        rua: 'Roma',
        numero: 45
    }
}

// refere-se ao objeto Pessoa
const { endereço } = pessoa  

// refere-se à constante "endereço" criada, que é um objeto, que se refere ao objeto pessoa
const { rua } = endereço 

console.log(rua) // Roma 
console.log(endereço) // objeto endereço {rua: 'Roma', numero: 45}