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
        if (this.quantia < quantSaque){
            return `Valor Irregular.\n Você não possue essa quantia em sua conta.`
        }else{
            this.quantia -= quantSaque;
            return this.quantia
        }
    };
    extrato(){
        return(`${this.nome} - R$${this.quantia.toFixed(2).replace('.',',')}`);
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

class ContaCorrente extends Conta {
    constructor(nome, agencia, quantia, senha, limite) {
        super(nome, agencia, quantia, senha)
        this.limite = limite;
    }

    saque(quantSaque){
        let quantLimite = this.quantia + this.limite

        if (quantLimite < quantSaque){
            console.log(`Saldo insuficiente, Veja a sua conta:`)
        } 
        else if (this.quantia < quantSaque && quantLimite >= quantSaque){
            this.quantia = (quantLimite - quantSaque) - this.limite
            return this.quantia
        } 
        else{
            this.quantia -= quantSaque
            return this.quantia
        }
    };

    transfere(quantTransfere, destino){
        let quantLimite = this.quantia + this.limite

        if (this.quantia >= quantTransfere){
            this.quantia -= quantTransfere;
            destino.quantia += quantTransfere;
            return destino.quantia;
        } 
        else if(quantLimite < quantTransfere){
            console.log('Você não possue essa quantidade disponível em sua conta.');
        } 
        else if (this.quantia < quantTransfere && quantLimite >= quantTransfere){
            this.quantia = (quantLimite - quantTransfere) - this.limite;
            destino.quantia += quantTransfere ;
            return this.quantia ;
        }
    }


}









///                                        Area de testes
const pessoa1 = new Conta('Pedro', '000-1', 2000, '1234')
const pessoa2 = new Conta('Pablo', '000-2', 4000, '12345')
const pessoa3 = new ContaCorrente('Pedro', '000-1', 2000, '1234', 1000)

pessoa3.saque(3100)
// pessoa3.transfere(2000, pessoa2)
console.log(pessoa3.extrato())
console.log(pessoa2.extrato())

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

