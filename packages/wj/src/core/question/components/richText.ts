import { parseDocument, DomUtils } from 'htmlparser2';
import render from 'dom-serializer';
import { Document, Element } from 'domhandler';
import { Config } from '../../config';
import { InputSettingStructure, RichTextStructure } from '../../dataStructures/richText';
import { InputBorderStyleEnum, InputTypeEnum } from '@/core/enums/richText';
import { uuid } from '@/utils';

export class InputSettings {
    type: InputTypeEnum;
    style: InputBorderStyleEnum;
    width: number;
    isNull?: boolean;
    minValue?: number;
    maxValue?: number;
    maxCharacter: number;
    minDecimalForFloat?: number;
    maxDecimalForFloat?: number;
    selectList?: string[];
    selectValueStr?: string;
    constructor(options?: InputSettingStructure) {
        this.type = options?.type ?? InputTypeEnum.TEXT;
        this.style = options?.style ?? InputBorderStyleEnum.UNDERLINE;
        this.width = options?.width ?? Config.inputWidth;
        this.isNull = options?.isNull;
        this.minValue = options?.minValue;
        this.maxValue = options?.maxValue;
        this.maxCharacter = options?.maxCharacter ?? Config.inputMaxCharacter;
        this.minDecimalForFloat = options?.minDecimalForFloat;
        this.maxDecimalForFloat = options?.maxDecimalForFloat;
        this.selectList = options?.selectList;
        this.selectValueStr = options?.selectValueStr;
    }
}

export class Input {
    public el: Element | null;
    public id: string;
    constructor(input: string | Element) {
        if (typeof input === 'string') {
            const doc = parseDocument(input);
            this.el = DomUtils.findOne(el => {
                const clazz = el.attribs.class;
                return !!clazz && clazz.includes(Config.inputClassName)
            }, doc.children);
        } else {
            this.el = input;
        }
        this.el = this.parse();
        this.id = this?.el?.attribs?.inputid ?? uuid();
    }

    public render(): string {
        if (!this.el) return '';
        return render(this.el, {
            // 是否对HTML中的保留字进行编码处理，例如&nbsp;会被编码成&#xa0;
            encodeEntities: false
        });
    }

    private parse(): Element | null {
        if (!this.el) return null;
        return this.parseTextInput(this.el);
    }

    /**
     * 把具有Config.inputClassName类名的div元素，替换为input元素
     * @param el Element 
     * @returns 
     */
    private parseTextInput(el: Element): Element {
        const attribs = el.attribs;
        const settings = this.getInputSettings(attribs.data);

        const options = {
            type: 'text',
            class: attribs.class || '',
            inputid: attribs.inputid ?? uuid(),
            autocomplete: 'new-password',
            data: attribs.data || '',
            maxlength: settings.maxCharacter.toString(),
            style: `width: ${settings.width}px`
        }
        if (settings.type == InputTypeEnum.SELECT) {
            options.type = 'button';
        }
        if (settings.style == InputBorderStyleEnum.ALLBORDER) {
            options.class += ' allBorder';
        } else {
            options.class += ' underline';
        }
        const input = new Element('input', options);
        return input;
    }

    private getInputSettings(settingStr: string): InputSettings {
        try {
            const o = JSON.parse(settingStr);
            return new InputSettings(o);
        } catch(e) {
            return new InputSettings();
        }
    }
}

export class RichText {
    text: string;
    html: string;
    resourceList: string[];
    isHtml: boolean;
    inputIds: Set<string> = new Set();
    constructor(props: RichTextStructure) {
        props = props ?? {};
        this.text = props.text ?? '';
        this.html = props.html ?? '';
        this.resourceList = props.resourceList ?? [];
        this.isHtml = props.isHtml ?? false;

        this.parse();
    }

    public parse(): void {
        if (!this.isHtml || !this.html) return;
        const doc = parseDocument(this.html);
        // 处理资源
        // 处理填空
        this.parseInput(doc);
    }

    private parseInput(doc: Document): void {
        const inputList: Element[] = DomUtils.findAll(el => {
            const clazz = el.attribs.class;
            return !!clazz && clazz.includes(Config.inputClassName);
        }, doc.childNodes);
        
        for (const el of inputList) {
            const input = new Input(el);
            if (input.el) {
                DomUtils.replaceElement(el, input.el);
                this.inputIds.add(input.id);
            }
        }
        this.html = render(doc, {
            // 是否对HTML中的保留字进行编码处理，例如&nbsp;会被编码成&#xa0;
            encodeEntities: false
        });
    }

    
    private parseResource(doc: Document): void {
        // 把image的src都去掉
        // 音视频的占位图片由css来处理，作答端、管理端引入不同的css
        // 解析image属性
        // const imageList = 
    }
}
