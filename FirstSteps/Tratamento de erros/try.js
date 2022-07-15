const soma = (x , y) =>{
    if (typeof x !== 'number'|| typeof y !== 'number' ){
        throw('x e y devem ser números')
    }
    return x + y
}


try{
    console.log(soma(1 , 2))
    console.log(soma('a', 2))
} catch (erro) {
    console.log(erro)
}