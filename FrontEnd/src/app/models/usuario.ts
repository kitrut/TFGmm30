import { Asignatura } from './asignatura';

export class Usuario {
    id: string;
    nombre: string;
    apellidos: string;
    email: string;
}

export class Profesor extends Usuario {
    asignaturas: Asignatura[];
}
