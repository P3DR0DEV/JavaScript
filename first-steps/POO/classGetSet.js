_velocidade = Symbol('velocidade')
class Carro{
    constructor(nome, modelo){
        this.nome = nome;
        this.modelo = modelo;
        this[_velocidade] = 0;
    };

    acelera(){
        if (this[_velocidade]>= 100) return;
        this[_velocidade]++;
    };

    freia(){
        if (this[_velocidade]<= 0) return;
        this[_velocidade]--;
    };

    /**
     * @param {number} value
     */
    set velocidade(value){
        if (typeof value !== 'number') return;
        if (value <=0 ||value > 100) return;
        this[_velocidade] = value;
    };
    /**
     * @returns {Number}
     */
    get velocidade(){
        return this[_velocidade];
    };
};


const carro1 = new Carro('Fusca', 'Esportivo')
console.log(carro1) //Carro { nome: 'Fusca', modelo: 'Esportivo', [Symbol(velocidade)]: 0 }

carro1.acelera()
console.log(carro1)//Carro { nome: 'Fusca', modelo: 'Esportivo', [Symbol(velocidade)]: 1 }

carro1.freia()
console.log(carro1) //Carro { nome: 'Fusca', modelo: 'Esportivo', [Symbol(velocidade)]: 0 }

carro1.velocidade //! 0


carro1.velocidade = 40 // setter
console.log(carro1.velocidade)  //! 40

