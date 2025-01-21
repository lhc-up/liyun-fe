import { RichTextStructure } from './richText';
import { RuleStructure } from './rule';

// 选项公共数据
export interface BaseOptionStructure extends RichTextStructure {
    id: string;
}

// 单选题选项
export interface RadioOptionStructure extends BaseOptionStructure {
    rules: RuleStructure;
}

// 多选题选项
export interface CheckOptionStructure extends BaseOptionStructure {
    rules: RuleStructure;
}

// 表格体选项
export interface TableOptionStructure {
    id :string;
    colWidth: number;
    value: RichTextStructure;
    rules: RuleStructure;
}