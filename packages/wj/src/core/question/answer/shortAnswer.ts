import { Answer } from './answer';
import { BlankAnswer } from './blank';

/**
 * {
 *     "questionId": "0c45536a-8774-44fe-8c3a-ee8e529a4583",
 *     "titleAnswer": {
 *         "填空1 id": "填空1答案"
 *     },
 *     "dataAnswer": "简答题输入框中的答案",
 *     "checkForPaperPen": false
 * }
 */
export class ShortAnswer extends Answer {
    public titleAnswer: BlankAnswer;
    public dataAnswer: string = '';
    public checkForPaperPen: boolean = false;
    constructor(questionId: string) {
        super(questionId);
        this.titleAnswer = new BlankAnswer(questionId);
    }
}