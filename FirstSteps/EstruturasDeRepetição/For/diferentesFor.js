const nomes = ['Pedro', 'Pablo', 'Felipe', 'Moacyr', 'Renan', 'Cadu', 'Henrique']

// diferenças entre for 
// For Classico

for ( let indice = 0; indice< nomes.length; indice ++ ) {
    console.log(`${indice}: ${nomes[indice]}`)
}

console.log('####################################################')
// For In

for ( indice in nomes ) {
    console.log(`${indice}: ${nomes[indice]}`)
}

console.log('####################################################')

// For Of

for ( value of nomes ){ 
    console.log(value)
}


// For Each

nomes.forEach(function(valor, indice) {
    console.log(indice, valor)
});

