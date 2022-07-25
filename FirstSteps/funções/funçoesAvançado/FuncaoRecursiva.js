// recursividade é uma função que se chama novamente, tem um comportamento igual ao For 
function recursive(max) {
    if (max > 10) return;
    console.log(max)
    max++
    recursive(max)
};

recursive(1)