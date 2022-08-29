const nome = prompt('Digite o seu nome completo: ')

document.body.innerHTML += `O seu nome é ${nome}. <br>`
document.body.innerHTML += `O seu nome tem ${nome.length} letras.<br>`
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}.<br>`
document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${nome.slice(-3)}.<br>`
document.body.innerHTML += `O seu nome em maiúsculas é: ${nome.toUpperCase()}.<br>`
document.body.innerHTML += `O seu nome em minúsculas é: ${nome.toLowerCase()}. <br>`
document.body.innerHTML += `As palavras do seu nome são: [${nome.split(' ')}]. <br>`
document.body.innerHTML += `A primeira aparição da letra E: ${nome.indexOf('e') +1}. <br>`
document.body.innerHTML += `A ultima aparição da letra E: ${nome.lastIndexOf('e') +1}. <br>`