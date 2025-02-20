// utils/index.ts
import { v4 as uuidv4 } from "uuid";
var isDef = (v) => v !== void 0 && v !== null;
var isUnDef = (v) => !isDef(v);
var uuid = () => uuidv4();
export {
  isDef,
  isUnDef,
  uuid
};
