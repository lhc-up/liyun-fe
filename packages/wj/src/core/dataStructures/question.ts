import { QuestionTypeEnum } from '../enums/question';
import { OptionLogicEnum } from '../enums/rule';
import { CheckOptionStructure, RadioOptionStructure, TableOptionStructure } from './option';
import { RichTextStructure } from './richText';

/**
 * 卷
 */
export interface PaperStructure {
    id: string;
    code: string;
    name: string;
    guideLanguage: string;
    profile: string;
    paperType: string;
    phase: string;
    role: string;
    subject: string;
    state: string;
    answerMethod: string;
    paperJson: string;
    resourceJson: string;
}

/**
 * 页
 */
export interface PageStructure {
    page: number;
    pageId: string;
    questionList: QuestionStructure[];
}

/**
 * 题目基础数据数据结构
 */
export interface QuestionStructure {
    id: string;
    type: QuestionTypeEnum;
    index: number;
    title: RichTextStructure;
    version: string;
    updateVersion: string;
    tips: RichTextStructure;
    isMustAnswer: boolean;
    isChildQuestion: boolean;
    parentId: string;
    isAssist: boolean;
    canDrag: boolean;
    insertParentType: QuestionTypeEnum;
}

// 单选题数据结构
export interface RadioStructure extends QuestionStructure {
    showColNum: number;
    isShowOtherOption: boolean;
    optionList: RadioOptionStructure[];
    otherOptionData?: RadioOptionStructure;
}

// 多选题
export interface CheckStructure extends QuestionStructure {
    showColNum: number;
    isShowOtherOption: boolean;
    optionList: CheckOptionStructure[];
    otherOptionData?: CheckOptionStructure;
    isMutualRule: boolean;
    maximumCheck: number;
    minimumCheck: number;
    optionLogic: OptionLogicEnum;
}

// 表格题
export interface TableStructure extends QuestionStructure {
    colWidth: TableColWidthStructure;
    groupList: TableGroupStructure[];
    isShowTitle: boolean;
    maximumCheck: number;
    minimumCheck: number;
    optionList: TableOptionStructure[];
}

export interface TableColWidthStructure {
    groupTitle: string;
    optionTotal: string;
    question: string;
}

export interface TableGroupStructure {
    title: RichTextStructure;
    optionList: TableGroupOptionStructure[];
}

export interface TableGroupOptionStructure {
    value: RichTextStructure;
    answer: string;
}