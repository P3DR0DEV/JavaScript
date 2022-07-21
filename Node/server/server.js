const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => { // cria o servidor
    console.log(req.url, req.method)

    // set header content type
    res.setHeader('Content-Type', 'text/plain')
    res.write('Hello World')
    res.end()
});

server.listen(3000,'localhost', ()=>{ //recebe requests 
    console.log('Listening for request on port 3000.')
})

