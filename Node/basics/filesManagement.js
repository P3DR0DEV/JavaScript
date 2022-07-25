const fs = require('fs')



// reading files

fs.readFile('./docs/blog.txt', (e, data)=>{
    if(e){
        console.log(e)
    }
    console.log(data.toString())
})
console.log('xD') // printado primeiro por readfile ser uma função async




// writing files

fs.writeFile('./docs/blog.txt', 'Hello World', ()=>{ // essa função pode criar arquivos
    console.log('File was written')
})




//directories

//create directories


if (!fs.existsSync('./assets')){ //checa se o diretorio existe, de forma sincrona (ocorre antes de continuar a sequencia de codigo)
    fs.mkdir('./assets',(e)=>{ // se já existe retorna um erro 
        if(e){
            console.log(e)
        }
        console.log('Folder Created')
    })
} else{
    fs.rmdir('./assets', (e) => { // remove o diretório
        if(e){
            console.log(e)
        }
        console.log('Folder Deleted')
    })
}


//Deleting Files
if (fs.existsSync('./docs/blog2.txt')){
    fs.unlink('./docs/blog2.txt', (e) =>{
        if(e){
            console.log(e)
        }
        console.log('File Deleted')
    })
}