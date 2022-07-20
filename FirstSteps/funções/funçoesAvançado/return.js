function soma(a, b) {
    const sum = Number(a) + Number(b)
    return sum
}

function criaPessoa(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}
console.log(criaPessoa('Pedro', 'Mendes'))



function criaMultiplicador(multiplicador) {
    return (num) =>{
        return num * multiplicador
    }
}

const duplicar = criaMultiplicador(2) // recebe a função interna
//console.log(duplicar) -> [ function]
console.log(duplicar(3))  // resultado, no caso 6