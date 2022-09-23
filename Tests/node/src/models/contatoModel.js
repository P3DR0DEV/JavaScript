const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: { 
        type: String,
        required: false,
        default: ''
    },
    email: {
        type: String,
        required: false,
        default: ''
    },
    telefone: {
        type: String,
        required: false,
        default: ''
    },
    criadoEm: {
        type: Date,
        default: Date.now
    }
});

const contatoModel = mongoose.model('Contato', ContatoSchema,'Agenda')


class Contato {
    constructor(body){
        this.body = body;
        this.errors = [];
        this.contato = null
    };

    register(){
        this.valida()
        if(this.errors.length > 0 ) return 
    };

    valida(){
        this.cleanUp()
        // validação de dados
        if(!validator.isEmail(this.body.email)){
            this.errors.push('Email Invalido')
        };

        if(this.body.telefone.length < 8 || this.body.password.length >= 12){
            this.errors.push('Invalid Telephone Number.')
        };
    };

    cleanUp(){
        for(let key in this.body){
            if (typeof this.body[key] !== 'string'){
                this.body[key] = ''
            }
        }

        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            email: this.body.email,
            telefone: this.body.telefone
        }
    };

};

module.exports = Contato