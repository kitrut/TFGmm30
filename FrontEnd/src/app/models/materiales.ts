export class Materiales {
    id: number;
    titulo: string;
    contenido: string;
    orden: number;
    constructor(id, titulo, contenido) {
        this.id = id;
        this.titulo = titulo;
        this.contenido = contenido;
    }
}
