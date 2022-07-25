function soma() {
    let total = 0

    for (let argumento of arguments){ //equivalente a *args em py ou usar ...args
        total += argumento
    }
    return total
}

console.log(soma(1,2,3,4,5,6,7))


//
function soma2(a , b = 0 , c = 4) {
    console.log( a + b )
}

soma2(2, undefined, 20)


//

function func({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}

let obj = {
    nome: 'Pedro',
    sobrenome: 'Mendes',
    idade: 20
}
func(obj)

//

function arrayD([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}

let lista = ['Pedro', 'Mendes', 20]
arrayD(lista)
//arrayD(['Pedro', 'Mendes', 20])

//

function conta(operador, acumulador, ...numeros) {
    for (let num of numeros){
        if (operador === '+') acumulador += num
        if (operador === '-') acumulador -= num
        if (operador === '/') acumulador /=num
        if (operador === '*') acumulador *=num
    }
    console.log(acumulador)
}

conta('+', 0, 3,4,6,5,21,3124,213,412,3213,)