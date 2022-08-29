function Objeto(nome, preço, estoque) {
    this.nome = nome;
    this.preço = preço;

    Object.defineProperty(this, 'estoque', {
        value: estoque,
        enumerable: true,
        writable: true,
        configurable: true
    });

    Object.defineProperties(this, {
        nome:{
            value: nome,
            enumerable: true,
            writable: true,
            configurable: true
        },
        preço:{
            value: preço,
            enumerable: true,
            writable: true,
            configurable: true
        },
    });
}