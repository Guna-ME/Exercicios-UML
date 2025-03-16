abstract class Publicacao {
    titulo: string;
    autor: string;
    descricao: string;

    constructor(titulo: string, autor: string, descricao: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.descricao = descricao;
    }

    abstract exibirResumo(): string;
}

class Artigo extends Publicacao{
    numeroDePalavras: number;

    constructor(titulo: string, autor: string, descricao: string, numeroDePalavras: number) {
        super (titulo, autor, descricao);
        this.numeroDePalavras = numeroDePalavras;
    }
    exibirResumo(): string {
        return `Artigo: "${this.titulo}" por ${this.autor}. ${this.descricao} - ${this.numeroDePalavras} palavras.`;
    }
}

class Video extends Publicacao{
    duracao: number;

    constructor(titulo: string, autor: string, descricao: string, duracao: number) {
        super (titulo, autor, descricao);
        this.duracao = duracao;
    }
    exibirResumo(): string {
        return `Artigo: "${this.titulo}" por ${this.autor}. ${this.descricao} - ${this.duracao} palavras.`;
    }
}

const artigo1 = new Artigo("Introdução ao TypeScript", "Maria Eduarda", "Um guia completo sobre TypeScript.", 1200);
const video1 = new Video("Aprenda JavaScript", "João Souza", "Curso introdutório de JavaScript.", 30);

console.log(artigo1.exibirResumo());
console.log(video1.exibirResumo());