const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogControllers')

// Get Method
router.get('/', blogController.blogIndex);

router.get('/create', blogController.returnCreatePage);

router.get('/:id', blogController.blogDetails);

// Post Methos
router.post('/', blogController.createNewBlog);

// delete from the database => must be connected to the frontend detais.ejs
router.delete('/:id', blogController.blogDeleteItem);

module.exports = router