const index = (req, res)=> {
    res.render('contato', {title: 'Criar Novo Contato'})
}

const registerContato = (req, res) =>{

};

module.exports ={
    index, 
    registerContato
}