const express = require('express');
//express app
const app = express();

//listen for request

app.listen(3000); // port 

app.get('/'||'/index', (req,res)=>{
    res.sendFile('./views/index.html',{
        root:__dirname
    });
});

app.get('/about', (req,res)=>{
    res.sendFile('./views/about.html', {
        root: __dirname
    });
});

//redirectiong a page
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});

//!404 page, tem que se o ultimo codigo da pagina

app.use((req, res)=>{
    res.status(404).sendFile('./views/404.html', {
        root: __dirname
    });
})