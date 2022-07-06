const form = document.querySelector('.calculadora')

// executa o código quando o botão for acionado 
form.addEventListener('submit', function(e){
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        setResultado('Peso inválido')
        return 
    } 
    if (!altura) {
        setResultado('Altura inválida')
        return 
    }
    const imc = getIMC(peso, altura)
    const nivelIMC = getNivelIMC(imc)

    setResultado(`Seu IMC: ${imc} (${nivelIMC})`, true)

}) 

//calcula a faixa do IMC
function getNivelIMC(imc){
    const nivel = ['Abaixo do Peso','Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']
    if (imc <= 18.5) return nivel[0]

    if (imc > 18.5 && imc <= 24.9) return nivel[1]

    if (imc >= 25 && imc <= 29.9) return nivel[2]

    if (imc >=30 && imc <= 34.9) return nivel[3]

    if (imc >= 35 && imc <=39.9) return nivel[4]

    if (imc >= 40) return nivel[5]
}

//calcula o imc
function getIMC(peso, altura){
    const soma = peso/ altura **2 
    return soma.toFixed(2)
}

//cria um paragrafo html
function criaP(){
    const p = document.createElement('p')
    return p
}

// escreve no paragrafo criado 
function setResultado(msg, isValid){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML =''

    const p = criaP(msg)
    if (isValid){
        p.classList.add('paragrafo-resultado')} 
    else{
        p.classList.add('paragrafo-resultado-erro')
    }
    p.innerHTML = msg
    resultado.appendChild(p)
}
