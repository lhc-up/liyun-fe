"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// types/index.ts
var types_exports = {};
__export(types_exports, {
  AppType: () => AppType
});
module.exports = __toCommonJS(types_exports);
var AppType = /* @__PURE__ */ ((AppType2) => {
  AppType2[AppType2["Web"] = 1] = "Web";
  AppType2[AppType2["Mobile"] = 2] = "Mobile";
  AppType2[AppType2["Client"] = 3] = "Client";
  return AppType2;
})(AppType || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppType
});
