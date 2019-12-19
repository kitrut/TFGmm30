import { Usuario } from './usuario';
import { Materiales } from './materiales';
import { Section } from './section';

export class Asignatura {
    id: string;
    nombre: string;
    descripcion: string;
    curso: string;
    profesor: Usuario;
    materiales: Materiales[];
    matriculas: any[];
    sections: Section[];

    constructor() {
        this.id = null;
        this.nombre = null;
        this.nombre = null;
        this.descripcion = null;
        this.curso = null;
        this.profesor = new Usuario();
    }
}
