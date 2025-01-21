export class Config {
    /**
     * 当前平台，web、mp（微信小程序）
     */
    static readonly platform: string = 'web';
    /**
     * 当前版本
     */
    static readonly version: string = '0.0.0';

    /**
     * 所有题目默认必填
     */
    static readonly isMustAnswer: boolean = true;

    /**
     * 填空输入框类名
     */
    static readonly inputClassName: string = 'inputFrameBoxElement';

    /**
     * 填空输入框默认宽度
     */
    static readonly inputWidth: number = 120;

    /**
     * 填空输入框默认输入最大字符数
     */
    static readonly inputMaxCharacter: number = 10;
}
