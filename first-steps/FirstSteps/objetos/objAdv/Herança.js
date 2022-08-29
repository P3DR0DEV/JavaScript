// Criar camiseta, caderno e lapis

class Produto {
    constructor(nome, preço) {
        this.nome = nome
        this.preço = preço
    };
    aumento(valor){
        return this.preço += ((this.preço*valor)/100)
    };
    desconto(valor){
        return this.preço -= ((this.preço*valor)/100)
    };
}


// const lapis = new Produto('Lapis', 2 )
// lapis.aumento(10)
// console.log(lapis)

class Camiseta extends Produto{
}   

const camiseta = new Camiseta('Regata', 7.50, 'Preto')
console.log(camiseta)