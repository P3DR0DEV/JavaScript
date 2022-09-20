const mongoose = require('mongoose');
const validator = require('validator');
const bcriptjs = require('bcryptjs');

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
        this.user = null;
    };

    async enter(){
        this.valida()
        if (this.errors.length > 0) return;

        this.user = await LoginModel.findOne({ email:this.body.email });
        if(!this.user){
            return this.errors.push('Usuário ou senha inválidos.');
        };

        if(!bcriptjs.compareSync(this.body.password, this.user.password)){
            return this.errors.push('Invalid Credentials.');
        };
        
    };

    async register(){
        this.valida()
        if(this.errors.length > 0) return;
    
        await this.userExist();
        if(this.errors.length > 0) return;


        const salt = bcriptjs.genSaltSync()
        this.body.password = bcriptjs.hashSync(this.body.password, salt)
        this.user = await LoginModel.create(this.body)

    };

    valida(){
        this.cleanUp()
        // validação de dados
        if(!validator.isEmail(this.body.email)){
            this.errors.push('Email Invalido')
        };

        if(this.body.password.length < 3 || this.body.password.length >= 20){
            this.errors.push('Invalid Password, must have 3 minimun or 20 maximun caracters.')
        };

    };


    async userExist(){
        const user = await LoginModel.findOne({ email:this.body.email });

        if(user){
            this.errors.push('Email já cadastrado.');
        }
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