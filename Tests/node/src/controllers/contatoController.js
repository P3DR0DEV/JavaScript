const index = (req, res)=> {
    res.render('contato', {title: 'Criar Novo Contato'})
}

module.exports ={
    index
}