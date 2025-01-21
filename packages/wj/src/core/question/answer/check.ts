import { Answer } from './answer';
import { BlankAnswer } from './blank';

/**
 * {
 *    "questionId": "0c45536a-8774-44fe-8c3a-ee8e529a4583",
 *    "options": ["fsdfsdfsd123"],
 *    "blanks": {
 *        "填空1 id": "填空1答案"
 *    },
 *    "optionBlankMap": {
 *        "选项1 id": ["填空1 id", "填空2 id"]
 *    }
 * }
 */
export class CheckAnswer extends Answer {
    public options: Set<string> = new Set();
    public blanks: BlankAnswer;
    // 选项id和填空id的映射关系
    public optionBlankMap: Map<string, Set<string>> = new Map();
    constructor(questionId: string) {
        super(questionId);
        this.blanks = new BlankAnswer(questionId);
    }

    public updateOptions(optionIds: string[]): void {
        this.options = new Set(optionIds);
    }

    public updateBlanks(blankId: string, blankValue: string | number): void {
        this.blanks.update(blankId, blankValue);
    }

    public updateOptionBlankMap(optionId: string, blankIds: Set<string>): void {
        this.optionBlankMap.set(optionId, new Set(blankIds));
    }
}