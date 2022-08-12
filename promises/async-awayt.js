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


async function executa() {

    try{
        const fase = await espera('Fase 1', rand(1,3))
        console.log(fase)
        const fase2 = await espera('Fase 2', rand(1,3))
        console.log(fase2)
        const fase3 = await espera('Fase 3', rand(1,3))
        console.log(fase3)
    }
    catch(e) {
        console.log(e)
    }
}


executa()