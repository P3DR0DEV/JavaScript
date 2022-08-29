const pessoa01 = {
    nome:'Pedro',
    sobrenome: 'Henrique',
    idade: 20,
    fala(){
        console.log(`${this.nome} está falando "Olá, Mundo!"...`)
    },
    incrementaIdade() {
        ++this.idade
    }
}


pessoa01.fala()