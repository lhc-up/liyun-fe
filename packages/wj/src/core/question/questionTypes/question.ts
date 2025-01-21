import { Config } from '../../config';
import { uuid, isDef } from '../../../utils/base';
import { Duplex } from '../../watcher/index';
import { QuestionTypeEnum } from '../../enums/question';
import { RichText } from '../components/richText';
import { QuestionStructure } from '../../dataStructures/question';

/**
 * 实例id
 */
let instanceUid = 0;

/**
 * @class
 * @classdesc 题目基类
 */
export abstract class Question extends Duplex {
    private _instanceId: number;
    pageId!: string;
    id: string;
    index: number;
    title: RichText;
    version: string
    updateVersion: string;
    tips: RichText;
    isMustAnswer: boolean;
    isChildQuestion: boolean;
    parentId: string;
    isAssist: boolean;
    canDrag: boolean;
    insertParentType: QuestionTypeEnum;
    // 题目中设置了规则时，影响到的题目id
    involvedQuestionIds: Set<string> = new Set();
    // 题目显示状态，true：显示，false：隐藏
    visiable: boolean = false;
    // 题目初始默认值，在初始化题目时得到，用于在规则未触发时，还原状态
    originVisiable: boolean = false;
    constructor(props: QuestionStructure) {
        super();
        this._instanceId = instanceUid++;
        this.id = props.id || uuid();
        this.index = props.index;
        this.title = new RichText(props.title);
        this.tips = new RichText(props.tips);
        this.isMustAnswer = isDef(props.isMustAnswer) ? props.isMustAnswer : Config.isMustAnswer;
        this.isChildQuestion = props.isChildQuestion || false;
        this.parentId = props.parentId;
        this.isAssist = props.isAssist || false;
        this.canDrag = props.canDrag || false;
        this.insertParentType = props.insertParentType;
        this.version = props.version || Config.version;
        // 更新版本始终保持最新
        this.updateVersion = Config.version;
    }

    /**
     * 能影响到此题目的题目发生了变化，可能会对当前题目的显隐、选项造成影响，此题目需要更新
     * 在Page中识别是否影响到了此题目，并调用
     */
    public update(): void {

    }

    /**
     * 反馈变化
     */
    public emitChange(): void {
        this.publish<Question>(this.pageId, this);
    }
}