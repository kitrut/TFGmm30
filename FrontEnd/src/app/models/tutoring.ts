import { TutoringMessage } from './tutoring-message';
import { Auditable } from './util/auditable';
import {Asignatura} from '@models/asignatura';

export class Tutoring implements Auditable {
    id: string;
    title: string;
    tutoringMessages: TutoringMessage[];
    asignatura: Asignatura;

    createAt: Date;
    updateAt: Date;
}
