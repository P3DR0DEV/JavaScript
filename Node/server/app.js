const express = require('express');

//express app
const app = express();

// register view engines
app.set('view engine', 'ejs');

//listen for request

app.listen(3000); // port 

app.get('/'|| '/index' || '/home', (req,res)=>{
    res.render();
});

app.get('/about', (req,res)=>{
    res.render('about')
});

//redirectiong a page
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});

// app.get('/contact', (req,res)=>{

// });

//404 page, tem que se o ultimo codigo da pagina

app.use((req, res)=>{
    res.status(404).render('404')
})