// Array
let pessoas = ['Pedro', 'Pablo', 'Lucélia', 'Felipe', 'Helen']

for (contador in pessoas) {
    console.log(`${contador} = ${pessoas[contador]}`)
    contador++
}

const frutas = ['Maça', 'Pera', 'Banana']

for (let index in frutas){
    console.log(frutas[index])
}


// Objeto
const funcionarios = {
    nome: 'Pedro',
    sobrenome: 'Henrique',
    idade: 20
}


for (key in funcionarios) {
    console.log(`${key}: ${funcionarios[key]}`)
}