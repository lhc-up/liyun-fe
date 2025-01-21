import { RelateRuleItemStructure, RuleStructure, VisiableRuleItemStructure } from '@/core/dataStructures/rule';
import { OptionLogicEnum } from '@/core/enums/rule';

/**
 * 题目规则
 * 
 * visiable: 显隐规则
 *      选中某个选项后，可设置某些题目显示或隐藏
 *      visiable[n].visiable为true时，选中选项后设置目标题目为显示状态，目标题目初始状态为隐藏
 *      visiable[n].visiable为false时，选中选项后设置目标题目为隐藏状态，目标题目初始状态为显示
 *      单选、多选、单选表格题支持此规则
 * 
 * target: 跳转规则
 *      选中某个选项后，跳转至目标题目，中间的题目都隐藏，优先级高于显隐规则
 *      目前仅单选题可以设置此规则
 * 
 * relate: 选项关联规则
 *      选中某个选项时，可设置本题之后的其他选择题的某些选项不可选
 *      目前仅单选题可以设置此规则
 * 
 * "rules": {
 *      "visiable": [
 *          {
 *              "id": "2ecd56b3-485c-4245-b67d-78567129e0bd",
 *              "visiable": true
 *          }
 *      ],
 *      "target": "2ecd56b3-485c-4245-b67d-78567129e0bd",
 *      "relate": [
 *           {
 *               "id": "2ecd56b3-485c-4245-b67d-78567129e0bd",
 *               "disabled": [
 *                   "2f43f94c-efa8-4bb7-9c09-b5f9900805bf"
 *               ]
 *           }
 *       ]
 * }
 */
export class Rule {
    /**
     * 多个选项触发同一题显隐逻辑时的逻辑关系，默认为“或”关系
     * 具体值存储在具体的题目中，在初始化题目的时候重置此值
     */
    public optionLogic: OptionLogicEnum = OptionLogicEnum.OR;
    /**
     * 规则所在的选项id
     */
    public optionId: string;
    visiable: VisiableRuleItemStructure[];
    relate: RelateRuleItemStructure[];
    target: string;
    constructor(props: RuleStructure) {
        this.optionId = props?.optionId ?? '';
        this.visiable = props?.visiable ?? [];
        this.relate = props?.relate ?? [];
        this.target = props?.target ?? '';
    }

    /**
     * 当前规则关联到的所有题目
     */
    get involvedQuestionIds() {
        const visiableIds = this.visiable.map(v => v.id);
        const relateIds = this.relate.map(v => v.id);
        const ids = [...visiableIds, ...relateIds];
        if (this.target) {
            ids.push(this.target);
        }
        return new Set(ids);
    }

    /**
     * 规则是否关联到某题
     * @param questionId 题目id
     * @returns 
     */
    public isInvolved(questionId: string): boolean {
        return this.involvedQuestionIds.has(questionId);
    }
}