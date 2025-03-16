class Item {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

}

abstract class Pedidos {
    numero: number;
    itens: Item[];

    constructor(numero: number, itens: Item[]) {
        this.numero = numero;
        this.itens = itens;
    }

    abstract calcularTotal(): number;
}

class PedidoDelivery extends Pedidos {
    taxaEntrega: number;

    constructor(numero: number, itens: Item[], taxaEntrega: number) {
        super (numero, itens);
        this.taxaEntrega = taxaEntrega;
    }
    calcularTotal(): number {
        return this.itens.reduce((total, item) => total + item.preco, 0) + this.taxaEntrega;
    }
}

const item1 = new Item("Pizza", 40);
const item2 = new Item("Refrigerante", 10);
const item3 = new Item("Hambúrguer", 25);

const pedido1 = new PedidoDelivery(2, [item1, item3], 5);

console.log(`Total do Pedido Delivery #${pedido1.numero}: R$${pedido1.calcularTotal()}`);