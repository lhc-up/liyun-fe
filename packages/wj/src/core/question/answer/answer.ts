import { Duplex } from '@/core/watcher';

export abstract class Answer extends Duplex {
    constructor(
        public questionId: string
    ) {
        super();
    }
}