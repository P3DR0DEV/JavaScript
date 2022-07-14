// pegar o style background, e aplicar aos paragrafos 

const section = document.querySelector('.container')
const paragrafos = section.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const backgroudColorBody = estilosBody.backgroundColor
console.log(backgroudColorBody)

for (let p of paragrafos){
    p.style.backgroundColor = backgroudColorBody
    p.style.color = 'white'
    p.style.padding = '5px'
}