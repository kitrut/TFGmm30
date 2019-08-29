import { Asignatura } from './asignatura';

export class Usuario {
    id:number;
    nombre:string;
    apellidos:string;
    email:string;
}

export class Profesor extends Usuario{
    asignaturas:Asignatura[];
}
