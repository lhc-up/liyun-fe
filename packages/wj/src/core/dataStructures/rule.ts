export interface VisiableRuleItemStructure {
    /**
     * 题目id
     */
    id: string;

    /**
     * true为显示逻辑，false为隐藏逻辑
     */
    visiable: boolean;
}

export interface RelateRuleItemStructure {
    /**
     * 题目id
     */
    id: string;

    /**
     * 禁用的选项id
     */
    disabled: Set<string>;
}

export interface RuleStructure {
    /**
     * 规则所在的选项id
     */
    optionId: string;
    /**
     * 显隐规则
     */
    visiable: VisiableRuleItemStructure[];

    /**
     * 跳转规则
     */
    target: string;

    /**
     * 选项关联规则
     */
    relate: RelateRuleItemStructure[];
}

export interface TriggerAble {
    trigger: boolean;
}

export interface VisiableRuleTriggerStructure extends TriggerAble {
    visiable: boolean;
}

export interface TargetRuleTirggerStructure extends TriggerAble {

}

export interface RelateRuleTriggerStructure extends TriggerAble {
    disabled: Set<string>;
}