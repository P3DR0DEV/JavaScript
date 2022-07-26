const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const Blog = require('./models/blog');
require('dotenv').config({path: __dirname + '/.env'});


mongoose.connect(`${process.env.MONGODB_URI}`)
.then((result)=> app.listen(3000))
.catch((err)=> console.log(err))

// register view engines
app.use(express.static(path.resolve(__dirname,'./public')))
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'./views'));

app.use(morgan('dev'));

// //create new object on database
// app.get('/add-blog',(req, res)=>{
//     const blog = new Blog({
//         title:'New Blog',
//         snippet: 'About my new blog',
//         body: 'This is the first blog that i\'m doing on node.js.'
//     });

//     blog.save()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })

// //array com os documentos criados
// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// });

// //finding document by id
// app.get('/single-blog', (req,res)=>{
//     Blog.findById('62dff5a230733aa3623a8f5b')
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })



app.get('/', (req,res)=>{
    res.redirect('/blogs')
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

// app.listen(3000); // port 
