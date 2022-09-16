const app = require('express');
const router = app.Router();
const { viewHome } = require('../src/controllers/home.controller');
const {  } = require('../src/middlewares/homeMiddleware')

// Rotas =>
router.get('/', viewHome);

module.exports = router;