const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')
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

// blog routes 
app.use('/blogs', blogRoutes)

//!404 page, tem que se o ultimo codigo da pagina

app.use((req, res)=>{
    return res.status(404).render('404', { title: '404' });
});