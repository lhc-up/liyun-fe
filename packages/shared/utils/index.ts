import { v4 as uuidv4 } from 'uuid';

export const isDef = (v: any) => v !== undefined && v !== null;

export const isUnDef = (v: any) => !isDef(v);

export const uuid = () => uuidv4();