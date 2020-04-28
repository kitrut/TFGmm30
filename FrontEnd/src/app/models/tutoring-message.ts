import { Auditable } from './util/auditable';

export class TutoringMessage implements Auditable {
    id: string;
    message: string;
    fromConnectedUser: boolean;
    createAt: Date;
    updateAt: Date;
}
