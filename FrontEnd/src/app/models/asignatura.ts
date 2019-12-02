import { Usuario } from './usuario';
import { Materiales } from './materiales';

export class Asignatura {
    id: number;
    nombre: string;
    descripcion: string;
    curso: string;
    profesor: Usuario;
    materiales: Materiales[];
    matriculas: any[];

    constructor() {
        this.id = null;
        this.nombre = null;
        this.nombre = null;
        this.descripcion = null;
        this.curso = null;
        this.profesor = new Usuario();
    }
}
