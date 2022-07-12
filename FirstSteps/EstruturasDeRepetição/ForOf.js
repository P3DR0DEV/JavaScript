// For para iterários, não apresenta o indice do array, não utilizavel para objetos  

const nome = 'Pedro Henrique'

for (value of nome) {  // retorna diretamente o valor da key
    console.log(value)
}

const nomes = ['Pedro', 'Henrique', 'Pablo', 'Felipe']

for (value of nomes) {
    console.log(value)
}