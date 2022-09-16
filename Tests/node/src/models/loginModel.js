const mongoose = require('mongoose');
const validator = require('validator');

const LoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const LoginModel = mongoose.model('Login', LoginSchema,'Agenda')

class Login{
    constructor(body){
        this.body = body;
        this.errors = [];
        this.users = null;
    };

    async register(){
        this.valida()
        if(this.errors.length> 0) return
        try{
            this.users = await LoginModel.create(this.body)
        } catch(e){
            console.log(e)
        };
    };

    valida(){
        this.cleanUp()
        // validação de dados
        if(!validator.isEmail(this.body.email)){
            this.errors.push('Email Invalido')
        }

        if(this.body.password.length < 3 || this.body.password.length >= 20){
            this.errors.push('Invalid Password, must have 3 minimun or 20 maximun caracters.')
        };



    };

    cleanUp(){
        for(let key in this.body){
            if (typeof this.body[key] !== 'string'){
                this.body[key] = ''
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
};

module.exports = { Login }