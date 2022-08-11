function rand(min, max) {
    max,min *=1000
    return Math.floor(Math.random()* (max-min) + min)
}
/**
 * 
 * @param {string} msg 
 * @param {number} tempo 
 */
function espera(msg, tempo){
    return new Promise((resolve, reject)=>{
        if (typeof msg !== 'string'){
            reject('Erro de tipo')
        };
        setTimeout(() => {
            resolve(msg)
        }, tempo);
    })
};

 
espera('Mensagem 1', rand(1,3))
 .then(resposta => { 
    console.log(resposta);
    return espera('Mensagem 2', rand(1,3))
}) 
    .then(resposta =>{ 
        console.log(resposta);
        return espera('Mensagem 3', rand(1,3))
    }) 
        .then( resposta =>{ console.log(resposta) })
         .catch(e =>{ console.log(e) });


         // Metodos de uma promise 
         /**
          * Promise.all 
          * Promise.race
          * Promise.resolve
          * Promise.reject
          */



const promessas = [
    espera('mensagem 1', rand(1,3)),
    espera('mensagem 2', rand(1,3)),
    espera('mensagem 3', rand(1,3)),
    espera('mensagem 4', rand(1,3)),
];
Promise.all(promessas) 
    .then((valor)=>{
        console.log(valor)
    })
    .catch(e=> console.log(e));
    
