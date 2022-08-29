// Estrutura 
for (let c = 0; c <= 10; c++) {
    if (c%2 ===0){
        console.log(`${c}`)
    }    
}
// Adicionando item em um Array 
let c = 0
let par = []
let impar = []

for (c; c<=20;c++) {
    if (c % 2 === 0){
        par.push(c)
    }else{
        impar.push(c)
    }
}

console.log(impar)
console.log(par) 

// Verificando os Itens de um Array

const frutas = ['Maçã', 'Pera', 'Banana']
let tamanho = frutas.length

for (let indice = 0; indice < tamanho; indice++){
    let fruta = frutas[indice]
    console.log(fruta)
    if (fruta === 'Banana'){
        console.log('O macaco comeu a banana')
    }
}
frutas.pop()
console.log(`Sobraram: ${frutas}`)