const pessoas = [
    { id: 3, nome: 'Pedro' },
    { id: 2, nome: 'Pablo'},
    { id: 1, nome: 'Duda'},
    { id: 5, nome: 'Felipe' }
];

const novasPessoas = new Map();
for ( const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas.set( id, { ...pessoa })
}

console.log(novasPessoas)



