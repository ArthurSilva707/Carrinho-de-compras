# Carrinho-de-compras

Este é um projeto de aprendizado para criar um carrinho de compras simples baseado no carrinho de compras da Amazon. O projeto é escrito em Node.js e demonstra como adicionar, remover e calcular o total de itens em um carrinho de compras.

## Estrutura do Projeto

```
backend/
|-------- src/
|           |-------- index.js
|           |-------- services/   
|                           |-------- item.js   
|                           |-------- cart.js
|-------- package.json
```

### Descrição dos Arquivos

- **src/index.js**: Arquivo principal que executa e testa as funcionalidades do carrinho de compras.
- **src/services/item.js**: Definição da classe `Item`, que representa um item no carrinho.
- **src/services/cart.js**: Definição da classe `Cart`, que gerencia os itens no carrinho e fornece métodos para manipulação dos itens e cálculo do total.
- **package.json**: Configurações do projeto e scripts para execução.

## Funcionalidades

- **Adicionar item ao carrinho**: Adiciona um item ao carrinho. Se o item já existir, aumenta a quantidade.
- **Remover item do carrinho**: Remove uma unidade de um item do carrinho. Se a quantidade for 1, remove o item completamente.
- **Deletar item do carrinho**: Remove completamente um item do carrinho, independentemente da quantidade.
- **Calcular total do carrinho**: Calcula o total dos preços dos itens no carrinho, considerando suas quantidades.

## Instalação

1. Clone o repositório para o seu ambiente local:
    ```sh
    git clone https://github.com/ArthurSilva707/Carrinho-de-compras.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd carrinho-de-compras
    ```

3. Instale as dependências (se houver):
    ```sh
    npm install
    ```

## Uso

Para executar o projeto, utilize o comando:

```sh
npm start
```

### Exemplo de Uso

```javascript
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
```

## Estrutura das Classes

### Item

A classe `Item` representa um item no carrinho de compras.

```javascript
class Item {
    constructor(name, price, quantity = 1) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getSubtotal() {
        return this.price * this.quantity;
    }
}

module.exports = Item;
```

### Cart

A classe `Cart` gerencia os itens no carrinho de compras.

```javascript
const Item = require('./item');

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity = 1) {
        const existingItemIndex = this.items.findIndex(item => item.name === name);
        if (existingItemIndex > -1) {
            this.items[existingItemIndex].quantity += quantity;
        } else {
            const newItem = new Item(name, price, quantity);
            this.items.push(newItem);
        }
    }

    deleteItem(name) {
        this.items = this.items.filter(item => item.name !== name);
    }

    removeOneItem(name) {
        const itemIndex = this.items.findIndex(item => item.name === name);
        if (itemIndex > -1) {
            if (this.items[itemIndex].quantity > 1) {
                this.items[itemIndex].quantity -= 1;
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
```

## Contribuição

Se você deseja contribuir com este projeto, por favor, siga os passos abaixo:

1. Fork o repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`).
3. Faça as modificações desejadas e commit (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o repositório original (`git push origin feature/nova-funcionalidade`).
5. Crie um novo Pull Request.

## Licença

Este projeto é licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
