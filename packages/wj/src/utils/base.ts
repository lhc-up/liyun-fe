import { v4 as uuidv4 } from 'uuid';

export const uuid = () => uuidv4();

export const no = () => false;

export function noop() {}

export const emptyObject = Object.freeze({});

export function isTrue(v: any) {
    return v === true;
}

export function isFalse(v: any) {
    return v === false;
}

export function isDef(v: any) {
    return v !== undefined && v !== null;
}

export function isUndef(v: any) {
    return v === undefined || v === null;
}

export function isPrimitive(v: any) {
    return (
        typeof v === 'string' ||
        typeof v === 'number' ||
        typeof v === 'symbol' ||
        typeof v === 'boolean'
    )
}