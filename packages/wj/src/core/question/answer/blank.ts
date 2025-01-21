import { Answer } from './answer';

/**
 * {
 *     "questionId": "0c45536a-8774-44fe-8c3a-ee8e529a4583",
 *     "填空1 id": "填空1答案"
 * }
 */
export class BlankAnswer extends Answer {
    private answerMap: Map<string, string | number> = new Map();
    public get(inputId: string): string | number {
        return this.answerMap.get(inputId) ?? '';
    }
    public update(inputId: string, value: string | number) {
        this.answerMap.set(inputId, value);
    }
}