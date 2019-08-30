import { Usuario } from './usuario';

export class Asignatura {
    id: number;
    nombre: string;
    descripcion: string;
    curso: string;
    profesor:Usuario;

    constructor(){
        this.id=null;
        this.nombre=null;
        this.nombre=null;
        this.descripcion=null;
        this.curso = null;
        this.profesor = new Usuario();
    }
}
