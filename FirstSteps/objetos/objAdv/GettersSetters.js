
function Produto(nome, estoque, preço){
    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque' , {
        enumerable: true,
        configurable: true,
        set: function(valor){
            if (typeof valor === 'number'){
                estoquePrivado = valor;
            }
            
            console.log('Numero inválido');
            return;
        },
        get: function() {
            console.log(estoquePrivado)
        }
    });
};


const Camisas = new Produto('Camisas', 'sakoifhsauidjsa', 20)
console.log(Camisas.estoque)