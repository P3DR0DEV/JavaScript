const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routers/routes');
const path = require('path');

require('dotenv').config();
const mongodb = process.env.MONGODB_URI;

app.use(routes);
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src' , 'views'))
app.set('view engine', 'ejs')

mongoose.connect(mongodb)
 .then(app.listen(3000, ()=>{
    console.log('Running on 3000')
}))
 .catch(e =>{
    console.log(e)
})