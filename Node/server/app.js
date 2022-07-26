const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config({path: __dirname + '/.env'})


mongoose.connect(`${process.env.MONGODB_URI}`)
.then((result)=>console.log('Connected to DB'))
.catch((err)=> console.log(err))

// register view engines
app.use(express.static(path.resolve(__dirname,'./public')))
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'./views'));

app.use(morgan('dev'));

app.get('/', (req,res)=>{
    const blogs = [
        {title: 'Felipe é lindo', snippet: 'Felipe é lindo'},
        {title: 'Lucélia é uma boa pessoa', snippet: 'Lucélia é uma boa pessoa'},
        {title: '', snippet: ''}
    ];
    return res.render('index', {
        title: 'Home',
        blogs
    });
});

app.get('/about', (req,res)=>{
    return res.render('about', {
        title: 'About'
    });
});

//redirectiong a page
app.get('/about-us',(req,res)=>{
    return res.redirect('/about');
});

app.get('/blogs/create', (req,res)=>{
    return res.render('create', {
        title:'Create New Blog'
    });
});
//!404 page, tem que se o ultimo codigo da pagina

app.use((req, res)=>{
    res.status(404).render('404', {
        title: '404'
    });
});


//listen for request

app.listen(3000); // port 
