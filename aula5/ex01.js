const nome = 'Pedro Henrique'
const idade = 20 
const peso = 73
const alturaEmM = 1.74
let IMC = peso / alturaEmM ** 2
let anoNascimento = 2022 - idade

console.log(`${nome} tem ${idade} anos e pesa ${peso}Kg.`)
console.log(`Com ${peso}Kg e ${alturaEmM}m de altura, o IMC de ${nome} vale ${Number(IMC.toFixed(2))}`)
console.log(`${nome} nasceu no ano ${anoNascimento}`)

// console.log() //funciona tanto no navegador, quanto no Node.js
// alert('Olá mundo!') // Funciona apenas no navegador, o objeto "window " não existe no Node

// let nome = 'Pedro'

// console.log(`Meu nome é ${nome} e tenho 20 anos.`)
// console.log(`${nome} está estudando JavaScript.`)