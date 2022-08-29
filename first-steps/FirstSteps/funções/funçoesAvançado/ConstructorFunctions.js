/**
 * Função construtora -> cria ojeto
 * Função Fabrica -> Cria objeto 
 * a diferença entre as duas:
 * construtora -> Pessoa (new)
 */

// declaração como uma class em Py
function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    this.metodo = () =>{
        console.log(`${this.nome}: sou um método. (função)`)
    }
}

const pessoa1 = new Pessoa('Pedro', 'Henrique')
const pessoa2 = new Pessoa('Maria', 'Eduarda')
