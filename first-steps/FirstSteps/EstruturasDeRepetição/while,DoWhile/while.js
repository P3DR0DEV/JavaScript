function random(max, min){
    let r = Math.random(min,max) * (max - min) + min
    return Math.floor(r)
}

const min = 1
const max = 50

let numRandom = random(min , max)

while (numRandom !== 10){
    numRandom = random(min , max)
    console.log(numRandom)
}