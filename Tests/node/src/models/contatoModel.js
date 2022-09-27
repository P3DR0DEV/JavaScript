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
    
    async edit(id){
        if(typeof id !== 'string') return;

        this.valida();
        if(this.errors.length > 0 ) return;  
        
        this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true });

    };

    async register(){
        this.valida()
        if(this.errors.length > 0 ) return 

        this.contato = await ContatoModel.create(this.body)
    };

    static async deletaContato(id){
        if(typeof id !== 'string') return;

        const contato = await ContatoModel.findOneAndDelete({_id: id});
        return contato;
        
    };

    valida(){
        this.cleanUp()
        // validação de dados
        if(!this.body.email || !this.body.telefone) this.errors.push('Você deve inserir um email ou telefone');

        if(this.body.email){
            if(!validator.isEmail(this.body.email)){
                this.errors.push('Email Invalido')
            };
        }
        if(this.body.telefone){
            if(this.body.telefone.length < 8 || this.body.telefone.length >= 12){
                this.errors.push('Invalid Telephone Number.')
            };
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