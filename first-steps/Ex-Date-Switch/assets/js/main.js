const data = new Date()
const h1 = document.querySelector('.container h1')

function getDiaDaSemanaTexto(diaSemana){
    let DiaDaSemanaTexto;

    switch (diaSemana) {
        case 0 :
            DiaDaSemanaTexto = 'Domingo'
            return DiaDaSemanaTexto
        case 1:
            DiaDaSemanaTexto = 'Segunda-Feira'
            return DiaDaSemanaTexto
        case 2:
            DiaDaSemanaTexto = 'Terça-Feira'
            return DiaDaSemanaTexto
        case 3:
            DiaDaSemanaTexto = 'Quarta-Feira'
            return DiaDaSemanaTexto
        case 4:
            DiaDaSemanaTexto = 'Quinta-Feira'
            return DiaDaSemanaTexto
        case 5:
            DiaDaSemanaTexto = 'Sexta-Feira'
            return DiaDaSemanaTexto
        case 6:
            DiaDaSemanaTexto = 'Sábado'
            return DiaDaSemanaTexto
        default:
            DiaDaSemanaTexto = ''
            return DiaDaSemanaTexto
    }   
}

function getMesText(mesNumber){
    let mesNumberTxT;
    
    switch(mesNumber){
        case 0:
            mesNumberTxT = 'Janeiro'
            return mesNumberTxT
        case 1:
            mesNumberTxT = 'Fevereiro'
            return mesNumberTxT 
        case 2:
           mesNumberTxT = 'Março'
           return mesNumberTxT 
        case 3:
            mesNumberTxT = 'Abril'
            return mesNumberTxT
        case 4:
            mesNumberTxT = 'Maio'
            return mesNumberTxT
        case 5:
            mesNumberTxT = 'Junho'
            return mesNumberTxT
        case 6:
            mesNumberTxT = 'Julho'
            return mesNumberTxT
        case 7:
            mesNumberTxT = 'Agosto'
            return mesNumberTxT
        case 8:
            mesNumberTxT = 'Setembro'
            return mesNumberTxT
        case 9:
            mesNumberTxT = 'Outubro'
            return mesNumberTxT
        case 10:
            mesNumberTxT = 'Novembro'
            return mesNumberTxT
        case 11:
            mesNumberTxT = 'Dezembro'
            return mesNumberTxT
        default:
            mesNumberTxT = 'Erro de Mês'
            return mesNumberTxT 
    }
}

function zeroAEsquerda(num){
    return num >= 10? num : `0${num}` 
}
let dia = getDiaDaSemanaTexto(data.getDay())
let mes = getMesText(data.getMonth())
h1.innerHTML = `${dia}, ${data.getDate()} de ${mes} de ${data.getFullYear()}, ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`