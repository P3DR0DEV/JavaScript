const form = document.querySelector('.form')

form.addEventListener('submit', function (e){
    e.preventDefault()
    const inputTarefa = form.querySelector('.ToDoList')
    valueTarefa = inputTarefa.value 
    console.log(valueTarefa)
    resultado(valueTarefa)
})


function criaLi(){
    const li = document.createElement('li')
    return li
}

function criaBotao(){
    const botao = document.createElement('button')
    botao.classList.add('btn')
    return botao
}

function resultado(msg){
    const resultado = document.querySelector('.resultado') 
    if (msg !== ''){
        const li = criaLi(msg)
        li.innerHTML = `${msg}`
        
        resultado.appendChild(li)
    }
}