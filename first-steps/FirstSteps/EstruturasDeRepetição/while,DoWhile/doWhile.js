function random(min, max){
    const r = Math.random(min, max) *(max-min) +min
    return Math.floor(r)
}

const min = 1
const max = 50
let contador = 0

let numRandom = random(min,max)

do {
    numRandom = random(min, max)
    contador++
    console.log(`${contador}: ${numRandom}`)
} while (numRandom !== 10);