const app = require('express');
const router = app.Router();
const { viewHome, viewAbout } = require('../src/controllers/home.controller');
const { newMiddleware } = require('../src/middlewares/newMiddleware')

router.get('/', newMiddleware , viewHome);
router.get('/about', viewAbout);
router.post('/', (req, res)=>{
    return res.send(req.body)
})
router.get('/erro', (req, res)=>{
    res.render('erro.ejs')
})
module.exports = router;