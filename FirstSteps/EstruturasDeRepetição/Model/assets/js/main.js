const elementos = [
    {tag: 'h1', texto: 'Exercícios com Repetição'},
    {tag: 'p', texto: 'Teste de Paragrafo'},
    {tag: 'div', texto: 'Teste de criação de DIV'},
    {tag: 'footer', texto: 'teste de footer'},
    {tag: 'section', texto: 'teste de section'}
]


const container = document.querySelector('.container')
const div = document.createElement('div')

for (c in elementos){
    const { tag } = elementos[c]
    const { texto } = elementos[c]
    setResultado(texto)
    function setResultado(texto){   
        criaElemento(tag)
        let resultado = document.querySelector(tag)
        resultado.innerHTML = texto
    }
}

function criaElemento(tag){
    const novoElemento = document.querySelector('.container')
    novoElemento.createElement(`${tag}`)
    return novoElemento
}
for (c in elementos){
    const { tag, texto } = elementos[c]
    const tagCriada = document.createElement(tag)
    const textoCriado = document.createTextNode(texto)

    tagCriada.appendChild(textoCriado)
    div.appendChild(tagCriada)
}


container.appendChild(div)
