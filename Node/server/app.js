const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();


// register view engines
app.use(express.static(path.resolve(__dirname,'./public')))
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'./views'));

app.use(morgan('dev'))

app.get('/', (req,res)=>{
    const blogs = [
        {title: 'Renan é gay', snippet: 'Renan é bem gay mesmo'},
        {title: 'Ancient é N', snippet: 'Ancient é bem N mesmo'},
        {title: 'Capivara é psico', snippet: 'Capivara fez uma mulher terminar e depois fez ela se matar'}
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
