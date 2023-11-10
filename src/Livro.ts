
export class Livro {
    titulo: string;
    autor: string;
    anoPublicao: number;

    mostrarDetalhes():void {
        console.log(`O livro '${this.titulo}' escrito por '${this.autor} foi publicado no ano '${this.anoPublicao}'`);
    }
}