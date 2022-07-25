// const h1 = document.querySelector('.class')
const data = new Date()

function getMesText(mes){
    const listMes = ['Janeiro','Fevereiro','Março', 'Abril','Maio', 'Junho','Julho','Agosto','Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return listMes[mes]  
}

function getDiaDaSemanaTexto(diaSemana){
    const diasSemana = ['Domingo','Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    return diasSemana[diaSemana]
}

function criaTxT(){
    const diaSemana = getDiaDaSemanaTexto(data.getDay())
    const Mes = getMesText(data.getMonth())
    return `${diaSemana}, ${data.getDate()} de ${Mes} de ${data.getFullYear()}, ${data.getHours()}:${data.getMinutes()>=10? data.getMinutes():'0'+data.getMinutes()}`
}

console.log(criaTxT())