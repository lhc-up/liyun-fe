import { TableColWidthStructure, TableGroupStructure, TableGroupOptionStructure, TableStructure } from '@/core/dataStructures/question';
import { Question } from './question';
import { TableOption } from '../components/option';
import { TableOptionStructure } from '@/core/dataStructures/option';
import { RichText } from '../components/richText';
import { QuestionTypeEnum } from '@/core/enums/question';
import { TableAnswer } from '../answer/table';

export class Table extends Question {
    private readonly type: QuestionTypeEnum = QuestionTypeEnum.Table;
    public colWidth: TableColWidthStructure;
    public groupList: TableGroup[];
    public isShowTitle: boolean;
    public maximumCheck: number;
    public minimumCheck: number;
    public optionList: TableOption[];
    public answer: TableAnswer;
    constructor(props: TableStructure) {
        super(props);
        this.colWidth = props.colWidth;
        this.groupList = props.groupList.map((group: TableGroupStructure) => {
            return new TableGroup(group);
        });
        this.isShowTitle = props.isShowTitle;
        this.maximumCheck = props.maximumCheck;
        this.minimumCheck = props.minimumCheck;
        this.optionList = props.optionList.map((option: TableOptionStructure) => {
            return new TableOption(option);
        });

        // 答案
        this.answer = new TableAnswer(this.id);
    }
}

export class TableGroup {
    title: RichText;
    optionList: TableGroupOption[] = [];
    constructor(props: TableGroupStructure) {
        this.title = new RichText(props.title);
        this.optionList = props.optionList.map((option: TableGroupOptionStructure) => {
            return new TableGroupOption(option);
        });
    }
}

export class TableGroupOption {
    value: RichText;
    answer: string;
    constructor(props: TableGroupOptionStructure) {
        this.value = new RichText(props.value);
        this.answer = props.answer;
    }
}