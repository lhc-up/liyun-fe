import { Question } from './question';
import { QuestionTypeEnum } from '@/core/enums/question';
import { Radio } from './radio';
import { Check } from './check';
import { Table } from './table';

const ClazzMap: any = {
    [QuestionTypeEnum.Radio]: Radio,
    [QuestionTypeEnum.Check]: Check,
    [QuestionTypeEnum.Table]: Table,

    // [QuestionTypeEnum.Answer]: Radio,
    // [QuestionTypeEnum.Blank]: Radio,
    // [QuestionTypeEnum.Combination]: Radio,
    // [QuestionTypeEnum.Inventory]: Radio,
    // [QuestionTypeEnum.Paragraph]: Radio,
    // [QuestionTypeEnum.QuestionGroup]: Radio,
    // [QuestionTypeEnum.Rank]: Radio,
    // [QuestionTypeEnum.Record]: Radio
}

export class QuestionFactory {
    public static create(props: any): Question {
        const clazz = ClazzMap[props.type];
        // if (!clazz) throw new Error('题目类型不存在');
        if (!clazz) return {} as Question;
        return new clazz(props);
    }
}