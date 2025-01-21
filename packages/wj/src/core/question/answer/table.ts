import { Answer } from './answer';
import { BlankAnswer } from './blank';

/**
 * {
 *     "questionId": "0c45536a-8774-44fe-8c3a-ee8e529a4583",
 *     "titleAnswer": {
 *         "填空1 id": "填空1答案"
 *     },
 *     "dataAnswer": {
 *         "分组序号 0": {
 *             "分组问题序号 0": ["选项id 1", "选项id 2"]
 *         }
 *     }
 * }
 */
export class TableAnswer extends Answer {
    public titleAnswer: BlankAnswer;
    // 出题时没有设置分组id，这里使用分组的序号作为key，value为该分组的答案
    public dataAnswer: Map<number, TableGroupAnswer> = new Map();
    constructor(questionId: string) {
        super(questionId);
        this.titleAnswer = new BlankAnswer(questionId);
    }
}


/**
 * 单个分组答案
 * 出题时，分组中的题目没有设置id，这里使用题目的序号作为key，value为该题的答案
 * 单选和多选统一使用集合，集合中的元素为所选选项的id
 */
export class TableGroupAnswer extends Map<number, Set<string>> {
    public updateAnswer(index: number, optionIds: string[]) {
        // 直接覆盖原来的答案
        this.set(index, new Set(optionIds));
    }
}