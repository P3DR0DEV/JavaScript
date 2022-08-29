class DispositivoEletronico{
    /**
     * @param {string} nome
     */
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    };
    ligar(){
        if (this.ligado){
            return `O dispositivo já está ligado`;
        };
        return this.ligado = true;
    };
    desligar(){
        if (!this.ligado){
            return `O dispositivo já está desligado.`
        }
        return this.ligado = false;
    };

}


class Smatphone extends DispositivoEletronico{
    constructor(nome, cor){
        super(nome);
        this.cor = cor;
    };
}


const celular = new Smatphone('Iphone', 'Preto');
console.log(celular); //DispositivoEletronico { nome: 'Iphone', ligado: false, cor: 'Preto' }

celular.ligar();
console.log(celular) //DispositivoEletronico { nome: 'Iphone', ligado: true, cor: 'Preto' }