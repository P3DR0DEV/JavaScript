// declaração de Função literal 

//Ocorre o hoisting 
falaOi() // pode ser chamada antes de ser declarada

function falaOi() {
    console.log('Oi')
}

//function expression

const souUmDado = function(){
    console.log('Sou um dado.')
}

function executaFuncao (funcao){
    funcao()
}
executaFuncao(souUmDado)

// Arrow Function

const funcaoArrow = () =>{
    console.log('Arrow Function')
}

funcaoArrow()

// função dentro de um objeto

const objeto = {
    falar(){
        console.log('estou falando.')
    }
}
objeto.falar()