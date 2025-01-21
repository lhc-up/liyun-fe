import { CheckStructure } from '@/core/dataStructures/question';
import { Question } from './question';
import { QuestionTypeEnum } from '../../enums/question';
import { CheckOption } from '../components/option';
import { CheckOptionStructure } from '@/core/dataStructures/option';
import { OptionLogicEnum } from '@/core/enums/rule';
import { CheckAnswer } from '../answer/check';

export class Check extends Question {
    private readonly type: QuestionTypeEnum = QuestionTypeEnum.Check;
    public showColNum: number;
    public optionList: CheckOption[];
    public isShowOtherOption: boolean;
    public otherOptionData?: CheckOption;
    public isMutualRule: boolean;
    public maximumCheck: number;
    public minimumCheck: number;
    public optionLogic: OptionLogicEnum;
    public answer: CheckAnswer;
    constructor(props: CheckStructure) {
        super(props);
        // 答案
        this.answer = new CheckAnswer(this.id);

        // 每列显示几个选项
        this.showColNum = props.showColNum || 1;
        // 选项列表
        this.optionList = props.optionList.map((option: CheckOptionStructure) => {
            const o = new CheckOption(option);
            o.rules.optionLogic = props.optionLogic;
            this.answer.updateOptionBlankMap(o.id, o.inputIds);
            // 规则影响到的题目
            this.involvedQuestionIds = new Set([...this.involvedQuestionIds, ...o.rules.involvedQuestionIds]);
            return o;
        });
        // 是否显示“其他”选项
        this.isShowOtherOption = props.isShowOtherOption || false;
        // “其他”选项
        if (this.isShowOtherOption && props.otherOptionData) {
            const o = new CheckOption(props.otherOptionData);
            o.isOther = true;
            o.rules.optionLogic = props.optionLogic;
            this.otherOptionData = o;
            this.optionList.push(o);
            this.answer.updateOptionBlankMap(o.id, o.inputIds);
            // 规则影响到的题目
            this.involvedQuestionIds = new Set([...this.involvedQuestionIds, ...o.rules.involvedQuestionIds]);
        }
        this.isMutualRule = props.isMutualRule || false;
        this.maximumCheck = props.maximumCheck || this.optionList.length;
        this.minimumCheck = props.minimumCheck || 1;
        this.optionLogic = props.optionLogic;
    }
}