import { InputBorderStyleEnum, InputTypeEnum } from '../enums/richText';

// 富文本数据结构
export interface RichTextStructure {
    text?: string;
    html?: string;
    resourceList?: string[];
    isHtml?: boolean;
}

export interface InputSettingStructure {
    // 输入框类型，默认为文本类型
    type?: InputTypeEnum,
    // 样式：1-下划线；2-全边框，默认1-下划线
    style?: InputBorderStyleEnum,
    // 宽度
    width?: number,
    // 是否允许为空
    isNull?: boolean,
    // 最小值，适用于数字、整数、小数类型
    minValue?: number,
    // 最大值，适用于数字、整数、小数类型
    maxValue?: number,
    // 最大输入长度
    maxCharacter?: number,
    // 最少保留小数位，适用于小数类型
    minDecimalForFloat?: number,
    // 最多保留小数位，适用于整数、小数类型
    maxDecimalForFloat?: number,
    // 下拉选择列表
    selectList?: string[],
    // 下拉选项输入框原始内容，不同选项用换行分隔
    selectValueStr?: string
}