//Calculadora feita com função construtora

function Calculadora(){
    this.display = document.querySelector('.display')

    this.inicia = ()=>{
        click()
    }

    const click = () =>{
        document.addEventListener('click', (e)=>{
            const el = e.target

                if ( el.classList.contains('btn-num')){
                    let valor = el.innerText
                    showResult(valor)
                }
                if ( el.classList.contains('btn-clear')){
                    clearDisplay()
                }
                if ( el.classList.contains('btn-del')){
                    apagaUltimoNum()
                }
                if(el.classList.contains('btn-eq')){
                    realizaConta()
                }
        })
    }
    const realizaConta = ()=>{
        let valor = this.display.value

        try{
           valor = eval(valor)
            if(!valor){
                alert('Conta Invalida')
            }
        }catch(e){
            alert('Conta Invalida')
        }
        this.display.value = valor
    }
    const showResult = (msg)=>{
        this.display.value += msg
    }
    const apagaUltimoNum = ()=>{
        this.display.value = this.display.value.slice(0 , -1)
    }
    const clearDisplay = ()=>{
        this.display.value = ''
    }
}

const calc = new Calculadora()
calc.inicia()