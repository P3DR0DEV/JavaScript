const { Contato } = require('../models/contatoModel');

const index = (req, res)=> {
    res.render('contato', {title: 'Criar Novo Contato'})
}

const registerContato = async (req, res) =>{
    try{
        const contato = new Contato(req.body);
        await contato.register();
        
        if(contato.errors.length > 0){
            req.flash('errors', contato.errors);
            req.session.save(()=>{
                res.redirect('/')
            });
            return;
        };

        req.flash('success', 'Usuário Criado com sucesso!');
        req.session.save(()=>{
            return res.redirect('/')
        });
        return;

    }catch(e){
        console.log(e);
        return res.render('404', {title: 'Not found'})
    }
};

module.exports ={
    index, 
    registerContato
}