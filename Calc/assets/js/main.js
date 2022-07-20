function criaCalc() {
    return{
        display: document.querySelector('.display'),

        inicia(){
            this.click()
            this.pressionaEnter()
        },
        apagaUltimoNum(){
            this.display.value = this.display.value.slice(0 , -1)
        },
        clearDisplay(){
            this.display.value = ''
        },
        click(){
            document.addEventListener('click', (e) => {
                const el = e.target

                if ( el.classList.contains('btn-num')){
                    let valor = el.innerText
                    this.showResult(valor)
                }
                if ( el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }
                if ( el.classList.contains('btn-del')){
                    this.apagaUltimoNum()
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }
            })
        },
        realizaConta(){
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
        },
        showResult(msg){
            this.display.value += msg
        },

    }
}
const calculadora = criaCalc()
calculadora.inicia()

