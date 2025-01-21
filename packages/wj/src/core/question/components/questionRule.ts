import { VisiableRuleItemStructure, VisiableRuleTriggerStructure } from '@/core/dataStructures/rule';
import { Rule } from './rule';
import { Question } from '../questionTypes/question';
import { OptionLogicEnum } from '@/core/enums/rule';

/**
 * 题目规则提取，统一管理
 * 当前题目结构中，一个题目所关联的规则存储在其他题目中，处理规则时需要遍历题目列表，到其他题目中去找，消耗较大
 * 此类把题目相关的所有规则提取出来，以map形式呈现，且实时更新规则触发状态，使用时可将性能消耗降至最低
 * TODO:
 * 做题时，题目如有更新，则反馈事件，传递的数据包括：题目本身、答案
 * 事件逻辑如何设计？
 * {
 *     '题目1id': {
 *         visiable: {
 *             "题目1 id": {
 *                 "optionLogic": 'or',
 *                 "选项1 id": {
 *                     visiable: false,
 *                     trigger: false
 *                 }
 *             }
 *         },
 *         target: {
 *             "题目1 id": {
 *                 "选项1 id": {
 *                     trigger: false
 *                 }
 *             }
 *         },
 *         relate: {
 *             "题目1 id": {
 *                 "选项1 id": {
 *                     disabled: ['1', '2'],
 *                     trigger: false
 *                 }
 *             }
 *         }
 *     }
 * }
 * 
 * 继承Map key: 题目id  value: 和该题目相关的所有规则
 */
export class QuestionRule extends Map<string, QuestionRuleItem> {
    /**
     * 添加规则
     * @param question 题目实例，注意此题目是规则的触发源（即规则设置在哪个题目里），
     *      当前题目的规则影响其他题目，需要把其中的规则解析并反向表达出来，得到一个题目受哪些题目规则的影响
     * @returns 
     */
    public addRule(question: Question, answer?: any): void {
        if (!question.id) return;
        const ruleList: Rule[] = this.parseRule(question);
        for (const rule of ruleList) {
            const { optionId='', target='', relate=[], visiable=[] } = rule;
            if (!optionId) return;
            // 显隐规则
            for (const vRule of visiable) {
                // 找到影响的题目
                const ruleItem = this.ensureQuestionRuleItem(vRule.id);
                ruleItem.addVisiableRule(vRule, rule, question);
            }
        }
    }

    public updateRule(question: Question, answer: any): void {
        if (!question.id) return;
    }

    /**
     * 解析题目中的所有规则
     * @param question 题目
     * @returns 
     */
    public parseRule(question: Question): Rule[] {
        const optionList = Reflect.get<Question, string>(question, 'optionList');;
        if (!optionList?.length) return [];
        
        return optionList.map((v: any) => v.rules);
    }

    /**
     * 根据题目id查询对应的规则，如果不存在，则创建一个
     * @param questionId 题目id
     * @returns 
     */
    private ensureQuestionRuleItem(questionId: string): QuestionRuleItem {
        let questionRule = this.get(questionId);
        if (!questionRule) {
            questionRule = new QuestionRuleItem(questionId);
            this.set(questionId, questionRule);
        }
        return questionRule;
    }
}

/**
 * 和单个题目相关的所有规则
 * {
 *     visiable: {
 *         "题目1 id": {
 *             "optionLogic": 'or',
 *             "选项1 id": {
 *                  visiable: false,
 *                  trigger: false
 *              }
 *         }
 *     },
 *     target: {
 *         "题目1 id": {
 *             "选项1 id": {
 *                  trigger: false
 *              }
 *         }
 *     },
 *     relate: {
 *         "题目1 id": {
 *             "选项1 id": {
 *                  disabled: ['1', '2'],
 *                  trigger: false
 *              }
 *         }
 *     }
 * }
 */
export class QuestionRuleItem {
    /**
     * 和此题目相关的所有显隐规则
     */
    public visiable: QuestionVisiableRule = new QuestionVisiableRule();
    /**
     * 和此题目相关的所有选项关联规则
     */
    // public relate: string = '';
    /**
     * 和此题目相关的所有跳转规则
     */
    // public target: string = '';

    constructor(
        private questionId: string
    ){}

