const fs = require('fs')


// le poucos dados de um arquivo por tempo
const readStream = fs.createReadStream('./docs/blog2.txt', { encoding: 'utf-8'})
//escreve um arq aos poucos
const writeStream = fs.createWriteStream('./docs/Teste-WriteStream.txt')

readStream.on('data', (chunk)=>{ //chunck of data = pedaços do conteudo
    console.log('----New Chunk----')
    console.log(chunk)
    writeStream.write('\nNew Chunk\n')
    writeStream.write(chunk)
})
/**
 * essas 2 funções fazem a mesma coisa.
 */

//piping
readStream.pipe(writeStream)