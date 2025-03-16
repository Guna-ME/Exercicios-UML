abstract class Funcionario {
    nome: string;
    salario: number;
    cargo: string;

    constructor(nome: string, salario: number, cargo: string) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    abstract calcVenc(): number;
}

class Efetivo extends Funcionario {
    bonusAnual: number;

    constructor(nome: string, salario: number, cargo: string, bonusAnual: number) {
        super(nome, salario, cargo);
        this.bonusAnual = bonusAnual;
    }

    calcVenc(): number {
        return this.salario + this.bonusAnual;
    }
}

class Terceirizado extends Funcionario {
    custoProjeto: number;
    numProjetos: number;

    constructor(nome: string, salario: number, cargo: string, custoProjeto: number, numProjetos: number) {
        super(nome, salario, cargo);
        this.custoProjeto = custoProjeto;
        this.numProjetos = numProjetos;
    }

    calcVenc(): number {
        return this.salario + (this.custoProjeto * this.numProjetos);
    }
}

const funcionario1 = new Efetivo("Ana", 5000, "Desenvolvedora", 2000);
const funcionario2 = new Terceirizado("Carlos", 4000, "Analista", 500, 3);

console.log(`${funcionario1.nome} recebe: R$${funcionario1.calcVenc()}`);
console.log(`${funcionario2.nome} recebe: R$${funcionario2.calcVenc()}`);
