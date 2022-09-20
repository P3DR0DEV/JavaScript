const app = require('express');
const router = app.Router();
const { viewHome } = require('../src/controllers/home.controller');
const { loginPage, register, loginEnter } = require('../src/controllers/loginController');

// Rotas =>
router.get('/', viewHome);

// Login =>

router.get('/login', loginPage )
router.post('/login/register', register)
router.post('/login/enter', loginEnter )

module.exports = router;