//função 
function soma(valor1 = 0, valor2= 0) {
    const total = Number(valor1) + Number(valor2)
    return total
}
let somar = soma(4, 9)
console.log(somar)                                     

//função reduzida
const raiz = function(n){
    return n ** 0.5
}
console.log(raiz(9))

//função arrow
const subtrairPor10 = (n) => n - 10
console.log(subtrairPor10(20))