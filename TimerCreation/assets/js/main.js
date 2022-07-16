const cronometro = document.querySelector('.cronometro')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0

function tempoZerado(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        timeZone: 'UTC',
        hour12: false
    })
}

let timer

function iniciaRelogio(){
    timer = setInterval(() => {
        segundos++
        cronometro.innerHTML = tempoZerado(segundos)
    }, 1000);
}



iniciar.addEventListener('click',(event) => {
    cronometro.classList.remove('pausado')
    clearInterval(timer)
    iniciaRelogio()
})

pausar.addEventListener('click', (event) => {
    cronometro.classList.add('pausado')
    clearInterval(timer)
})

zerar.addEventListener('click', (event) => {
    cronometro.classList.remove('pausado')
   clearInterval(timer)
   cronometro.innerHTML = '00:00:00'
   segundos =0
})