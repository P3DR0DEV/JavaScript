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

const ContatoModel = mongoose.model('Contato', ContatoSchema,'Contatos')


class Contato {
    constructor(body){
        this.body = body;
        this.errors = [];
        this.contato = null
    };
    
    static async searchById(id){
        const user = await ContatoModel.findById(id);
        return user
    };

    async register(){
        this.valida()
        if(this.errors.length > 0 ) return 

        this.contato = await ContatoModel.create(this.body)
    };

    valida(){
        this.cleanUp()
        // validação de dados
        if(!validator.isEmail(this.body.email)){
            this.errors.push('Email Invalido')
        };

        if(this.body.telefone.length < 8 || this.body.telefone.length >= 12){
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

module.exports = { Contato, ContatoModel }