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



document.addEventListener('click',(event) => {
    const evento = event.target

    if(evento.classList.contains('iniciar')){
        cronometro.classList.remove('pausado')
        clearInterval(timer)
        iniciaRelogio()
    } else if (evento.classList.contains('pausar')){
        cronometro.classList.add('pausado')
        clearInterval(timer)
    } else if (evento.classList.contains('zerar')){
        cronometro.classList.remove('pausado')
        clearInterval(timer)
        cronometro.innerHTML = '00:00:00'
        segundos =0
    }
})