function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        peso,
        altura,
        //getter
        get imc(){
            const IMC = this.peso/ (this.altura**2)
            return IMC.toFixed(2)
        },
        //setter
        set nomeCompleto(value){
            value = value.splti(' ')
            this.nome = value.shift()
             
        }
    }
}


const pessoa1 = criaPessoa('Nome','sobrenome', 70, 1.74)
const pessoa2 = criaPessoa('Nome', 'sobrenome', 58, 1.70)

console.log(pessoa1.imc)
console.log(pessoa2.imc)