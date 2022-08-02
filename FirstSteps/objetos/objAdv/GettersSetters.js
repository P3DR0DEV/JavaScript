function Produto(nome, preço, estoque){
    this.nome = nome
    this.preço = preço

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque' , {
        enumerable: true,
        configurable: true,
        get: function(){
            return estoquePrivado
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                console.log('Número inválido.')
                return 
            }
            estoquePrivado = valor
        },
    });
};

function criaProduto(nome){
    let nomeValido = nome
    return{
        get nome(){
            return nomeValido
        },
        set nome(nome){
            if (typeof nome !== 'string'){
                console.log('Nome inválido')
                return 
            };
            return nomeValido 
        }
    } 
}


const camisas = new Produto('Camisas',50, 20)
camisas.estoque = 30
console.log(camisas.estoque)


const camisas2 = criaProduto('Camisetas')
console.log(camisas2.nome)