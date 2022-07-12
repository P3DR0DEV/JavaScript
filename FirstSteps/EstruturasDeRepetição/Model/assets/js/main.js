const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

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
