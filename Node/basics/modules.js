//importação 

const { pessoa, idade } = require('./people')

console.log(pessoa)
console.log(idade)


const { platform, homedir } = require('os') // Sistema Operacional 

console.log(platform()) // win32
console.log(homedir()) // C:\Users\150367

