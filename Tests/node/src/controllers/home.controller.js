const { ContatoModel } = require('../models/contatoModel');

const viewHome = (req, res) =>{
    ContatoModel.find().sort({ criadoEm: -1 })
     .then(result => {
         return res.render('home',{ title: 'Agenda', contatos: result })
     })
     .catch(err =>{
        console.log(err)
     })

}
const viewAbout = (req, res) =>{
    return res.send('About Page')
}

module.exports ={
    viewHome,
    viewAbout
}