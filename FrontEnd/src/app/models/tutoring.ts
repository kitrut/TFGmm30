import { TutoringMessage } from './tutoring-message';
import { Auditable } from './util/auditable';

export class Tutoring implements Auditable {
    id: string;
    title: string;
    tutoringMessages: TutoringMessage[];

    createAt: Date;
    updateAt: Date;
}
