const form = document.querySelector('.form')
const inputTarefa = form.querySelector('.ToDoList')
const ul = document.querySelector('.resultado')


form.addEventListener('submit', function (e){ 
    e.preventDefault() // não atualizar a pagina

    const valueTarefa = inputTarefa.value 
    resultado(valueTarefa)
    limpaInput()
    salvarTarefas()
})

/** Criação dos elementos do Resultado do input */

// função para criar cada li da Ul
function criaLi(){
    const li = document.createElement('li')
    return li
}

function criaBotao(li){
    li.innerText += ' '
    const botao = document.createElement('button')
    botao.innerText = 'Apagar'
    botao.setAttribute('class','btn-Apagar')
    li.appendChild(botao)
}

// funcionalidade do btn, para remover item 
document.addEventListener('click', (e) => {
    const el = e.target

    if (el.classList.contains('btn-Apagar')){
        el.parentElement.remove()
        salvarTarefas()
    }
})

/** Fim da Criação dos elementos do Resultado do input */


// Função que adiciona o resultado à Ul, verificando se é o valor é valido 
function resultado(msg){
    const resultado = document.querySelector('.resultado') 
    if (msg !== ''){
        const li = criaLi(msg)
        li.innerText = `${msg}`
        resultado.appendChild(li)
        criaBotao(li)
    }
}

// limpa a caixa de input
function limpaInput(){
    inputTarefa.value = ''
    inputTarefa.focus()
}    



function salvarTarefas() {
    const liTarefas = ul.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas){
        let tarefaTXT = tarefa.innerText
        tarefaTXT = tarefaTXT.replace('Apagar', '').trim() // .trim remove o espaço em branco
        listaDeTarefas.push(tarefaTXT)
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    

    localStorage.setItem('tarefas', tarefasJSON)
}


function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for (let tarefa of listaDeTarefas){
        resultado(tarefa)
    }
}
adicionaTarefasSalvas()