import { Usuario } from './usuario';
import { Materiales } from './materiales';
import { Section } from './section';
import { Matricula } from './matricula';

export class Asignatura {
    id: string;
    nombre: string;
    descripcion: string;
    curso: string;
    profesor: Usuario;
    materiales: Materiales[];
    matriculas: Matricula[];
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
