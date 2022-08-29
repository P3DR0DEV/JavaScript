let num = Number(prompt('Digite um número: ')) // recebe o número digitado em forma de string
// num = Number(num) transforma a string em número
const numTitle = document.getElementById('num-title') 
const texto = document.getElementById('texto')

numTitle.innerHTML = num

texto.innerHTML = `<p>Seu número menos 2 é: ${num - 2}</p>`
texto.innerHTML += `<p>A raiz quadrada de ${num} é: ${num ** 1/2}</p>`
texto.innerHTML += `<p>É um número inteiro? ${Number.isInteger(num)}</p>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p>`
texto.innerHTML += `<p>Arredondando ${num} para baixo é: ${Math.floor(num)} </p>`
texto.innerHTML += `<p>Arredondando ${num} para cima é: ${Math.ceil(num)} </p>`
texto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`