/**
 * @class
 * @classdesc 订阅发布调度器，全局共享
 */
class Watcher {

    /**
     * 订阅事件
     */
    private static readonly subs: Map<string, Set<Function>> = new Map();

    /**
     * 添加订阅
     * 同一事件同一方法只能注册一次
     * @param type 事件类型
     * @param fn 回调函数
     */
    public static addSub(type: string, fn: Function): void {
        const subSet = this.subs.get(type) ?? new Set<Function>();
        if (!this.subs.has(type)) {
            this.subs.set(type, subSet);
        }
        if (!(fn instanceof Function)) {
            throw new Error(`fn必须为函数类型，当前值:${fn}不合法`);
        }
        subSet.add(fn);
        console.log('subs', this.subs);
    }

    /**
     * 通知更新
     * @param type 事件类型
     */
    public static notify<T>(type: string, data?: T): void {
        const subSet = this.subs.get(type);
        if (!subSet || subSet.size === 0) return;
        subSet.forEach(fn => fn(data));
    }
    
    /**
     * 移除订阅
     * @param type 事件类型
     * @param fn 回调函数
     */
    public static removeSub(type: string, fn: Function): void {
        const subSet = this.subs.get(type);
        if (subSet && subSet.size > 0) {
            subSet.delete(fn);
        }
    }

    /**
     * 清空某事件下的订阅
     * @param type 事件类型
     */
    public static clearEventSubs(type: string) {
        const subSet = this.subs.get(type);
        if (subSet instanceof Set && subSet.size) {
            subSet.clear();
        }
    }

    /**
     * 清空全部事件订阅
     */
    public static clearSubs() {
        this.subs.clear();
    }

}

/**
 * @class
 * @classdesc 订阅者
 */
export class Subscriber {

    /**
     * 订阅事件
     * @param type 事件类型
     * @param fn 回调函数
     */
    subscribe(type: string, fn: Function): void {
        Watcher.addSub(type, fn);
    }

}

/**
 * @class
 * @classdesc 发布者
 */
export class Publisher {

    /**
     * 发布事件
     * @param type 事件类型
     */
    publish<T>(type: string, data: T): void {
        Watcher.notify<T>(type, data);
    }

}

/**
 * @class
 * 订阅+发布
 */
export class Duplex {

    /**
     * 订阅事件
     * @param type 事件类型
     * @param fn 回调函数
     */
    subscribe(type: string, fn: Function): void {
        Watcher.addSub(type, fn);
    }

    /**
     * 发布事件
     * @param type 事件类型
     */
    publish<T>(type: string, data: T): void {
        Watcher.notify<T>(type, data);
    }

}