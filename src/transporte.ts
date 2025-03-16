abstract class Veiculo {
    modelo: string;
    capacidade: number;

    constructor(modelo: string, capacidade: number) {
        this.modelo = modelo;
        this.capacidade = capacidade;
    }

    abstract calcularConsumo(distancia: number): number;
}

class Onibus extends Veiculo{
    consumoPorKm: number;

    constructor(modelo: string, capacidade: number, consumoPorKm: number) {
        super(modelo, capacidade);
        this.consumoPorKm = consumoPorKm;
    }

    calcularConsumo(distancia: number): number {
        return distancia * this.consumoPorKm;
    }
}

class Taxi extends Veiculo{
    taxaPorPassageiro: number;

    constructor(modelo: string, capacidade: number, taxaPorPassageiro: number) {
        super(modelo, capacidade);
        this.taxaPorPassageiro = taxaPorPassageiro;
    }

    calcularConsumo(distancia: number): number {
        return distancia * this.taxaPorPassageiro * this.capacidade;
    }
}

const onibus = new Onibus("Mercedes-Benz", 50, 2.5);
const taxi = new Taxi("Toyota Corolla", 4, 1.2);

console.log(`${onibus.modelo} consome: ${onibus.calcularConsumo(100)} litros em 100km`);
console.log(`${taxi.modelo} consome: ${taxi.calcularConsumo(100)} litros em 100km`);