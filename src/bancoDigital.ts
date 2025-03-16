abstract class ContaBancaria {
    numero: string;
    saldo: number;

    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }

    abstract sacar(valor: number): void;
}

class ContaCorrente extends ContaBancaria {
    limiteChequeEspecial: number;

    constructor(numero: string, saldo: number, limiteChequeEspecial: number) {
        super(numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    sacar(valor: number): void {
        if (valor <= this.saldo + this.limiteChequeEspecial) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        } else {
            console.log("Saque negado! Valor excede o saldo e o limite do cheque especial.");
        }
    }
}

class ContaPoupanca extends ContaBancaria {
    taxaJuros: number;

    constructor(numero: string, saldo: number, taxaJuros: number) {
        super(numero, saldo);
        this.taxaJuros = taxaJuros;
    }

    sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        } else {
            console.log("Saque negado! Saldo insuficiente.");
        }
    }

    aplicarJuros(): void {
        const juros = this.saldo * (this.taxaJuros / 100);
        this.saldo += juros;
        console.log(`Juros de R$${juros.toFixed(2)} aplicados. Novo saldo: R$${this.saldo}`);
    }
}

const conta1 = new ContaCorrente("001", 1000, 500);
const conta2 = new ContaPoupanca("002", 2000, 1.5);

conta1.sacar(1300); 
conta1.depositar(500);
conta2.sacar(2500); 
conta2.aplicarJuros(); 
