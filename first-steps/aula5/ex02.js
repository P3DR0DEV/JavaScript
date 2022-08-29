let varA = "A"
let varB = "B"
let varC = "C"

console.log(`${varA}`)
console.log(`${varB}`)
console.log(`${varC}`)

console.log("==================")
let temp = varA

varA = varB
varB = varC
varC = temp


console.log(`${varA}`)
console.log(`${varB}`)
console.log(`${varC}`)