    public addVisiableRule(visiableRule: VisiableRuleItemStructure, rule: Rule, sourceQuestion: Question): void {
        if (visiableRule.id !== this.questionId) return;
        this.visiable.addRule(visiableRule, rule, sourceQuestion);
    }

    /**
     * 获取影响到此题目的所有题目id
     * @returns 
     */
    public getRelationQuestionIds(): Set<string> {
        const visiableIds: string[] = Array.from(this.visiable.keys());
        // TODO:
        const relateIds: string[] = [];
        const targetIds: string[] = [];
        return new Set([...visiableIds, ...relateIds, ...targetIds]);
    }
}

/**
 * 一个题目的所有显隐规则，可能来自多道题
 * {
 *     "题目1 id": {
 *         "optionLogic": 'or',
 *         "选项1 id": {
 *              visiable: false,
 *              trigger: false
 *          }
 *     }
 * }
 * 继承Map key: 题目id--即哪个题目上设置了显隐规则且影响到了此题目     value: 设置显隐规则的题目中，所有影响到此题目的显隐规则，因为多选题可能使用多个选项控制一道题的显隐
 */
export class QuestionVisiableRule extends Map<string, QuestionVisiableRuleItem> {
    public addRule(visiableRule: VisiableRuleItemStructure, rule: Rule, sourceQuestion: Question): void {
        let ruleItem = this.get(sourceQuestion.id);
        if (!ruleItem) {
            ruleItem = new QuestionVisiableRuleItem();
            ruleItem.optionLogic = rule.optionLogic;
            this.set(sourceQuestion.id, ruleItem);
        }

        ruleItem.optionLogic = rule.optionLogic;
        ruleItem.addOption(rule.optionId, visiableRule);
    }

    public isTrigger(): VisiableRuleTriggerStructure | false {
        // 只取触发的规则
        const rules = [];
        for (const ruleItem of this.values()) {
            const result = ruleItem.isTrigger();
            if (result) rules.push(result);
        }
        
        return QuestionVisiableRuleItem.getTriggerResult(rules);
    }
}

/**
 * 一个题目下，来自另一个题目的显隐规则，可能涉及到多个选项
 * {
 *     "optionLogic": 'or',
 *     "选项1 id": {
 *         visiable: false,
 *         trigger: false
 *     }
 * }
 * 继承Map，key: 设置了显隐规则的选项id  value: 规则详情，是否触发
 */
export class QuestionVisiableRuleItem extends Map<string, VisiableRuleTriggerStructure> {
    // 多个选项控制一道题时，规则触发逻辑，or: 或  and: 且
    public optionLogic: string = OptionLogicEnum.OR;
    public addOption(optionId: string, rule: VisiableRuleItemStructure): void {
        this.set(optionId, {
            visiable: rule.visiable,
            trigger: false
        });
    }

    public getOption(optionId: string): VisiableRuleTriggerStructure | undefined{
        return this.get(optionId);
    }

    /**
     * 规则是否触发
     * @returns 
     */
    public isTrigger(): VisiableRuleTriggerStructure | false {
        let rules = [...this.values()];
        if (!rules.length) return false;

        // 多个选项同时对一道题设置同一种逻辑，需要根据optionLogic字段来决定触发规则
        const isSameRule = rules.every(v => v.visiable === rules[0].visiable);
        // optionLogic为or时，交给下面的逻辑处理，有任何一条触发即可
        // 为and时，必须所有的都触发才可以
        if (isSameRule && this.optionLogic === OptionLogicEnum.AND) {
            const hasUnTriggered = rules.some(v => !v.trigger);
            if (hasUnTriggered) return false;
            return {
                trigger: true,
                visiable: rules[0].visiable
            }
        }

        return QuestionVisiableRuleItem.getTriggerResult(rules);
    }

    public static getTriggerResult(rules: VisiableRuleTriggerStructure[]): VisiableRuleTriggerStructure | false {
        // 忽略未触发的
        const ruleList = rules.filter(v => v.trigger);
        if (!ruleList.length) return false;
        // 是否有触发的显示规则、隐藏规则
        let hasShowRule = false, hasHideRule = false;
        for (const rule of ruleList) {
            if (rule.visiable) {
                hasShowRule = true;
            } else {
                hasHideRule = true;
            }
        }
        if (!hasShowRule && !hasHideRule) return false;
        return {
            trigger: true,
            // 显隐冲突时，以显示规则为准
            visiable: hasShowRule
        }
    }
}
