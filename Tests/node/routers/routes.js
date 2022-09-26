const app = require('express');
const router = app.Router();
const { viewHome } = require('../src/controllers/home.controller');
const { loginPage, register, loginEnter, logout } = require('../src/controllers/loginController');
const { index, registerContato, editIndex, editContato }= require('../src/controllers/contatoController');
const { loggedUser } = require('../src/middlewares/loggedUser')
// Rotas =>
router.get('/', viewHome);

// Login =>

router.get('/login', loginPage );
router.post('/login/register', register);
router.post('/login/enter', loginEnter );
router.get('/login/logout', logout);

// Rotas de Contato

router.get('/contato', loggedUser , index)
router.post('/contato/register', loggedUser , registerContato )
router.get('/contato/:id', loggedUser , editIndex )
router.post('/contato/edit/:id', loggedUser , editContato )

module.exports = router;