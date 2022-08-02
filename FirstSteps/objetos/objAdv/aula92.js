const produto = { nome: 'Camisa', preço: 20 };
const camisa = produto;
console.log(camisa, produto); // os 2 apontam para o mesmo local da memória 

// rest/spread operator
const produto2 = { nome: 'Camisa', preço: 20 };
const camisa2 = { ...produto2, material: 'Poliester' };// copia os itens do objeto instanciado, podendo fazer alterações
camisa2.nome = 'Camiseta';
console.log(produto2, camisa2);

// Object.keys, retorna um array com as chaves do objeto

console.log(Object.keys(camisa2)) // ['Nome', 'Preço', 'Material']

// Object.freeze, não permite a alteração de valores do objeto

Object.freeze(camisa2)
camisa2.nome = 'TESTE' // erro


//Object.getOwnPropertyDescriptor, descreve a propriedade do objeto

console.log(Object.getOwnPropertyDescriptor(camisa2, 'nome'))  
/**{
 * writable: true,
 * configurable:true,
 * value: valor,
 * }
*/


//! Object.entries(), for k,v in object (python)

for (let [key, value] of Object.entries(camisa2)){
    console.log(`${key}: ${value}`)
}

