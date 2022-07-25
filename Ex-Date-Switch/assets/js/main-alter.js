const h1 = document.querySelector('.class')
const data = new Date()

const opcoes = {
    dateStyle: 'full', // mes, ano, dia
    timeStyle: 'full' // hora, minutos, segundos, timezone || 'short' = hora minutos 
}
h1.innerHTML = data.toLocaleDateString('pt-BR', string)