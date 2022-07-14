function maiorNum(num, num2){
    if (num > num2){
        console.log(`${num} é o maior entre ${num} e ${num2}`)
    } else{
        console.log(`${num2} é o maior entre ${num} e ${num2}`)
    }
}

function maiorNumero(x, y){
    if (x > y) return x
    return y
}

function recebeMaior(x,y){
    return x > y ? `${x}` : `${y}`
}

const getMaior = (x,y) => { return x > y ? `${x}` :`${y}`} 


maiorNum(10,24) // 1 função
console.log(maiorNumero(10,24)) // 2função
console.log(recebeMaior(10,24)) // 3 função
console.log(getMaior(10,24)) // arrow function