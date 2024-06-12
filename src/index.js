const Cart = require('./services/cart');

const cart = new Cart();

// Adicionar itens ao carrinho
cart.addItem('Livro', 29.90, 2);
cart.addItem('Caneta', 2.50, 5);
cart.addItem('Notebook', 1500.00, 1);

// Exibir itens no carrinho
console.log('Itens no carrinho:', cart.getItems());

// Calcular o total
console.log('Total do carrinho:', cart.calculateTotal());


// Remover um item do carrinho
cart.removeOneItem('Caneta');
console.log('Itens no carrinho após remover uma caneta:', cart.getItems());

// Deletar todos os itens de um tipo
cart.deleteItem('Livro');
console.log('Itens no carrinho após deletar os livros:', cart.getItems());
console.log('Total do carrinho:', cart.calculateTotal());
