import { RadioStructure } from '@/core/dataStructures/question';
import { Question } from './question';
import { RadioOptionStructure } from '@/core/dataStructures/option';
import { QuestionTypeEnum } from '@/core/enums/question';
import { RadioOption } from '../components/option';
import { RadioAnswer } from '../answer/radio';
/**
 * 单选题
 */
export class Radio extends Question {
    private readonly type: QuestionTypeEnum = QuestionTypeEnum.Radio;
    public showColNum: number;
    public optionList: RadioOption[];
    public isShowOtherOption: boolean;
    public otherOptionData?: RadioOption;
    public answer: RadioAnswer;
    constructor(props: RadioStructure) {
        super(props);
        // 答案
        this.answer = new RadioAnswer(this.id);

        // 每列显示几个选项
        this.showColNum = props.showColNum || 1;
        // 选项列表
        this.optionList = props.optionList.map((option: RadioOptionStructure) => {
            const o = new RadioOption(option);
            this.answer.updateOptionBlankMap(o.id, o.inputIds);
            // 规则影响到的题目
            this.involvedQuestionIds = new Set([...this.involvedQuestionIds, ...o.rules.involvedQuestionIds]);
            return o;
        });
        // 是否显示“其他”选项
        this.isShowOtherOption = props.isShowOtherOption || false;
        // “其他”选项
        if (this.isShowOtherOption && props.otherOptionData) {
            const o = new RadioOption(props.otherOptionData);
            o.isOther = true;
            this.otherOptionData = o;
            this.optionList.push(o);
            this.answer.updateOptionBlankMap(o.id, o.inputIds);
            // 规则影响到的题目
            this.involvedQuestionIds = new Set([...this.involvedQuestionIds, ...o.rules.involvedQuestionIds]);
        }
    }

    /**
     * 选中/取消选中选项
     * @param option 选项实例
     */
    public triggerOption(option: RadioOption): void {
        this.optionList.forEach(o => {
            if (o.id !== option.id) {
                o.select = false;
                return;
            }
            o.select = !o.select;
            this.answer.updateOptions(o.select ? o.id : '');
        });
        this.emitChange();
    }

    /**
     * 更新填空
     * @param inputId 输入框id
     * @param value 输入内容
     */
    public updateBlank(inputId: string, value: string | number): void {
        this.answer.updateBlanks(inputId, value);
    }
}