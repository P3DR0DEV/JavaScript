const loggedUser = (req, res, next)=>{
    if (!req.session.user){
        req.flash('errors', 'Você precisa se Conectar para acessar esta pagina.')
        return res.redirect('/login');
    }
    next()
}

module.exports = {
    loggedUser
}