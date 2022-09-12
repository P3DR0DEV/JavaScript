const app = require('express');
const router = app.Router();
const { viewHome, viewAbout } = require('../src/controllers/home.controller');
const { newMiddleware } = require('../src/middlewares/newMiddleware')

router.get('/', newMiddleware , viewHome);
router.get('/about', viewAbout)

module.exports = router;