class Conta{
    constructor(nome, agencia, quantia, senha){
        this.nome = nome;
        this.agencia = agencia;
        Object.defineProperty(this,'quantia',{
            writable: true,
            enumerable: true,
            configurable: false,
            value: quantia
        });
        Object.defineProperty(this, 'senha',{
            writable: false,
            enumerable: false,
            configurable: false,
            value: senha
        });
    }
    deposito(quantDeposito){
        this.quantia += Number(quantDeposito);
        return this.quantia;
    };
    saque(quantSaque){
        this.quantia -= quantSaque;
        return this.quantia
    };
    extrato(){
        return(`${this.nome} - R$${this.quantia},00`);
    };
    transfere(quantTransfere, destino){
        if (this.quantia >= quantTransfere){
        this.quantia -= quantTransfere
        destino.quantia += quantTransfere
        return destino.quantia
        } else{
            console.log('Você não possue essa quantidade disponível em sua conta,')
        }
    }
}

const pessoa1 = new Conta('Pedro', '000-1', 2000, '1234')
const pessoa2 = new Conta('Pablo', '000-2', 4000, '12345')


console.log('=====Extrato=====')
console.log(pessoa1.extrato())
console.log(pessoa2.extrato())

pessoa1.deposito(1000)
pessoa1.saque(500)
pessoa1.transfere(1000, pessoa2)

console.log('=====Extrato=====')
console.log(pessoa1.extrato())
console.log(pessoa2.extrato())

pessoa2.transfere(2000, pessoa1)

console.log('=====Extrato=====')
console.log(pessoa1.extrato())
console.log(pessoa2.extrato())

