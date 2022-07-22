//toda função geradora defe ser feita com function*

function* geradora1() {
    yield 'Valor 1'
    yield 'Valor 2'
    yield 'Valor 3'

}

const g1 = geradora1()
console.log(g1.next().value) // { value: 'Valor 1' , done: false }
console.log(g1.next().value) // { value: 'Valor 2' , done: false}
console.log(g1.next().value) // { value: 'Valor 3' , done: false}
console.log(g1.next().value) // { value: undefined , done: true}

// console.log(g1.next()) // mostra o objeto { value: , done: }
// console.log(g1.next().value) // mostra o valor de fato


for (let valor of g1){
    console.log(valor)
}

function* geradora2() {  // gerador infinito
    let i = 0
    while(true){
        yield i
        i++
    }
}

const g2 = geradora2()

console.log(g2.next().value)
