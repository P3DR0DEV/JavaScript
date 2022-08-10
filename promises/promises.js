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
        setTimeout(() => {
            resolve(msg)
        }, tempo);
    })
};

 
espera('Mensagem 1', rand(1,3))
 .then(resposta => { 
    console.log(resposta);
    return espera('Mensagem 2', rand(1,3))
}) .then(resposta =>{ console.log(resposta)})

 