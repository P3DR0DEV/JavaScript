function validaCPF(cpf){
    let validarCpf = []
    cpf = cpf.replace(/\D+/g, ''); // limpa deixando apenas os números
    let cpfArray = Array.from(cpf);
    
    if (cpfArray.length < 11) {
        console.log('CPF inválido');
        return
    };

    let cont = 10;  
    let somaPrimeiroDigito = 0;
    let somaSegundoDigito = 0;
    for(let i in cpfArray){
        somaPrimeiroDigito += Number(cpfArray[i]) * cont;
        cont--;
        if(i === '8'){
            break
        };
    };
    let primeiroDigito = 11-(somaPrimeiroDigito % 11);
    
    if (primeiroDigito > 9 ){
        primeiroDigito = 0
    };
    const sequencia = cpf[0].repeat(cpf.length)
    if (sequencia === cpf){
        console.log('CPF Inválido.')
        return 
    }
    if (primeiroDigito === Number(cpfArray[9])){
        let cont = 11;  
        for(let i in cpfArray){
            somaSegundoDigito += Number(cpfArray[i]) * cont;
            cont--;
            validarCpf.push(cpfArray[i]);
            if(i === '9'){
                break
            };
        };
    } else{
        console.log('Cpf inválido.');
    }

    let segundoDigito = 11 - (somaSegundoDigito % 11);
    
    if (segundoDigito === Number(cpfArray[10])){
        validarCpf.push(segundoDigito.toString());
        if (validarCpf.values === cpfArray.values){
            console.log('CPF Válido.');
        };
    }else{
        console.log('Cpf Inválido.');
    };
};

validaCPF('');

module.exports = validaCPF()