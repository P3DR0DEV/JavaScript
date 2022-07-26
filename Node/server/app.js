const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
require('dotenv').config({path: __dirname + '/.env'});

// express app
const app = express();

//register DataBase
mongoose.connect(`${process.env.MONGODB_URI}`)
.then((result)=> app.listen(3000))
.catch((err)=> console.log(err))

// register view engines & middlewares & static files
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'./views'));
app.use(express.static(path.resolve(__dirname,'./public')))
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});


app.get('/', (req,res)=>{
    return res.redirect('/blogs')
});

app.get('/about', (req,res)=>{
    return res.render('about', { title: 'About' });
});

//redirectiong a page
app.get('/about-us',(req,res)=>{
    return res.redirect('/about');
});



//blog routs
app.get('/blogs', (req, res)=>{
    Blog.find().sort({ createdAt: -1 })
    .then((result)=>{
        res.render('index',{
            title: 'All Blogs',
            blogs: result
        })
    })
    .catch((err)=>{
        console.log(err)
    })
})
app.post('/blogs',(req,res)=>{
    const blog = new Blog(req.body);
    
    blog.save()
    .then((result)=>{
        res.redirect('/blogs')
    })
    .catch((err)=>console.log(err))
});

app.get('/blogs/create', (req,res)=>{
    return res.render('create', { title: 'Create New Blog' })
});
app.get('/blogs/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then(result =>{
        res.render('details', {title:'Blog Details', blog: result});
    })
    .catch(err => console.log(err));
});

// delete from the database => must be connected to the frontend detais.ejs
app.delete('/blogs/:id', (req, res)=>{

    const id = req.params.id;

    Blog.findByIdAndDelete(id)
     .then( result =>{
            res.json({ redirect:'/blogs' })
        })
     .catch(err => console.log(err))
});

//!404 page, tem que se o ultimo codigo da pagina

app.use((req, res)=>{
    return res.status(404).render('404', { title: '404' });
});


//listen for request

// app.listen(3000); // port 
