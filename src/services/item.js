class Item {
    constructor(nome, preço, quantidade = 1) {
        this.nome = nome;
        this.preço = preço;
        this.quantidade = quantidade;
    }

    getSubtotal() {
        return this.preço * this.quantidade;
    }
}

module.exports = Item;
