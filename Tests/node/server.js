const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routers/routes');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const { erros, success }= require('./src/middlewares/errorMiddleware')

require('dotenv').config();
const mongodb = process.env.MONGODB_URI;
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

const sessionOptions = session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    },
    store: MongoStore.create({ mongoUrl: mongodb })
});
app.use(sessionOptions);
app.use(flash());


app.set('views', path.resolve(__dirname, 'src' , 'views'));
app.set('view engine', 'ejs');

app.use(erros);
app.use(success);
app.use(routes);
// app.use((req,res)=>{
//     res.render('404', {title: 'Erro'})
// })

mongoose.connect(mongodb)
.then(app.listen(3000, ()=>{
    console.log('Running on 3000')
}))
.catch(e =>{
    console.log(e)
})