const { Login } = require('../models/loginModel');

const loginPage = (req, res)=>{
    if(req.session.user) return res.redirect('/')
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


const loginEnter = async (req, res, next) =>{
    try{
        const login = new Login(req.body)
        await login.enter();

        if (login.errors.length> 0){
            req.flash('errors', login.errors);
            req.session.save(()=>{
                return res.redirect('/login')
            });
            return;
        };

        req.session.user = login.user
        req.flash('success', 'Entrou no sistema!');
        req.session.save(()=>{
            return res.redirect('/login')
        });
        return;

    } catch(e) {
        console.log(e)
        return res.render('404')
    }

};

const logout = (req, res)=>{
    req.session.destroy()
    res.redirect('/')
}

module.exports = {
    loginPage,
    register,
    loginEnter,
    logout
}