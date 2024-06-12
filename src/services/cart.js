const Item = require('./item');

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(nome, preço, quantidade = 1) {
        const existingItemIndex = this.items.findIndex(item => item.nome === nome);
        if (existingItemIndex > -1) {
            this.items[existingItemIndex].quantidade += quantidade;
        } else {
            const newItem = new Item(nome, preço, quantidade);
            this.items.push(newItem);
        }
    }

    deleteItem(nome) {
        this.items = this.items.filter(item => item.nome !== nome);
    }

    removeOneItem(nome) {
        const itemIndex = this.items.findIndex(item => item.nome === nome);
        if (itemIndex > -1) {
            if (this.items[itemIndex].quantidade > 1) {
                this.items[itemIndex].quantidade -= 1;
            } else {
                this.items.splice(itemIndex, 1);
            }
        }
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.getSubtotal(), 0);
    }

    getItems() {
        return this.items;
    }
}

module.exports = Cart;
