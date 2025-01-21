import { PageStructure, QuestionStructure } from '../dataStructures/question';
import { Duplex } from '../watcher';
import { Answer } from './answer/answer';
import { QuestionRule, QuestionRuleItem } from './components/questionRule';
import { Question } from './questionTypes/question';
import { QuestionFactory } from './questionTypes/questionFactory';

export class Page extends Duplex {
    public page: number;
    public pageId: string;
    private questionMap: Map<string, Question> = new Map();
    private answerMap: Map<string, Answer> = new Map();
    /**
     * 题目和题目相关的所有规则的映射
     * 规则存储在各个题目的选项中
     * 旧版本逻辑是，题目A变化后，广播通知关联到的题目，被关联到的题目再广播事件去查找所有和自身相关的规则
     * 这里直接在初始化的时候把规则提取出来(并标记是否触发)，省去了查找过程，要获取一个题目相关的所有规则，通过ruleMap查找即可
     * 
     * 规则更新时，从上往下更新，事件也是从上往下注册，因为下面的题目影响不了上面的题目
     */
    questionRule: QuestionRule = new QuestionRule();
    constructor(props: PageStructure) {
        super();
        this.page = props.page;
        this.pageId = props.pageId;
        props.questionList.forEach(o => {
            const question = this.addQuestion(o);
            if (!question.id) return;
            question.pageId = this.pageId;
            this.questionRule.addRule(question);
        });
        console.log('questionRule', this.questionRule);
        // 初始化事件，以Page为单位注册事件，题目变化后触发该事件，在Page中统一处理各种规则
        this.subscribe(this.pageId, this.onQuestionChange);
    }

    private onQuestionChange(question: Question): void {
        // TODO: 题目更新时，更新规则触发状态
        console.log('onQuestionChange', question);
        const involvedQuestionIds = question.involvedQuestionIds;
        // 通知关联到的题目进行更新
        for (const id of involvedQuestionIds) {
            this.updateQuestion(id);
        }
        // TODO: 更新进度等
    }

    // 更新题目状态
    private updateQuestion(questionId: string): void {
        const question = this.questionMap.get(questionId);
        if (!question) return;

        // 影响到此题的所有规则
        const rule = this.questionRule.get(questionId);
        if (!rule) return;

        // 更新题目显隐状态
        question.visiable = this.getQuestionVisiable(question, rule);;
        question.update();
    }

    /**
     * 获取题目的显隐状态
     * @param question 题目
     * @param rule 和此题相关的所有规则
     * @returns 题目最终的显隐状态，true：显示，false：隐藏
     */
    private getQuestionVisiable(question: Question, rule: QuestionRuleItem): boolean {
        // 跳转规则为第一优先级，其余情况如果同时存在显示和隐藏逻辑，以显示逻辑为准
        // 如不匹配下面任何一个分支，则该题目显示初始默认值
        // 是否触发跳转规则（前面的题目设置了跳转，触发之后把本题跳过）
        // const hasTargetRule = showData.some(v => v.visiableRule.type === 'target');
        const triggerTargetRule = Math.random() > 0.5;
        // 触发跳转规则之后跳过（隐藏）本题
        if (triggerTargetRule) return false;

        // 显隐规则
        // 显隐规则同时存在时，以显示规则为准
        const triggerVisiableRule = rule.visiable.isTrigger();
        if (triggerVisiableRule && triggerVisiableRule.trigger) {
            return triggerVisiableRule.visiable;
        }

        // 未触发规则，还原初始状态
        return question.originVisiable;
    }

    public addQuestion(question: Question | QuestionStructure) {
        const o = question instanceof Question ? question : QuestionFactory.create(question);
        this.questionMap.set(question.id, o);
        return o;
    }

    public get questionList(): Question[] {
        return Array.from(this.questionMap.values());
    }
}