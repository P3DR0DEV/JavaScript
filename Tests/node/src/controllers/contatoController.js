const { Contato } = require('../models/contatoModel');

const index = (req, res)=> {
    res.render('contato', {title: 'Criar Novo Contato', contato: ''})
}

const registerContato = async (req, res) =>{
    try{
        const contato = new Contato(req.body);
        await contato.register();
        
        if(contato.errors.length > 0){
            req.flash('errors', contato.errors);
            req.session.save(()=>{
                res.redirect('/contato')
            });
            return;
        };

        req.flash('success', 'Usuário Criado com sucesso!');
        req.session.save(()=>{
            return res.redirect(`/contato/${contato.contato._id}`)
        });
        return;

    }catch(e){
        console.log(e);
        return res.render('404', {title: 'Not found'})
    }
};


const editIndex = async (req, res)=>{
    if(!req.params.id) return res.render('404', { title: 'Not Found' });

    const contato = await Contato.searchById(req.params.id);

    if(!contato) return res.render('404', { title: 'Not Found' });


    res.render('contato', {title: "Contato" , contato });

};

const editContato = async (req, res) =>{
    try{
        if(!req.params.id) return res.render('404', { title: 'Not Found' });

        const contato = new Contato(req.body);
        await contato.edit(req.params.id);
    
        if(contato.errors.length > 0){
            req.flash('errors', contato.errors);
            req.session.save(()=>{
                res.redirect('/contato')
            });
            return;
        };
    
        req.flash('success', 'Contato editado com sucesso!');
        req.session.save(()=>{
            return res.redirect(`/contato/${contato.contato._id}`)
        });
        return;

    } catch (e){
        console.log(e);
        return res.render('404', {title: 'Not found'})
    }
};


module.exports ={
    index, 
    registerContato,
    editIndex,
    editContato
}