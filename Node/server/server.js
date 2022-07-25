const http = require('http');
const fs = require('fs');
// const _ = require('lodash');


const server = http.createServer((req, res) => { // cria o servidor
 

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    //sending a html file as response
    if(req.url === '/'|| req.url ==='/index'){
        fs.readFile('./views/index.html', ( err, data )=>{
            if (err){
                console.log(err);
            }else{
                res.write(data);
            };
            res.end();
        });
    } else if (req.url === '/about') {
        fs.readFile('./views/about.html',(err, data)=>{
            if (err){
                console.log(err);
            }else{
                res.write(data);
            };
            res.end();
        });
    } else if (req.url === '/about-me') { 
        // se um link mudar e precisar ser redirecionado
        res.statusCode= 301
        res.setHeader('Location','/about')
        res.end()
    } else{
        fs.readFile('./views/404.html',(err, data)=>{
            if(err){
                console.log(err);
            } else{
                res.write(data);
            };
            res.statusCode = 404;
            res.end();
        });
    };
});

/*                Outra alternativa, utilizando case switch

const server1 = http.createServer((req, res)=>{
    console.log(req, res);
    res.setHeader('Content-Type','text/html');

    let path = './views/'
    switch (req.url) {
        case '/':
            path +='index.html';
            break;
        case 'about':
            path +='about.html';
            break;
        default:
            path += '404.html'
            break;
    };

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.write(data);
        }
        res.end();
    })
});
*/ 
server.listen(3000,'localhost', ()=>{ //recebe requests 
    console.log('Listening for request on port 3000.');
});

