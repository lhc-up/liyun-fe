export enum QuestionTypeEnum {

    /**
     * 单选题
     */
    Radio = 1,

    /**
     * 多选题
     */
    Check = 2,

    /**
     * 表格题
     */
    Table = 3,

    /**
     * 填空题
     */
    Blank = 4,

    /**
     * 简答题
     */
    Answer = 5,

    /**
     * 排序题
     */
    Rank = 6,

    /**
     * 量表题
     */
    Inventory = 7,

    /**
     * 段落说明
     */
    Paragraph = 8,

    /**
     * 组合题
     */
    Combination = 9,

    /**
     * 题目组
     */
    QuestionGroup = 10,

    /**
     * 录音题
     */
    Record = 11
    
}

export const QuestionNameMap = {
    [QuestionTypeEnum.Radio]: '单选题',
    [QuestionTypeEnum.Check]: '多选题',
    [QuestionTypeEnum.Table]: '表格题',
    [QuestionTypeEnum.Blank]: '填空题',
    [QuestionTypeEnum.Answer]: '简答题',
    [QuestionTypeEnum.Rank]: '排序题',
    [QuestionTypeEnum.Inventory]: '量表题',
    [QuestionTypeEnum.Paragraph]: '段落说明',
    [QuestionTypeEnum.Combination]: '组合题',
    [QuestionTypeEnum.QuestionGroup]: '题目组',
    [QuestionTypeEnum.Record]: '录音题',
}