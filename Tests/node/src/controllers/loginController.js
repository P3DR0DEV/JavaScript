const { Login } = require('../models/loginModel');

const loginPage = (req, res)=>{
    return res.render('login', {title: 'Login'});
};

const register = async (req, res) =>{
    try{
        const login = new Login(req.body)
        await login.register();

        if (login.errors.length> 0){
            req.flash('errors', login.errors);
            req.session.save(()=>{
                return res.redirect('/login')
            });
            return;
        };

        req.flash('success', 'Usuário Criado com sucesso!');
        req.session.save(()=>{
            return res.redirect('/login')
        });
        return;
    } catch(e) {
        console.log(e)
        return res.render('404')
    }

};

module.exports = {
    loginPage,
    register
}