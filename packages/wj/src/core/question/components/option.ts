import { BaseOptionStructure, CheckOptionStructure, RadioOptionStructure, TableOptionStructure } from '@/core/dataStructures/option';
import { RichText } from './richText';
import { Rule } from './rule';

export class BaseOption extends RichText {
    id: string;
    select: boolean = false;

    constructor(props: BaseOptionStructure) {
        super(props);
        this.id = props.id;
    }
}

export class RadioOption extends BaseOption {
    isOther: boolean = false;
    rules: Rule;
    constructor(props: RadioOptionStructure) {
        super(props);
        this.rules = new Rule(props.rules);
        this.rules.optionId = this.id;
    }
}

export class CheckOption extends BaseOption {
    isOther: boolean = false;
    rules: Rule;
    constructor(props: CheckOptionStructure) {
        super(props);
        this.rules = new Rule(props.rules);
        this.rules.optionId = this.id;
    }
}

export class TableOption {
    id: string;
    colWidth: number;
    value: RichText;
    rules: Rule;
    select: boolean = false;
    constructor(props: TableOptionStructure) {
        this.id = props.id;
        this.colWidth = props.colWidth;
        this.value = new RichText(props.value);
        this.rules = new Rule(props.rules);
        this.rules.optionId = this.id;
    }
}