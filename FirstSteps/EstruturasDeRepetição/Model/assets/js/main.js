const elementos = [
    {tag: 'h1', texto: 'Exercícios com Repetição'},
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]


const container = document.querySelector('.container')
const div = document.createElement('div')

for (c in elementos){
    const { tag, texto } = elementos[c]
    const tagCriada = document.createElement(tag)
    const textoCriado = document.createTextNode(texto)

    tagCriada.appendChild(textoCriado)
    div.appendChild(tagCriada)
}


container.appendChild(div)