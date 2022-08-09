const cpf = require('./validaCPF')

class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.form');
        this.eventos();
    };

    eventos(){
        this.formulario.addEventListener('submit',(e)=>{
            this.handleSubmit(e);
        });
    };

    handleSubmit(e){
        e.preventDefault();
        const fieldValid = this.fieldIsValid();     
    };
    
    fieldIsValid(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for ( let campo of this.formulario.querySelectorAll('.valida')){
            let label = campo.previousElementSibling.innerHTML;
            if (!campo.value){
                this.createErro(campo, `O campo "${label}" não pode estar vazio.`);
                valid = false;
            };

            if (campo.classList.contains('cpf')){
                if(!cpf.validaCPF()){
                    
                }
            }
        };

        return valid
    };
    validaCPF(campo){
        const cpf = new validaCPF(campo.value)

        if(!cpf.validaCPF()){
            this.createErro(campo, 'Cpf inválido');
            return false;
        }

        return true
    };

    createErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    };

};


const validação = new ValidaFormulario();