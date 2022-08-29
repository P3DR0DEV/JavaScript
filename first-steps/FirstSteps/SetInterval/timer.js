function returnHora(){
    const data = new Date()

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    })
}

const timer = setInterval(() => { // timer no navegador, que pode receber um parametro para parar quando ocorrer um event
    console.log(returnHora())
},1000)

setTimeout(() => {  //timer no node com parada automatica | essa função, para a função setInterval
    clearInterval(timer)
}, 5000);

setTimeout(()=>{
    console.log('Fim do tempo')
}, 5000)
