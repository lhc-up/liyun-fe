import 'core-js/modules/es.array.concat.js';
import 'core-js/modules/es.array.iterator.js';
import 'core-js/modules/es.array-buffer.constructor.js';
import 'core-js/modules/es.array-buffer.slice.js';
import 'core-js/modules/es.data-view.js';
import 'core-js/modules/es.object.to-string.js';
import 'core-js/modules/es.typed-array.uint8-array.js';
import 'core-js/modules/es.typed-array.copy-within.js';
import 'core-js/modules/es.typed-array.every.js';
import 'core-js/modules/es.typed-array.fill.js';
import 'core-js/modules/es.typed-array.filter.js';
import 'core-js/modules/es.typed-array.find.js';
import 'core-js/modules/es.typed-array.find-index.js';
import 'core-js/modules/es.typed-array.for-each.js';
import 'core-js/modules/es.typed-array.includes.js';
import 'core-js/modules/es.typed-array.index-of.js';
import 'core-js/modules/es.typed-array.iterator.js';
import 'core-js/modules/es.typed-array.join.js';
import 'core-js/modules/es.typed-array.last-index-of.js';
import 'core-js/modules/es.typed-array.map.js';
import 'core-js/modules/es.typed-array.reduce.js';
import 'core-js/modules/es.typed-array.reduce-right.js';
import 'core-js/modules/es.typed-array.reverse.js';
import 'core-js/modules/es.typed-array.set.js';
import 'core-js/modules/es.typed-array.slice.js';
import 'core-js/modules/es.typed-array.some.js';
import 'core-js/modules/es.typed-array.sort.js';
import 'core-js/modules/es.typed-array.subarray.js';
import 'core-js/modules/es.typed-array.to-locale-string.js';
import 'core-js/modules/es.typed-array.to-string.js';
import 'core-js/modules/es.array.slice.js';
import 'core-js/modules/es.regexp.to-string.js';
import 'core-js/modules/es.array.index-of.js';
import 'core-js/modules/es.map.js';
import 'core-js/modules/es.regexp.exec.js';
import 'core-js/modules/es.set.js';
import 'core-js/modules/es.string.iterator.js';
import 'core-js/modules/es.string.search.js';
import 'core-js/modules/web.dom-collections.iterator.js';
import 'core-js/modules/es.number.constructor.js';
import 'core-js/modules/es.number.parse-int.js';
import 'core-js/modules/es.array.map.js';
import 'core-js/modules/es.typed-array.uint16-array.js';
import 'core-js/modules/es.string.from-code-point.js';
import 'core-js/modules/es.array.for-each.js';
import 'core-js/modules/es.function.name.js';
import 'core-js/modules/es.object.keys.js';
import 'core-js/modules/web.dom-collections.for-each.js';
import 'core-js/modules/es.array.join.js';
import 'core-js/modules/es.string.replace.js';
import 'core-js/modules/es.string.code-point-at.js';
import { Element as Element$1 } from 'domhandler';
import { InputTypeEnum, InputBorderStyleEnum } from '@/core/enums/richText';
import { uuid as uuid$1 } from '@/utils';
import 'core-js/modules/es.array.find.js';
import 'core-js/modules/es.array.some.js';
import 'core-js/modules/es.array.last-index-of.js';
import 'core-js/modules/es.array.splice.js';
import { QuestionTypeEnum as QuestionTypeEnum$1 } from '@/core/enums/question';
import { OptionLogicEnum } from '@/core/enums/rule';
import { Duplex as Duplex$1 } from '@/core/watcher';

class Config {
    /**
     * 当前平台，web、mp（微信小程序）
     */
    static platform = 'web';
    /**
     * 当前版本
     */
    static version = '0.0.0';
    /**
     * 所有题目默认必填
     */
    static isMustAnswer = true;
    /**
     * 填空输入框类名
     */
    static inputClassName = 'inputFrameBoxElement';
    /**
     * 填空输入框默认宽度
     */
    static inputWidth = 120;
    /**
     * 填空输入框默认输入最大字符数
     */
    static inputMaxCharacter = 10;
}

var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
    getRandomValues = crypto.getRandomValues.bind(crypto);
  }
  return getRandomValues(rnds8);
}

var randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var _native = {
  randomUUID: randomUUID
};

function v4(options, buf, offset) {
  var _ref, _options$random, _options$rng, _options;
  if (_native.randomUUID && true && !options) {
    return _native.randomUUID();
  }
  options = options || {};
  var rnds = (_ref = (_options$random = options.random) !== null && _options$random !== undefined ? _options$random : (_options$rng = (_options = options).rng) === null || _options$rng === undefined ? undefined : _options$rng.call(_options)) !== null && _ref !== undefined ? _ref : rng();
  if (rnds.length < 16) {
    throw new Error('Random bytes length must be >= 16');
  }
  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80;
  return unsafeStringify(rnds);
}

function _assertThisInitialized(e) {
  if (undefined === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (undefined !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (undefined !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

const uuid = () => v4();
function isDef(v) {
    return v !== undefined && v !== null;
}

/**
 * @class
 * @classdesc 订阅发布调度器，全局共享
 */
class Watcher {
    /**
     * 订阅事件
     */
    static subs = new Map();
    /**
     * 添加订阅
     * 同一事件同一方法只能注册一次
     * @param type 事件类型
     * @param fn 回调函数
     */
    static addSub(type, fn) {
        const subSet = this.subs.get(type) ?? new Set();
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
    static notify(type, data) {
        const subSet = this.subs.get(type);
        if (!subSet || subSet.size === 0)
            return;
        subSet.forEach(fn => fn(data));
    }
    /**
     * 移除订阅
     * @param type 事件类型
     * @param fn 回调函数
     */
    static removeSub(type, fn) {
        const subSet = this.subs.get(type);
        if (subSet && subSet.size > 0) {
            subSet.delete(fn);
        }
    }
    /**
     * 清空某事件下的订阅
     * @param type 事件类型
     */
    static clearEventSubs(type) {
        const subSet = this.subs.get(type);
        if (subSet instanceof Set && subSet.size) {
            subSet.clear();
        }
    }
    /**
     * 清空全部事件订阅
     */
    static clearSubs() {
        this.subs.clear();
    }
}
/**
 * @class
 * 订阅+发布
 */
class Duplex {
    /**
     * 订阅事件
     * @param type 事件类型
     * @param fn 回调函数
     */
    subscribe(type, fn) {
        Watcher.addSub(type, fn);
    }
    /**
     * 发布事件
     * @param type 事件类型
     */
    publish(type, data) {
        Watcher.notify(type, data);
    }
}

// Generated using scripts/write-decode-map.ts
var htmlDecodeTree = /* #__PURE__ */new Uint16Array(
// prettier-ignore
/* #__PURE__ */
"\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\uD835\uDD04rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\uD835\uDD38plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\uD835\uDC9Cign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\uD835\uDD05pf;\uC000\uD835\uDD39eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\uD835\uDC9Ep\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\uD835\uDD07\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\uD835\uDD3B\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\uD835\uDC9Frok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\uD835\uDD08rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\uD835\uDD3Csilon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\uD835\uDD09lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\uD835\uDD3DAll;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\uD835\uDD0A;\u62D9pf;\uC000\uD835\uDD3Eeater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\uD835\uDCA2;\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\uD835\uDD40a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\uD835\uDD0Dpf;\uC000\uD835\uDD41\u01E3\u07C7\0\u07CCr;\uC000\uD835\uDCA5rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\uD835\uDD0Epf;\uC000\uD835\uDD42cr;\uC000\uD835\uDCA6\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\uD835\uDD0F\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\uD835\uDD43er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\uD835\uDD10nusPlus;\u6213pf;\uC000\uD835\uDD44c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\uD835\uDD11\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\uD835\uDCA9ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\uD835\uDD12rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\uD835\uDD46enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\uD835\uDCAAash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\uD835\uDD13i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\uD835\uDCAB;\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B\"\u4022r;\uC000\uD835\uDD14pf;\u611Acr;\uC000\uD835\uDCAC\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\uD835\uDD16ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\uD835\uDD4A\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\uD835\uDCAEar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\uD835\uDD17\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\uD835\uDD4BipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\uD835\uDCAFrok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\uD835\uDD18rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\uD835\uDD4C\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\uD835\uDCB0ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\uD835\uDD19pf;\uC000\uD835\uDD4Dcr;\uC000\uD835\uDCB1dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\uD835\uDD1Apf;\uC000\uD835\uDD4Ecr;\uC000\uD835\uDCB2\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\uD835\uDD1B;\u439Epf;\uC000\uD835\uDD4Fcr;\uC000\uD835\uDCB3\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\uD835\uDD1Cpf;\uC000\uD835\uDD50cr;\uC000\uD835\uDCB4ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\uD835\uDCB5\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\uD835\uDD1Erave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\uD835\uDD52\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\uD835\uDCB6;\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\uD835\uDD1Fg\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\uD835\uDD53\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\uD835\uDCB7mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\uD835\uDD20\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\uD835\uDD54o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\uD835\uDCB8\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\uD835\uDD21ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\uD835\uDD55\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\uD835\uDCB9;\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\uD835\uDD22\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\uD835\uDD56\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\uD835\uDD23lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\uD835\uDD57\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\uD835\uDCBB\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\uD835\uDD24\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\uD835\uDD58\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\uD835\uDD25s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\uD835\uDD59bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\uD835\uDCBDas\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\uD835\uDD26rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\uD835\uDD5Aa;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\uD835\uDCBEn\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\uD835\uDD27ath;\u4237pf;\uC000\uD835\uDD5B\u01E3\u23EC\0\u23F1r;\uC000\uD835\uDCBFrcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\uD835\uDD28reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\uD835\uDD5Ccr;\uC000\uD835\uDCC0\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\uD835\uDD29\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\uD835\uDD5Dus;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\uD835\uDCC1m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\uD835\uDD2Ao;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\uD835\uDD5E\u0100ct\u28F8\u28FDr;\uC000\uD835\uDCC2pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\uD835\uDD2B\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\uD835\uDD5F\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\uD835\uDCC3ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\uD835\uDD2C\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\uD835\uDD60\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\uD835\uDD2D\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\uD835\uDD61nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\uD835\uDCC5;\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\uD835\uDD2Epf;\uC000\uD835\uDD62rime;\u6057cr;\uC000\uD835\uDCC6\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\uD835\uDD2F\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\uD835\uDD63us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\uD835\uDCC7\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\uD835\uDD30\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\uD835\uDD64a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\uD835\uDCC8tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\uD835\uDD31\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\uD835\uDD65rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\uD835\uDCC9;\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\uD835\uDD32rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\uD835\uDD66\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\uD835\uDCCA\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\uD835\uDD33tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\uD835\uDD67ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\uD835\uDCCB\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\uD835\uDD34pf;\uC000\uD835\uDD68\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\uD835\uDCCC\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\uD835\uDD35\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\uD835\uDD69im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\uD835\uDCCD\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\uD835\uDD36cy;\u4457pf;\uC000\uD835\uDD6Acr;\uC000\uD835\uDCCE\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\uD835\uDD37cy;\u4436grarr;\u61DDpf;\uC000\uD835\uDD6Bcr;\uC000\uD835\uDCCF\u0100jn\u3B85\u3B87;\u600Dj;\u600C".split("").map(function (c) {
  return c.charCodeAt(0);
}));

// Generated using scripts/write-decode-map.ts
var xmlDecodeTree = /* #__PURE__ */new Uint16Array(
// prettier-ignore
/* #__PURE__ */
"\u0200aglq\t\x15\x18\x1B\u026D\x0F\0\0\x12p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map(function (c) {
  return c.charCodeAt(0);
}));

// Adapted from https://github.com/mathiasbynens/he/blob/36afe179392226cf1b6ccdb16ebbb7a5a844d93a/src/he.js#L106-L134
var _a;
var decodeMap = new Map([[0, 65533],
// C1 Unicode control character reference replacements
[128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]);
/**
 * Polyfill for `String.fromCodePoint`. It is used to create a string from a Unicode code point.
 */
var fromCodePoint =
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, n/no-unsupported-features/es-builtins
(_a = String.fromCodePoint) !== null && _a !== undefined ? _a : function (codePoint) {
  var output = "";
  if (codePoint > 65535) {
    codePoint -= 65536;
    output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
    codePoint = 56320 | codePoint & 1023;
  }
  output += String.fromCharCode(codePoint);
  return output;
};
/**
 * Replace the given code point with a replacement character if it is a
 * surrogate or is outside the valid range. Otherwise return the code
 * point unchanged.
 */
function replaceCodePoint(codePoint) {
  var _a;
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return 65533;
  }
  return (_a = decodeMap.get(codePoint)) !== null && _a !== undefined ? _a : codePoint;
}

var CharCodes$1;
(function (CharCodes) {
  CharCodes[CharCodes["NUM"] = 35] = "NUM";
  CharCodes[CharCodes["SEMI"] = 59] = "SEMI";
  CharCodes[CharCodes["EQUALS"] = 61] = "EQUALS";
  CharCodes[CharCodes["ZERO"] = 48] = "ZERO";
  CharCodes[CharCodes["NINE"] = 57] = "NINE";
  CharCodes[CharCodes["LOWER_A"] = 97] = "LOWER_A";
  CharCodes[CharCodes["LOWER_F"] = 102] = "LOWER_F";
  CharCodes[CharCodes["LOWER_X"] = 120] = "LOWER_X";
  CharCodes[CharCodes["LOWER_Z"] = 122] = "LOWER_Z";
  CharCodes[CharCodes["UPPER_A"] = 65] = "UPPER_A";
  CharCodes[CharCodes["UPPER_F"] = 70] = "UPPER_F";
  CharCodes[CharCodes["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes$1 || (CharCodes$1 = {}));
/** Bit that needs to be set to convert an upper case ASCII character to lower case */
var TO_LOWER_BIT = 32;
var BinTrieFlags;
(function (BinTrieFlags) {
  BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
  BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
  BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function isNumber(code) {
  return code >= CharCodes$1.ZERO && code <= CharCodes$1.NINE;
}
function isHexadecimalCharacter(code) {
  return code >= CharCodes$1.UPPER_A && code <= CharCodes$1.UPPER_F || code >= CharCodes$1.LOWER_A && code <= CharCodes$1.LOWER_F;
}
function isAsciiAlphaNumeric(code) {
  return code >= CharCodes$1.UPPER_A && code <= CharCodes$1.UPPER_Z || code >= CharCodes$1.LOWER_A && code <= CharCodes$1.LOWER_Z || isNumber(code);
}
/**
 * Checks if the given character is a valid end character for an entity in an attribute.
 *
 * Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
 * See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
 */
function isEntityInAttributeInvalidEnd(code) {
  return code === CharCodes$1.EQUALS || isAsciiAlphaNumeric(code);
}
var EntityDecoderState;
(function (EntityDecoderState) {
  EntityDecoderState[EntityDecoderState["EntityStart"] = 0] = "EntityStart";
  EntityDecoderState[EntityDecoderState["NumericStart"] = 1] = "NumericStart";
  EntityDecoderState[EntityDecoderState["NumericDecimal"] = 2] = "NumericDecimal";
  EntityDecoderState[EntityDecoderState["NumericHex"] = 3] = "NumericHex";
  EntityDecoderState[EntityDecoderState["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function (DecodingMode) {
  /** Entities in text nodes that can end with any character. */
  DecodingMode[DecodingMode["Legacy"] = 0] = "Legacy";
  /** Only allow entities terminated with a semicolon. */
  DecodingMode[DecodingMode["Strict"] = 1] = "Strict";
  /** Entities in attributes have limitations on ending characters. */
  DecodingMode[DecodingMode["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
/**
 * Token decoder with support of writing partial entities.
 */
var EntityDecoder = /*#__PURE__*/function () {
  function EntityDecoder(/** The tree used to decode entities. */
  decodeTree,
  /**
   * The function that is called when a codepoint is decoded.
   *
   * For multi-byte named entities, this will be called multiple times,
   * with the second codepoint, and the same `consumed` value.
   *
   * @param codepoint The decoded codepoint.
   * @param consumed The number of bytes consumed by the decoder.
   */
  emitCodePoint, /** An object that is used to produce errors. */
  errors) {
    _classCallCheck(this, EntityDecoder);
    this.decodeTree = decodeTree;
    this.emitCodePoint = emitCodePoint;
    this.errors = errors;
    /** The current state of the decoder. */
    this.state = EntityDecoderState.EntityStart;
    /** Characters that were consumed while parsing an entity. */
    this.consumed = 1;
    /**
     * The result of the entity.
     *
     * Either the result index of a numeric entity, or the codepoint of a
     * numeric entity.
     */
    this.result = 0;
    /** The current index in the decode tree. */
    this.treeIndex = 0;
    /** The number of characters that were consumed in excess. */
    this.excess = 1;
    /** The mode in which the decoder is operating. */
    this.decodeMode = DecodingMode.Strict;
  }
  /** Resets the instance to make it reusable. */
  return _createClass(EntityDecoder, [{
    key: "startEntity",
    value: function startEntity(decodeMode) {
      this.decodeMode = decodeMode;
      this.state = EntityDecoderState.EntityStart;
      this.result = 0;
      this.treeIndex = 0;
      this.excess = 1;
      this.consumed = 1;
    }
    /**
     * Write an entity to the decoder. This can be called multiple times with partial entities.
     * If the entity is incomplete, the decoder will return -1.
     *
     * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
     * entity is incomplete, and resume when the next string is written.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
  }, {
    key: "write",
    value: function write(input, offset) {
      switch (this.state) {
        case EntityDecoderState.EntityStart:
          {
            if (input.charCodeAt(offset) === CharCodes$1.NUM) {
              this.state = EntityDecoderState.NumericStart;
              this.consumed += 1;
              return this.stateNumericStart(input, offset + 1);
            }
            this.state = EntityDecoderState.NamedEntity;
            return this.stateNamedEntity(input, offset);
          }
        case EntityDecoderState.NumericStart:
          {
            return this.stateNumericStart(input, offset);
          }
        case EntityDecoderState.NumericDecimal:
          {
            return this.stateNumericDecimal(input, offset);
          }
        case EntityDecoderState.NumericHex:
          {
            return this.stateNumericHex(input, offset);
          }
        case EntityDecoderState.NamedEntity:
          {
            return this.stateNamedEntity(input, offset);
          }
      }
    }
    /**
     * Switches between the numeric decimal and hexadecimal states.
     *
     * Equivalent to the `Numeric character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
  }, {
    key: "stateNumericStart",
    value: function stateNumericStart(input, offset) {
      if (offset >= input.length) {
        return -1;
      }
      if ((input.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes$1.LOWER_X) {
        this.state = EntityDecoderState.NumericHex;
        this.consumed += 1;
        return this.stateNumericHex(input, offset + 1);
      }
      this.state = EntityDecoderState.NumericDecimal;
      return this.stateNumericDecimal(input, offset);
    }
  }, {
    key: "addToNumericResult",
    value: function addToNumericResult(input, start, end, base) {
      if (start !== end) {
        var digitCount = end - start;
        this.result = this.result * Math.pow(base, digitCount) + Number.parseInt(input.substr(start, digitCount), base);
        this.consumed += digitCount;
      }
    }
    /**
     * Parses a hexadecimal numeric entity.
     *
     * Equivalent to the `Hexademical character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
  }, {
    key: "stateNumericHex",
    value: function stateNumericHex(input, offset) {
      var startIndex = offset;
      while (offset < input.length) {
        var _char = input.charCodeAt(offset);
        if (isNumber(_char) || isHexadecimalCharacter(_char)) {
          offset += 1;
        } else {
          this.addToNumericResult(input, startIndex, offset, 16);
          return this.emitNumericEntity(_char, 3);
        }
      }
      this.addToNumericResult(input, startIndex, offset, 16);
      return -1;
    }
    /**
     * Parses a decimal numeric entity.
     *
     * Equivalent to the `Decimal character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
  }, {
    key: "stateNumericDecimal",
    value: function stateNumericDecimal(input, offset) {
      var startIndex = offset;
      while (offset < input.length) {
        var _char2 = input.charCodeAt(offset);
        if (isNumber(_char2)) {
          offset += 1;
        } else {
          this.addToNumericResult(input, startIndex, offset, 10);
          return this.emitNumericEntity(_char2, 2);
        }
      }
      this.addToNumericResult(input, startIndex, offset, 10);
      return -1;
    }
    /**
     * Validate and emit a numeric entity.
     *
     * Implements the logic from the `Hexademical character reference start
     * state` and `Numeric character reference end state` in the HTML spec.
     *
     * @param lastCp The last code point of the entity. Used to see if the
     *               entity was terminated with a semicolon.
     * @param expectedLength The minimum number of characters that should be
     *                       consumed. Used to validate that at least one digit
     *                       was consumed.
     * @returns The number of characters that were consumed.
     */
  }, {
    key: "emitNumericEntity",
    value: function emitNumericEntity(lastCp, expectedLength) {
      var _a;
      // Ensure we consumed at least one digit.
      if (this.consumed <= expectedLength) {
        (_a = this.errors) === null || _a === undefined ? undefined : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
        return 0;
      }
      // Figure out if this is a legit end of the entity
      if (lastCp === CharCodes$1.SEMI) {
        this.consumed += 1;
      } else if (this.decodeMode === DecodingMode.Strict) {
        return 0;
      }
      this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
      if (this.errors) {
        if (lastCp !== CharCodes$1.SEMI) {
          this.errors.missingSemicolonAfterCharacterReference();
        }
        this.errors.validateNumericCharacterReference(this.result);
      }
      return this.consumed;
    }
    /**
     * Parses a named entity.
     *
     * Equivalent to the `Named character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
  }, {
    key: "stateNamedEntity",
    value: function stateNamedEntity(input, offset) {
      var decodeTree = this.decodeTree;
      var current = decodeTree[this.treeIndex];
      // The mask is the number of bytes of the value, including the current byte.
      var valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
      for (; offset < input.length; offset++, this.excess++) {
        var _char3 = input.charCodeAt(offset);
        this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), _char3);
        if (this.treeIndex < 0) {
          return this.result === 0 ||
          // If we are parsing an attribute
          this.decodeMode === DecodingMode.Attribute && (
          // We shouldn't have consumed any characters after the entity,
          valueLength === 0 ||
          // And there should be no invalid characters.
          isEntityInAttributeInvalidEnd(_char3)) ? 0 : this.emitNotTerminatedNamedEntity();
        }
        current = decodeTree[this.treeIndex];
        valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
        // If the branch is a value, store it and continue
        if (valueLength !== 0) {
          // If the entity is terminated by a semicolon, we are done.
          if (_char3 === CharCodes$1.SEMI) {
            return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
          }
          // If we encounter a non-terminated (legacy) entity while parsing strictly, then ignore it.
          if (this.decodeMode !== DecodingMode.Strict) {
            this.result = this.treeIndex;
            this.consumed += this.excess;
            this.excess = 0;
          }
        }
      }
      return -1;
    }
    /**
     * Emit a named entity that was not terminated with a semicolon.
     *
     * @returns The number of characters consumed.
     */
  }, {
    key: "emitNotTerminatedNamedEntity",
    value: function emitNotTerminatedNamedEntity() {
      var _a;
      var result = this.result,
        decodeTree = this.decodeTree;
      var valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
      this.emitNamedEntityData(result, valueLength, this.consumed);
      (_a = this.errors) === null || _a === undefined ? undefined : _a.missingSemicolonAfterCharacterReference();
      return this.consumed;
    }
    /**
     * Emit a named entity.
     *
     * @param result The index of the entity in the decode tree.
     * @param valueLength The number of bytes in the entity.
     * @param consumed The number of characters consumed.
     *
     * @returns The number of characters consumed.
     */
  }, {
    key: "emitNamedEntityData",
    value: function emitNamedEntityData(result, valueLength, consumed) {
      var decodeTree = this.decodeTree;
      this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
      if (valueLength === 3) {
        // For multi-byte values, we need to emit the second byte.
        this.emitCodePoint(decodeTree[result + 2], consumed);
      }
      return consumed;
    }
    /**
     * Signal to the parser that the end of the input was reached.
     *
     * Remaining data will be emitted and relevant errors will be produced.
     *
     * @returns The number of characters consumed.
     */
  }, {
    key: "end",
    value: function end() {
      var _a;
      switch (this.state) {
        case EntityDecoderState.NamedEntity:
          {
            // Emit a named entity if we have one.
            return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
          }
        // Otherwise, emit a numeric entity if we have one.
        case EntityDecoderState.NumericDecimal:
          {
            return this.emitNumericEntity(0, 2);
          }
        case EntityDecoderState.NumericHex:
          {
            return this.emitNumericEntity(0, 3);
          }
        case EntityDecoderState.NumericStart:
          {
            (_a = this.errors) === null || _a === undefined ? undefined : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
            return 0;
          }
        case EntityDecoderState.EntityStart:
          {
            // Return 0 if we have no entity.
            return 0;
          }
      }
    }
  }]);
}();
/**
 * Determines the branch of the current node that is taken given the current
 * character. This function is used to traverse the trie.
 *
 * @param decodeTree The trie.
 * @param current The current node.
 * @param nodeIdx The index right after the current node and its value.
 * @param char The current character.
 * @returns The index of the next node, or -1 if no branch is taken.
 */
function determineBranch(decodeTree, current, nodeIndex, _char4) {
  var branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
  var jumpOffset = current & BinTrieFlags.JUMP_TABLE;
  // Case 1: Single branch encoded in jump offset
  if (branchCount === 0) {
    return jumpOffset !== 0 && _char4 === jumpOffset ? nodeIndex : -1;
  }
  // Case 2: Multiple branches encoded in jump table
  if (jumpOffset) {
    var value = _char4 - jumpOffset;
    return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIndex + value] - 1;
  }
  // Case 3: Multiple branches encoded in dictionary
  // Binary search for the character.
  var lo = nodeIndex;
  var hi = lo + branchCount - 1;
  while (lo <= hi) {
    var mid = lo + hi >>> 1;
    var midValue = decodeTree[mid];
    if (midValue < _char4) {
      lo = mid + 1;
    } else if (midValue > _char4) {
      hi = mid - 1;
    } else {
      return decodeTree[mid + branchCount];
    }
  }
  return -1;
}

var CharCodes;
(function (CharCodes) {
  CharCodes[CharCodes["Tab"] = 9] = "Tab";
  CharCodes[CharCodes["NewLine"] = 10] = "NewLine";
  CharCodes[CharCodes["FormFeed"] = 12] = "FormFeed";
  CharCodes[CharCodes["CarriageReturn"] = 13] = "CarriageReturn";
  CharCodes[CharCodes["Space"] = 32] = "Space";
  CharCodes[CharCodes["ExclamationMark"] = 33] = "ExclamationMark";
  CharCodes[CharCodes["Number"] = 35] = "Number";
  CharCodes[CharCodes["Amp"] = 38] = "Amp";
  CharCodes[CharCodes["SingleQuote"] = 39] = "SingleQuote";
  CharCodes[CharCodes["DoubleQuote"] = 34] = "DoubleQuote";
  CharCodes[CharCodes["Dash"] = 45] = "Dash";
  CharCodes[CharCodes["Slash"] = 47] = "Slash";
  CharCodes[CharCodes["Zero"] = 48] = "Zero";
  CharCodes[CharCodes["Nine"] = 57] = "Nine";
  CharCodes[CharCodes["Semi"] = 59] = "Semi";
  CharCodes[CharCodes["Lt"] = 60] = "Lt";
  CharCodes[CharCodes["Eq"] = 61] = "Eq";
  CharCodes[CharCodes["Gt"] = 62] = "Gt";
  CharCodes[CharCodes["Questionmark"] = 63] = "Questionmark";
  CharCodes[CharCodes["UpperA"] = 65] = "UpperA";
  CharCodes[CharCodes["LowerA"] = 97] = "LowerA";
  CharCodes[CharCodes["UpperF"] = 70] = "UpperF";
  CharCodes[CharCodes["LowerF"] = 102] = "LowerF";
  CharCodes[CharCodes["UpperZ"] = 90] = "UpperZ";
  CharCodes[CharCodes["LowerZ"] = 122] = "LowerZ";
  CharCodes[CharCodes["LowerX"] = 120] = "LowerX";
  CharCodes[CharCodes["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
})(CharCodes || (CharCodes = {}));
/** All the states the tokenizer can be in. */
var State;
(function (State) {
  State[State["Text"] = 1] = "Text";
  State[State["BeforeTagName"] = 2] = "BeforeTagName";
  State[State["InTagName"] = 3] = "InTagName";
  State[State["InSelfClosingTag"] = 4] = "InSelfClosingTag";
  State[State["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
  State[State["InClosingTagName"] = 6] = "InClosingTagName";
  State[State["AfterClosingTagName"] = 7] = "AfterClosingTagName";
  // Attributes
  State[State["BeforeAttributeName"] = 8] = "BeforeAttributeName";
  State[State["InAttributeName"] = 9] = "InAttributeName";
  State[State["AfterAttributeName"] = 10] = "AfterAttributeName";
  State[State["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
  State[State["InAttributeValueDq"] = 12] = "InAttributeValueDq";
  State[State["InAttributeValueSq"] = 13] = "InAttributeValueSq";
  State[State["InAttributeValueNq"] = 14] = "InAttributeValueNq";
  // Declarations
  State[State["BeforeDeclaration"] = 15] = "BeforeDeclaration";
  State[State["InDeclaration"] = 16] = "InDeclaration";
  // Processing instructions
  State[State["InProcessingInstruction"] = 17] = "InProcessingInstruction";
  // Comments & CDATA
  State[State["BeforeComment"] = 18] = "BeforeComment";
  State[State["CDATASequence"] = 19] = "CDATASequence";
  State[State["InSpecialComment"] = 20] = "InSpecialComment";
  State[State["InCommentLike"] = 21] = "InCommentLike";
  // Special tags
  State[State["BeforeSpecialS"] = 22] = "BeforeSpecialS";
  State[State["BeforeSpecialT"] = 23] = "BeforeSpecialT";
  State[State["SpecialStartSequence"] = 24] = "SpecialStartSequence";
  State[State["InSpecialTag"] = 25] = "InSpecialTag";
  State[State["InEntity"] = 26] = "InEntity";
})(State || (State = {}));
function isWhitespace(c) {
  return c === CharCodes.Space || c === CharCodes.NewLine || c === CharCodes.Tab || c === CharCodes.FormFeed || c === CharCodes.CarriageReturn;
}
function isEndOfTagSection(c) {
  return c === CharCodes.Slash || c === CharCodes.Gt || isWhitespace(c);
}
function isASCIIAlpha(c) {
  return c >= CharCodes.LowerA && c <= CharCodes.LowerZ || c >= CharCodes.UpperA && c <= CharCodes.UpperZ;
}
var QuoteType;
(function (QuoteType) {
  QuoteType[QuoteType["NoValue"] = 0] = "NoValue";
  QuoteType[QuoteType["Unquoted"] = 1] = "Unquoted";
  QuoteType[QuoteType["Single"] = 2] = "Single";
  QuoteType[QuoteType["Double"] = 3] = "Double";
})(QuoteType || (QuoteType = {}));
/**
 * Sequences used to match longer strings.
 *
 * We don't have `Script`, `Style`, or `Title` here. Instead, we re-use the *End
 * sequences with an increased offset.
 */
var Sequences = {
  Cdata: new Uint8Array([0x43, 0x44, 0x41, 0x54, 0x41, 0x5b]),
  // CDATA[
  CdataEnd: new Uint8Array([0x5d, 0x5d, 0x3e]),
  // ]]>
  CommentEnd: new Uint8Array([0x2d, 0x2d, 0x3e]),
  // `-->`
  ScriptEnd: new Uint8Array([0x3c, 0x2f, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74]),
  // `</script`
  StyleEnd: new Uint8Array([0x3c, 0x2f, 0x73, 0x74, 0x79, 0x6c, 0x65]),
  // `</style`
  TitleEnd: new Uint8Array([0x3c, 0x2f, 0x74, 0x69, 0x74, 0x6c, 0x65]),
  // `</title`
  TextareaEnd: new Uint8Array([0x3c, 0x2f, 0x74, 0x65, 0x78, 0x74, 0x61, 0x72, 0x65, 0x61]),
  // `</textarea`
  XmpEnd: new Uint8Array([0x3c, 0x2f, 0x78, 0x6d, 0x70]) // `</xmp`
};
var Tokenizer = /*#__PURE__*/function () {
  function Tokenizer(_ref, cbs) {
    var _this = this;
    var _ref$xmlMode = _ref.xmlMode,
      xmlMode = _ref$xmlMode === undefined ? false : _ref$xmlMode,
      _ref$decodeEntities = _ref.decodeEntities,
      decodeEntities = _ref$decodeEntities === undefined ? true : _ref$decodeEntities;
    _classCallCheck(this, Tokenizer);
    this.cbs = cbs;
    /** The current state the tokenizer is in. */
    this.state = State.Text;
    /** The read buffer. */
    this.buffer = "";
    /** The beginning of the section that is currently being read. */
    this.sectionStart = 0;
    /** The index within the buffer that we are currently looking at. */
    this.index = 0;
    /** The start of the last entity. */
    this.entityStart = 0;
    /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
    this.baseState = State.Text;
    /** For special parsing behavior inside of script and style tags. */
    this.isSpecial = false;
    /** Indicates whether the tokenizer has been paused. */
    this.running = true;
    /** The offset of the current buffer. */
    this.offset = 0;
    this.currentSequence = undefined;
    this.sequenceIndex = 0;
    this.xmlMode = xmlMode;
    this.decodeEntities = decodeEntities;
    this.entityDecoder = new EntityDecoder(xmlMode ? xmlDecodeTree : htmlDecodeTree, function (cp, consumed) {
      return _this.emitCodePoint(cp, consumed);
    });
  }
  return _createClass(Tokenizer, [{
    key: "reset",
    value: function reset() {
      this.state = State.Text;
      this.buffer = "";
      this.sectionStart = 0;
      this.index = 0;
      this.baseState = State.Text;
      this.currentSequence = undefined;
      this.running = true;
      this.offset = 0;
    }
  }, {
    key: "write",
    value: function write(chunk) {
      this.offset += this.buffer.length;
      this.buffer = chunk;
      this.parse();
    }
  }, {
    key: "end",
    value: function end() {
      if (this.running) this.finish();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.running = false;
    }
  }, {
    key: "resume",
    value: function resume() {
      this.running = true;
      if (this.index < this.buffer.length + this.offset) {
        this.parse();
      }
    }
  }, {
    key: "stateText",
    value: function stateText(c) {
      if (c === CharCodes.Lt || !this.decodeEntities && this.fastForwardTo(CharCodes.Lt)) {
        if (this.index > this.sectionStart) {
          this.cbs.ontext(this.sectionStart, this.index);
        }
        this.state = State.BeforeTagName;
        this.sectionStart = this.index;
      } else if (this.decodeEntities && c === CharCodes.Amp) {
        this.startEntity();
      }
    }
  }, {
    key: "stateSpecialStartSequence",
    value: function stateSpecialStartSequence(c) {
      var isEnd = this.sequenceIndex === this.currentSequence.length;
      var isMatch = isEnd ?
      // If we are at the end of the sequence, make sure the tag name has ended
      isEndOfTagSection(c) :
      // Otherwise, do a case-insensitive comparison
      (c | 0x20) === this.currentSequence[this.sequenceIndex];
      if (!isMatch) {
        this.isSpecial = false;
      } else if (!isEnd) {
        this.sequenceIndex++;
        return;
      }
      this.sequenceIndex = 0;
      this.state = State.InTagName;
      this.stateInTagName(c);
    }
    /** Look for an end tag. For <title> tags, also decode entities. */
  }, {
    key: "stateInSpecialTag",
    value: function stateInSpecialTag(c) {
      if (this.sequenceIndex === this.currentSequence.length) {
        if (c === CharCodes.Gt || isWhitespace(c)) {
          var endOfText = this.index - this.currentSequence.length;
          if (this.sectionStart < endOfText) {
            // Spoof the index so that reported locations match up.
            var actualIndex = this.index;
            this.index = endOfText;
            this.cbs.ontext(this.sectionStart, endOfText);
            this.index = actualIndex;
          }
          this.isSpecial = false;
          this.sectionStart = endOfText + 2; // Skip over the `</`
          this.stateInClosingTagName(c);
          return; // We are done; skip the rest of the function.
        }
        this.sequenceIndex = 0;
      }
      if ((c | 0x20) === this.currentSequence[this.sequenceIndex]) {
        this.sequenceIndex += 1;
      } else if (this.sequenceIndex === 0) {
        if (this.currentSequence === Sequences.TitleEnd) {
          // We have to parse entities in <title> tags.
          if (this.decodeEntities && c === CharCodes.Amp) {
            this.startEntity();
          }
        } else if (this.fastForwardTo(CharCodes.Lt)) {
          // Outside of <title> tags, we can fast-forward.
          this.sequenceIndex = 1;
        }
      } else {
        // If we see a `<`, set the sequence index to 1; useful for eg. `<</script>`.
        this.sequenceIndex = Number(c === CharCodes.Lt);
      }
    }
  }, {
    key: "stateCDATASequence",
    value: function stateCDATASequence(c) {
      if (c === Sequences.Cdata[this.sequenceIndex]) {
        if (++this.sequenceIndex === Sequences.Cdata.length) {
          this.state = State.InCommentLike;
          this.currentSequence = Sequences.CdataEnd;
          this.sequenceIndex = 0;
          this.sectionStart = this.index + 1;
        }
      } else {
        this.sequenceIndex = 0;
        this.state = State.InDeclaration;
        this.stateInDeclaration(c); // Reconsume the character
      }
    }
    /**
     * When we wait for one specific character, we can speed things up
     * by skipping through the buffer until we find it.
     *
     * @returns Whether the character was found.
     */
  }, {
    key: "fastForwardTo",
    value: function fastForwardTo(c) {
      while (++this.index < this.buffer.length + this.offset) {
        if (this.buffer.charCodeAt(this.index - this.offset) === c) {
          return true;
        }
      }
      /*
       * We increment the index at the end of the `parse` loop,
       * so set it to `buffer.length - 1` here.
       *
       * TODO: Refactor `parse` to increment index before calling states.
       */
      this.index = this.buffer.length + this.offset - 1;
      return false;
    }
    /**
     * Comments and CDATA end with `-->` and `]]>`.
     *
     * Their common qualities are:
     * - Their end sequences have a distinct character they start with.
     * - That character is then repeated, so we have to check multiple repeats.
     * - All characters but the start character of the sequence can be skipped.
     */
  }, {
    key: "stateInCommentLike",
    value: function stateInCommentLike(c) {
      if (c === this.currentSequence[this.sequenceIndex]) {
        if (++this.sequenceIndex === this.currentSequence.length) {
          if (this.currentSequence === Sequences.CdataEnd) {
            this.cbs.oncdata(this.sectionStart, this.index, 2);
          } else {
            this.cbs.oncomment(this.sectionStart, this.index, 2);
          }
          this.sequenceIndex = 0;
          this.sectionStart = this.index + 1;
          this.state = State.Text;
        }
      } else if (this.sequenceIndex === 0) {
        // Fast-forward to the first character of the sequence
        if (this.fastForwardTo(this.currentSequence[0])) {
          this.sequenceIndex = 1;
        }
      } else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
        // Allow long sequences, eg. --->, ]]]>
        this.sequenceIndex = 0;
      }
    }
    /**
     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
     *
     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
     * We allow anything that wouldn't end the tag.
     */
  }, {
    key: "isTagStartChar",
    value: function isTagStartChar(c) {
      return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
    }
  }, {
    key: "startSpecial",
    value: function startSpecial(sequence, offset) {
      this.isSpecial = true;
      this.currentSequence = sequence;
      this.sequenceIndex = offset;
      this.state = State.SpecialStartSequence;
    }
  }, {
    key: "stateBeforeTagName",
    value: function stateBeforeTagName(c) {
      if (c === CharCodes.ExclamationMark) {
        this.state = State.BeforeDeclaration;
        this.sectionStart = this.index + 1;
      } else if (c === CharCodes.Questionmark) {
        this.state = State.InProcessingInstruction;
        this.sectionStart = this.index + 1;
      } else if (this.isTagStartChar(c)) {
        var lower = c | 0x20;
        this.sectionStart = this.index;
        if (this.xmlMode) {
          this.state = State.InTagName;
        } else if (lower === Sequences.ScriptEnd[2]) {
          this.state = State.BeforeSpecialS;
        } else if (lower === Sequences.TitleEnd[2] || lower === Sequences.XmpEnd[2]) {
          this.state = State.BeforeSpecialT;
        } else {
          this.state = State.InTagName;
        }
      } else if (c === CharCodes.Slash) {
        this.state = State.BeforeClosingTagName;
      } else {
        this.state = State.Text;
        this.stateText(c);
      }
    }
  }, {
    key: "stateInTagName",
    value: function stateInTagName(c) {
      if (isEndOfTagSection(c)) {
        this.cbs.onopentagname(this.sectionStart, this.index);
        this.sectionStart = -1;
        this.state = State.BeforeAttributeName;
        this.stateBeforeAttributeName(c);
      }
    }
  }, {
    key: "stateBeforeClosingTagName",
    value: function stateBeforeClosingTagName(c) {
      if (isWhitespace(c)) ; else if (c === CharCodes.Gt) {
        this.state = State.Text;
      } else {
        this.state = this.isTagStartChar(c) ? State.InClosingTagName : State.InSpecialComment;
        this.sectionStart = this.index;
      }
    }
  }, {
    key: "stateInClosingTagName",
    value: function stateInClosingTagName(c) {
      if (c === CharCodes.Gt || isWhitespace(c)) {
        this.cbs.onclosetag(this.sectionStart, this.index);
        this.sectionStart = -1;
        this.state = State.AfterClosingTagName;
        this.stateAfterClosingTagName(c);
      }
    }
  }, {
    key: "stateAfterClosingTagName",
    value: function stateAfterClosingTagName(c) {
      // Skip everything until ">"
      if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
        this.state = State.Text;
        this.sectionStart = this.index + 1;
      }
    }
  }, {
    key: "stateBeforeAttributeName",
    value: function stateBeforeAttributeName(c) {
      if (c === CharCodes.Gt) {
        this.cbs.onopentagend(this.index);
        if (this.isSpecial) {
          this.state = State.InSpecialTag;
          this.sequenceIndex = 0;
        } else {
          this.state = State.Text;
        }
        this.sectionStart = this.index + 1;
      } else if (c === CharCodes.Slash) {
        this.state = State.InSelfClosingTag;
      } else if (!isWhitespace(c)) {
        this.state = State.InAttributeName;
        this.sectionStart = this.index;
      }
    }
  }, {
    key: "stateInSelfClosingTag",
    value: function stateInSelfClosingTag(c) {
      if (c === CharCodes.Gt) {
        this.cbs.onselfclosingtag(this.index);
        this.state = State.Text;
        this.sectionStart = this.index + 1;
        this.isSpecial = false; // Reset special state, in case of self-closing special tags
      } else if (!isWhitespace(c)) {
        this.state = State.BeforeAttributeName;
        this.stateBeforeAttributeName(c);
      }
    }
  }, {
    key: "stateInAttributeName",
    value: function stateInAttributeName(c) {
      if (c === CharCodes.Eq || isEndOfTagSection(c)) {
        this.cbs.onattribname(this.sectionStart, this.index);
        this.sectionStart = this.index;
        this.state = State.AfterAttributeName;
        this.stateAfterAttributeName(c);
      }
    }
  }, {
    key: "stateAfterAttributeName",
    value: function stateAfterAttributeName(c) {
      if (c === CharCodes.Eq) {
        this.state = State.BeforeAttributeValue;
      } else if (c === CharCodes.Slash || c === CharCodes.Gt) {
        this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
        this.sectionStart = -1;
        this.state = State.BeforeAttributeName;
        this.stateBeforeAttributeName(c);
      } else if (!isWhitespace(c)) {
        this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
        this.state = State.InAttributeName;
        this.sectionStart = this.index;
      }
    }
  }, {
    key: "stateBeforeAttributeValue",
    value: function stateBeforeAttributeValue(c) {
      if (c === CharCodes.DoubleQuote) {
        this.state = State.InAttributeValueDq;
        this.sectionStart = this.index + 1;
      } else if (c === CharCodes.SingleQuote) {
        this.state = State.InAttributeValueSq;
        this.sectionStart = this.index + 1;
      } else if (!isWhitespace(c)) {
        this.sectionStart = this.index;
        this.state = State.InAttributeValueNq;
        this.stateInAttributeValueNoQuotes(c); // Reconsume token
      }
    }
  }, {
    key: "handleInAttributeValue",
    value: function handleInAttributeValue(c, quote) {
      if (c === quote || !this.decodeEntities && this.fastForwardTo(quote)) {
        this.cbs.onattribdata(this.sectionStart, this.index);
        this.sectionStart = -1;
        this.cbs.onattribend(quote === CharCodes.DoubleQuote ? QuoteType.Double : QuoteType.Single, this.index + 1);
        this.state = State.BeforeAttributeName;
      } else if (this.decodeEntities && c === CharCodes.Amp) {
        this.startEntity();
      }
    }
  }, {
    key: "stateInAttributeValueDoubleQuotes",
    value: function stateInAttributeValueDoubleQuotes(c) {
      this.handleInAttributeValue(c, CharCodes.DoubleQuote);
    }
  }, {
    key: "stateInAttributeValueSingleQuotes",
    value: function stateInAttributeValueSingleQuotes(c) {
      this.handleInAttributeValue(c, CharCodes.SingleQuote);
    }
  }, {
    key: "stateInAttributeValueNoQuotes",
    value: function stateInAttributeValueNoQuotes(c) {
      if (isWhitespace(c) || c === CharCodes.Gt) {
        this.cbs.onattribdata(this.sectionStart, this.index);
        this.sectionStart = -1;
        this.cbs.onattribend(QuoteType.Unquoted, this.index);
        this.state = State.BeforeAttributeName;
        this.stateBeforeAttributeName(c);
      } else if (this.decodeEntities && c === CharCodes.Amp) {
        this.startEntity();
      }
    }
  }, {
    key: "stateBeforeDeclaration",
    value: function stateBeforeDeclaration(c) {
      if (c === CharCodes.OpeningSquareBracket) {
        this.state = State.CDATASequence;
        this.sequenceIndex = 0;
      } else {
        this.state = c === CharCodes.Dash ? State.BeforeComment : State.InDeclaration;
      }
    }
  }, {
    key: "stateInDeclaration",
    value: function stateInDeclaration(c) {
      if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
        this.cbs.ondeclaration(this.sectionStart, this.index);
        this.state = State.Text;
        this.sectionStart = this.index + 1;
      }
    }
  }, {
    key: "stateInProcessingInstruction",
    value: function stateInProcessingInstruction(c) {
      if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
        this.cbs.onprocessinginstruction(this.sectionStart, this.index);
        this.state = State.Text;
        this.sectionStart = this.index + 1;
      }
    }
  }, {
    key: "stateBeforeComment",
    value: function stateBeforeComment(c) {
      if (c === CharCodes.Dash) {
        this.state = State.InCommentLike;
        this.currentSequence = Sequences.CommentEnd;
        // Allow short comments (eg. <!-->)
        this.sequenceIndex = 2;
        this.sectionStart = this.index + 1;
      } else {
        this.state = State.InDeclaration;
      }
    }
  }, {
    key: "stateInSpecialComment",
    value: function stateInSpecialComment(c) {
      if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
        this.cbs.oncomment(this.sectionStart, this.index, 0);
        this.state = State.Text;
        this.sectionStart = this.index + 1;
      }
    }
  }, {
    key: "stateBeforeSpecialS",
    value: function stateBeforeSpecialS(c) {
      var lower = c | 0x20;
      if (lower === Sequences.ScriptEnd[3]) {
        this.startSpecial(Sequences.ScriptEnd, 4);
      } else if (lower === Sequences.StyleEnd[3]) {
        this.startSpecial(Sequences.StyleEnd, 4);
      } else {
        this.state = State.InTagName;
        this.stateInTagName(c); // Consume the token again
      }
    }
  }, {
    key: "stateBeforeSpecialT",
    value: function stateBeforeSpecialT(c) {
      var lower = c | 0x20;
      switch (lower) {
        case Sequences.TitleEnd[3]:
          {
            this.startSpecial(Sequences.TitleEnd, 4);
            break;
          }
        case Sequences.TextareaEnd[3]:
          {
            this.startSpecial(Sequences.TextareaEnd, 4);
            break;
          }
        case Sequences.XmpEnd[3]:
          {
            this.startSpecial(Sequences.XmpEnd, 4);
            break;
          }
        default:
          {
            this.state = State.InTagName;
            this.stateInTagName(c); // Consume the token again
          }
      }
    }
  }, {
    key: "startEntity",
    value: function startEntity() {
      this.baseState = this.state;
      this.state = State.InEntity;
      this.entityStart = this.index;
      this.entityDecoder.startEntity(this.xmlMode ? DecodingMode.Strict : this.baseState === State.Text || this.baseState === State.InSpecialTag ? DecodingMode.Legacy : DecodingMode.Attribute);
    }
  }, {
    key: "stateInEntity",
    value: function stateInEntity() {
      var length = this.entityDecoder.write(this.buffer, this.index - this.offset);
      // If `length` is positive, we are done with the entity.
      if (length >= 0) {
        this.state = this.baseState;
        if (length === 0) {
          this.index = this.entityStart;
        }
      } else {
        // Mark buffer as consumed.
        this.index = this.offset + this.buffer.length - 1;
      }
    }
    /**
     * Remove data that has already been consumed from the buffer.
     */
  }, {
    key: "cleanup",
    value: function cleanup() {
      // If we are inside of text or attributes, emit what we already have.
      if (this.running && this.sectionStart !== this.index) {
        if (this.state === State.Text || this.state === State.InSpecialTag && this.sequenceIndex === 0) {
          this.cbs.ontext(this.sectionStart, this.index);
          this.sectionStart = this.index;
        } else if (this.state === State.InAttributeValueDq || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueNq) {
          this.cbs.onattribdata(this.sectionStart, this.index);
          this.sectionStart = this.index;
        }
      }
    }
  }, {
    key: "shouldContinue",
    value: function shouldContinue() {
      return this.index < this.buffer.length + this.offset && this.running;
    }
    /**
     * Iterates through the buffer, calling the function corresponding to the current state.
     *
     * States that are more likely to be hit are higher up, as a performance improvement.
     */
  }, {
    key: "parse",
    value: function parse() {
      while (this.shouldContinue()) {
        var c = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
          case State.Text:
            {
              this.stateText(c);
              break;
            }
          case State.SpecialStartSequence:
            {
              this.stateSpecialStartSequence(c);
              break;
            }
          case State.InSpecialTag:
            {
              this.stateInSpecialTag(c);
              break;
            }
          case State.CDATASequence:
            {
              this.stateCDATASequence(c);
              break;
            }
          case State.InAttributeValueDq:
            {
              this.stateInAttributeValueDoubleQuotes(c);
              break;
            }
          case State.InAttributeName:
            {
              this.stateInAttributeName(c);
              break;
            }
          case State.InCommentLike:
            {
              this.stateInCommentLike(c);
              break;
            }
          case State.InSpecialComment:
            {
              this.stateInSpecialComment(c);
              break;
            }
          case State.BeforeAttributeName:
            {
              this.stateBeforeAttributeName(c);
              break;
            }
          case State.InTagName:
            {
              this.stateInTagName(c);
              break;
            }
          case State.InClosingTagName:
            {
              this.stateInClosingTagName(c);
              break;
            }
          case State.BeforeTagName:
            {
              this.stateBeforeTagName(c);
              break;
            }
          case State.AfterAttributeName:
            {
              this.stateAfterAttributeName(c);
              break;
            }
          case State.InAttributeValueSq:
            {
              this.stateInAttributeValueSingleQuotes(c);
              break;
            }
          case State.BeforeAttributeValue:
            {
              this.stateBeforeAttributeValue(c);
              break;
            }
          case State.BeforeClosingTagName:
            {
              this.stateBeforeClosingTagName(c);
              break;
            }
          case State.AfterClosingTagName:
            {
              this.stateAfterClosingTagName(c);
              break;
            }
          case State.BeforeSpecialS:
            {
              this.stateBeforeSpecialS(c);
              break;
            }
          case State.BeforeSpecialT:
            {
              this.stateBeforeSpecialT(c);
              break;
            }
          case State.InAttributeValueNq:
            {
              this.stateInAttributeValueNoQuotes(c);
              break;
            }
          case State.InSelfClosingTag:
            {
              this.stateInSelfClosingTag(c);
              break;
            }
          case State.InDeclaration:
            {
              this.stateInDeclaration(c);
              break;
            }
          case State.BeforeDeclaration:
            {
              this.stateBeforeDeclaration(c);
              break;
            }
          case State.BeforeComment:
            {
              this.stateBeforeComment(c);
              break;
            }
          case State.InProcessingInstruction:
            {
              this.stateInProcessingInstruction(c);
              break;
            }
          case State.InEntity:
            {
              this.stateInEntity();
              break;
            }
        }
        this.index++;
      }
      this.cleanup();
    }
  }, {
    key: "finish",
    value: function finish() {
      if (this.state === State.InEntity) {
        this.entityDecoder.end();
        this.state = this.baseState;
      }
      this.handleTrailingData();
      this.cbs.onend();
    }
    /** Handle any trailing data. */
  }, {
    key: "handleTrailingData",
    value: function handleTrailingData() {
      var endIndex = this.buffer.length + this.offset;
      // If there is no remaining data, we are done.
      if (this.sectionStart >= endIndex) {
        return;
      }
      if (this.state === State.InCommentLike) {
        if (this.currentSequence === Sequences.CdataEnd) {
          this.cbs.oncdata(this.sectionStart, endIndex, 0);
        } else {
          this.cbs.oncomment(this.sectionStart, endIndex, 0);
        }
      } else if (this.state === State.InTagName || this.state === State.BeforeAttributeName || this.state === State.BeforeAttributeValue || this.state === State.AfterAttributeName || this.state === State.InAttributeName || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueDq || this.state === State.InAttributeValueNq || this.state === State.InClosingTagName) ; else {
        this.cbs.ontext(this.sectionStart, endIndex);
      }
    }
  }, {
    key: "emitCodePoint",
    value: function emitCodePoint(cp, consumed) {
      if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
        if (this.sectionStart < this.entityStart) {
          this.cbs.onattribdata(this.sectionStart, this.entityStart);
        }
        this.sectionStart = this.entityStart + consumed;
        this.index = this.sectionStart - 1;
        this.cbs.onattribentity(cp);
      } else {
        if (this.sectionStart < this.entityStart) {
          this.cbs.ontext(this.sectionStart, this.entityStart);
        }
        this.sectionStart = this.entityStart + consumed;
        this.index = this.sectionStart - 1;
        this.cbs.ontextentity(cp, this.sectionStart);
      }
    }
  }]);
}();

var formTags = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]);
var pTag = new Set(["p"]);
var tableSectionTags = new Set(["thead", "tbody"]);
var ddtTags = new Set(["dd", "dt"]);
var rtpTags = new Set(["rt", "rp"]);
var openImpliesClose = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", pTag], ["h1", pTag], ["h2", pTag], ["h3", pTag], ["h4", pTag], ["h5", pTag], ["h6", pTag], ["select", formTags], ["input", formTags], ["output", formTags], ["button", formTags], ["datalist", formTags], ["textarea", formTags], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", ddtTags], ["dt", ddtTags], ["address", pTag], ["article", pTag], ["aside", pTag], ["blockquote", pTag], ["details", pTag], ["div", pTag], ["dl", pTag], ["fieldset", pTag], ["figcaption", pTag], ["figure", pTag], ["footer", pTag], ["form", pTag], ["header", pTag], ["hr", pTag], ["main", pTag], ["nav", pTag], ["ol", pTag], ["pre", pTag], ["section", pTag], ["table", pTag], ["ul", pTag], ["rt", rtpTags], ["rp", rtpTags], ["tbody", tableSectionTags], ["tfoot", tableSectionTags]]);
var voidElements = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
var foreignContextElements = new Set(["math", "svg"]);
var htmlIntegrationElements = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]);
var reNameEnd = /\s|\//;
var Parser = /*#__PURE__*/function () {
  function Parser(cbs) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Parser);
    var _a, _b, _c, _d, _e, _f;
    this.options = options;
    /** The start index of the last event. */
    this.startIndex = 0;
    /** The end index of the last event. */
    this.endIndex = 0;
    /**
     * Store the start index of the current open tag,
     * so we can update the start index for attributes.
     */
    this.openTagStart = 0;
    this.tagname = "";
    this.attribname = "";
    this.attribvalue = "";
    this.attribs = null;
    this.stack = [];
    this.buffers = [];
    this.bufferOffset = 0;
    /** The index of the last written buffer. Used when resuming after a `pause()`. */
    this.writeIndex = 0;
    /** Indicates whether the parser has finished running / `.end` has been called. */
    this.ended = false;
    this.cbs = cbs !== null && cbs !== undefined ? cbs : {};
    this.htmlMode = !this.options.xmlMode;
    this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== undefined ? _a : this.htmlMode;
    this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== undefined ? _b : this.htmlMode;
    this.recognizeSelfClosing = (_c = options.recognizeSelfClosing) !== null && _c !== undefined ? _c : !this.htmlMode;
    this.tokenizer = new ((_d = options.Tokenizer) !== null && _d !== undefined ? _d : Tokenizer)(this.options, this);
    this.foreignContext = [!this.htmlMode];
    (_f = (_e = this.cbs).onparserinit) === null || _f === undefined ? undefined : _f.call(_e, this);
  }
  // Tokenizer event handlers
  /** @internal */
  return _createClass(Parser, [{
    key: "ontext",
    value: function ontext(start, endIndex) {
      var _a, _b;
      var data = this.getSlice(start, endIndex);
      this.endIndex = endIndex - 1;
      (_b = (_a = this.cbs).ontext) === null || _b === undefined ? undefined : _b.call(_a, data);
      this.startIndex = endIndex;
    }
    /** @internal */
  }, {
    key: "ontextentity",
    value: function ontextentity(cp, endIndex) {
      var _a, _b;
      this.endIndex = endIndex - 1;
      (_b = (_a = this.cbs).ontext) === null || _b === undefined ? undefined : _b.call(_a, fromCodePoint(cp));
      this.startIndex = endIndex;
    }
    /**
     * Checks if the current tag is a void element. Override this if you want
     * to specify your own additional void elements.
     */
  }, {
    key: "isVoidElement",
    value: function isVoidElement(name) {
      return this.htmlMode && voidElements.has(name);
    }
    /** @internal */
  }, {
    key: "onopentagname",
    value: function onopentagname(start, endIndex) {
      this.endIndex = endIndex;
      var name = this.getSlice(start, endIndex);
      if (this.lowerCaseTagNames) {
        name = name.toLowerCase();
      }
      this.emitOpenTag(name);
    }
  }, {
    key: "emitOpenTag",
    value: function emitOpenTag(name) {
      var _a, _b, _c, _d;
      this.openTagStart = this.startIndex;
      this.tagname = name;
      var impliesClose = this.htmlMode && openImpliesClose.get(name);
      if (impliesClose) {
        while (this.stack.length > 0 && impliesClose.has(this.stack[0])) {
          var element = this.stack.shift();
          (_b = (_a = this.cbs).onclosetag) === null || _b === undefined ? undefined : _b.call(_a, element, true);
        }
      }
      if (!this.isVoidElement(name)) {
        this.stack.unshift(name);
        if (this.htmlMode) {
          if (foreignContextElements.has(name)) {
            this.foreignContext.unshift(true);
          } else if (htmlIntegrationElements.has(name)) {
            this.foreignContext.unshift(false);
          }
        }
      }
      (_d = (_c = this.cbs).onopentagname) === null || _d === undefined ? undefined : _d.call(_c, name);
      if (this.cbs.onopentag) this.attribs = {};
    }
  }, {
    key: "endOpenTag",
    value: function endOpenTag(isImplied) {
      var _a, _b;
      this.startIndex = this.openTagStart;
      if (this.attribs) {
        (_b = (_a = this.cbs).onopentag) === null || _b === undefined ? undefined : _b.call(_a, this.tagname, this.attribs, isImplied);
        this.attribs = null;
      }
      if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
        this.cbs.onclosetag(this.tagname, true);
      }
      this.tagname = "";
    }
    /** @internal */
  }, {
    key: "onopentagend",
    value: function onopentagend(endIndex) {
      this.endIndex = endIndex;
      this.endOpenTag(false);
      // Set `startIndex` for next node
      this.startIndex = endIndex + 1;
    }
    /** @internal */
  }, {
    key: "onclosetag",
    value: function onclosetag(start, endIndex) {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      this.endIndex = endIndex;
      var name = this.getSlice(start, endIndex);
      if (this.lowerCaseTagNames) {
        name = name.toLowerCase();
      }
      if (this.htmlMode && (foreignContextElements.has(name) || htmlIntegrationElements.has(name))) {
        this.foreignContext.shift();
      }
      if (!this.isVoidElement(name)) {
        var pos = this.stack.indexOf(name);
        if (pos !== -1) {
          for (var index = 0; index <= pos; index++) {
            var element = this.stack.shift();
            // We know the stack has sufficient elements.
            (_b = (_a = this.cbs).onclosetag) === null || _b === undefined ? undefined : _b.call(_a, element, index !== pos);
          }
        } else if (this.htmlMode && name === "p") {
          // Implicit open before close
          this.emitOpenTag("p");
          this.closeCurrentTag(true);
        }
      } else if (this.htmlMode && name === "br") {
        // We can't use `emitOpenTag` for implicit open, as `br` would be implicitly closed.
        (_d = (_c = this.cbs).onopentagname) === null || _d === undefined ? undefined : _d.call(_c, "br");
        (_f = (_e = this.cbs).onopentag) === null || _f === undefined ? undefined : _f.call(_e, "br", {}, true);
        (_h = (_g = this.cbs).onclosetag) === null || _h === undefined ? undefined : _h.call(_g, "br", false);
      }
      // Set `startIndex` for next node
      this.startIndex = endIndex + 1;
    }
    /** @internal */
  }, {
    key: "onselfclosingtag",
    value: function onselfclosingtag(endIndex) {
      this.endIndex = endIndex;
      if (this.recognizeSelfClosing || this.foreignContext[0]) {
        this.closeCurrentTag(false);
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
      } else {
        // Ignore the fact that the tag is self-closing.
        this.onopentagend(endIndex);
      }
    }
  }, {
    key: "closeCurrentTag",
    value: function closeCurrentTag(isOpenImplied) {
      var _a, _b;
      var name = this.tagname;
      this.endOpenTag(isOpenImplied);
      // Self-closing tags will be on the top of the stack
      if (this.stack[0] === name) {
        // If the opening tag isn't implied, the closing tag has to be implied.
        (_b = (_a = this.cbs).onclosetag) === null || _b === undefined ? undefined : _b.call(_a, name, !isOpenImplied);
        this.stack.shift();
      }
    }
    /** @internal */
  }, {
    key: "onattribname",
    value: function onattribname(start, endIndex) {
      this.startIndex = start;
      var name = this.getSlice(start, endIndex);
      this.attribname = this.lowerCaseAttributeNames ? name.toLowerCase() : name;
    }
    /** @internal */
  }, {
    key: "onattribdata",
    value: function onattribdata(start, endIndex) {
      this.attribvalue += this.getSlice(start, endIndex);
    }
    /** @internal */
  }, {
    key: "onattribentity",
    value: function onattribentity(cp) {
      this.attribvalue += fromCodePoint(cp);
    }
    /** @internal */
  }, {
    key: "onattribend",
    value: function onattribend(quote, endIndex) {
      var _a, _b;
      this.endIndex = endIndex;
      (_b = (_a = this.cbs).onattribute) === null || _b === undefined ? undefined : _b.call(_a, this.attribname, this.attribvalue, quote === QuoteType.Double ? '"' : quote === QuoteType.Single ? "'" : quote === QuoteType.NoValue ? undefined : null);
      if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
        this.attribs[this.attribname] = this.attribvalue;
      }
      this.attribvalue = "";
    }
  }, {
    key: "getInstructionName",
    value: function getInstructionName(value) {
      var index = value.search(reNameEnd);
      var name = index < 0 ? value : value.substr(0, index);
      if (this.lowerCaseTagNames) {
        name = name.toLowerCase();
      }
      return name;
    }
    /** @internal */
  }, {
    key: "ondeclaration",
    value: function ondeclaration(start, endIndex) {
      this.endIndex = endIndex;
      var value = this.getSlice(start, endIndex);
      if (this.cbs.onprocessinginstruction) {
        var name = this.getInstructionName(value);
        this.cbs.onprocessinginstruction("!".concat(name), "!".concat(value));
      }
      // Set `startIndex` for next node
      this.startIndex = endIndex + 1;
    }
    /** @internal */
  }, {
    key: "onprocessinginstruction",
    value: function onprocessinginstruction(start, endIndex) {
      this.endIndex = endIndex;
      var value = this.getSlice(start, endIndex);
      if (this.cbs.onprocessinginstruction) {
        var name = this.getInstructionName(value);
        this.cbs.onprocessinginstruction("?".concat(name), "?".concat(value));
      }
      // Set `startIndex` for next node
      this.startIndex = endIndex + 1;
    }
    /** @internal */
  }, {
    key: "oncomment",
    value: function oncomment(start, endIndex, offset) {
      var _a, _b, _c, _d;
      this.endIndex = endIndex;
      (_b = (_a = this.cbs).oncomment) === null || _b === undefined ? undefined : _b.call(_a, this.getSlice(start, endIndex - offset));
      (_d = (_c = this.cbs).oncommentend) === null || _d === undefined ? undefined : _d.call(_c);
      // Set `startIndex` for next node
      this.startIndex = endIndex + 1;
    }
    /** @internal */
  }, {
    key: "oncdata",
    value: function oncdata(start, endIndex, offset) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
      this.endIndex = endIndex;
      var value = this.getSlice(start, endIndex - offset);
      if (!this.htmlMode || this.options.recognizeCDATA) {
        (_b = (_a = this.cbs).oncdatastart) === null || _b === undefined ? undefined : _b.call(_a);
        (_d = (_c = this.cbs).ontext) === null || _d === undefined ? undefined : _d.call(_c, value);
        (_f = (_e = this.cbs).oncdataend) === null || _f === undefined ? undefined : _f.call(_e);
      } else {
        (_h = (_g = this.cbs).oncomment) === null || _h === undefined ? undefined : _h.call(_g, "[CDATA[".concat(value, "]]"));
        (_k = (_j = this.cbs).oncommentend) === null || _k === undefined ? undefined : _k.call(_j);
      }
      // Set `startIndex` for next node
      this.startIndex = endIndex + 1;
    }
    /** @internal */
  }, {
    key: "onend",
    value: function onend() {
      var _a, _b;
      if (this.cbs.onclosetag) {
        // Set the end index for all remaining tags
        this.endIndex = this.startIndex;
        for (var index = 0; index < this.stack.length; index++) {
          this.cbs.onclosetag(this.stack[index], true);
        }
      }
      (_b = (_a = this.cbs).onend) === null || _b === undefined ? undefined : _b.call(_a);
    }
    /**
     * Resets the parser to a blank state, ready to parse a new HTML document
     */
  }, {
    key: "reset",
    value: function reset() {
      var _a, _b, _c, _d;
      (_b = (_a = this.cbs).onreset) === null || _b === undefined ? undefined : _b.call(_a);
      this.tokenizer.reset();
      this.tagname = "";
      this.attribname = "";
      this.attribs = null;
      this.stack.length = 0;
      this.startIndex = 0;
      this.endIndex = 0;
      (_d = (_c = this.cbs).onparserinit) === null || _d === undefined ? undefined : _d.call(_c, this);
      this.buffers.length = 0;
      this.foreignContext.length = 0;
      this.foreignContext.unshift(!this.htmlMode);
      this.bufferOffset = 0;
      this.writeIndex = 0;
      this.ended = false;
    }
    /**
     * Resets the parser, then parses a complete document and
     * pushes it to the handler.
     *
     * @param data Document to parse.
     */
  }, {
    key: "parseComplete",
    value: function parseComplete(data) {
      this.reset();
      this.end(data);
    }
  }, {
    key: "getSlice",
    value: function getSlice(start, end) {
      while (start - this.bufferOffset >= this.buffers[0].length) {
        this.shiftBuffer();
      }
      var slice = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
      while (end - this.bufferOffset > this.buffers[0].length) {
        this.shiftBuffer();
        slice += this.buffers[0].slice(0, end - this.bufferOffset);
      }
      return slice;
    }
  }, {
    key: "shiftBuffer",
    value: function shiftBuffer() {
      this.bufferOffset += this.buffers[0].length;
      this.writeIndex--;
      this.buffers.shift();
    }
    /**
     * Parses a chunk of data and calls the corresponding callbacks.
     *
     * @param chunk Chunk to parse.
     */
  }, {
    key: "write",
    value: function write(chunk) {
      var _a, _b;
      if (this.ended) {
        (_b = (_a = this.cbs).onerror) === null || _b === undefined ? undefined : _b.call(_a, new Error(".write() after done!"));
        return;
      }
      this.buffers.push(chunk);
      if (this.tokenizer.running) {
        this.tokenizer.write(chunk);
        this.writeIndex++;
      }
    }
    /**
     * Parses the end of the buffer and clears the stack, calls onend.
     *
     * @param chunk Optional final chunk to parse.
     */
  }, {
    key: "end",
    value: function end(chunk) {
      var _a, _b;
      if (this.ended) {
        (_b = (_a = this.cbs).onerror) === null || _b === undefined ? undefined : _b.call(_a, new Error(".end() after done!"));
        return;
      }
      if (chunk) this.write(chunk);
      this.ended = true;
      this.tokenizer.end();
    }
    /**
     * Pauses parsing. The parser won't emit events until `resume` is called.
     */
  }, {
    key: "pause",
    value: function pause() {
      this.tokenizer.pause();
    }
    /**
     * Resumes parsing after `pause` was called.
     */
  }, {
    key: "resume",
    value: function resume() {
      this.tokenizer.resume();
      while (this.tokenizer.running && this.writeIndex < this.buffers.length) {
        this.tokenizer.write(this.buffers[this.writeIndex++]);
      }
      if (this.ended) this.tokenizer.end();
    }
    /**
     * Alias of `write`, for backwards compatibility.
     *
     * @param chunk Chunk to parse.
     * @deprecated
     */
  }, {
    key: "parseChunk",
    value: function parseChunk(chunk) {
      this.write(chunk);
    }
    /**
     * Alias of `end`, for backwards compatibility.
     *
     * @param chunk Optional final chunk to parse.
     * @deprecated
     */
  }, {
    key: "done",
    value: function done(chunk) {
      this.end(chunk);
    }
  }]);
}();

/** Types of elements found in htmlparser2's DOM */
var ElementType;
(function (ElementType) {
  /** Type for the root element of a document */
  ElementType["Root"] = "root";
  /** Type for Text */
  ElementType["Text"] = "text";
  /** Type for <? ... ?> */
  ElementType["Directive"] = "directive";
  /** Type for <!-- ... --> */
  ElementType["Comment"] = "comment";
  /** Type for <script> tags */
  ElementType["Script"] = "script";
  /** Type for <style> tags */
  ElementType["Style"] = "style";
  /** Type for Any tag */
  ElementType["Tag"] = "tag";
  /** Type for <![CDATA[ ... ]]> */
  ElementType["CDATA"] = "cdata";
  /** Type for <!doctype ...> */
  ElementType["Doctype"] = "doctype";
})(ElementType || (ElementType = {}));
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
function isTag$1(elem) {
  return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
}
// Exports for backwards compatibility
/** Type for the root element of a document */
var Root = ElementType.Root;
/** Type for Text */
var Text$1 = ElementType.Text;
/** Type for <? ... ?> */
var Directive = ElementType.Directive;
/** Type for <!-- ... --> */
var Comment$1 = ElementType.Comment;
/** Type for <script> tags */
var Script = ElementType.Script;
/** Type for <style> tags */
var Style = ElementType.Style;
/** Type for Any tag */
var Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */
var CDATA$1 = ElementType.CDATA;
/** Type for <!doctype ...> */
var Doctype = ElementType.Doctype;

/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */
var Node = /*#__PURE__*/function () {
  function Node() {
    _classCallCheck(this, Node);
    /** Parent of the node */
    this.parent = null;
    /** Previous sibling */
    this.prev = null;
    /** Next sibling */
    this.next = null;
    /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
    this.startIndex = null;
    /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
    this.endIndex = null;
  }
  // Read-write aliases for properties
  /**
   * Same as {@link parent}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  return _createClass(Node, [{
    key: "parentNode",
    get: function get() {
      return this.parent;
    },
    set: function set(parent) {
      this.parent = parent;
    }
    /**
     * Same as {@link prev}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
  }, {
    key: "previousSibling",
    get: function get() {
      return this.prev;
    },
    set: function set(prev) {
      this.prev = prev;
    }
    /**
     * Same as {@link next}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
  }, {
    key: "nextSibling",
    get: function get() {
      return this.next;
    },
    set: function set(next) {
      this.next = next;
    }
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */
  }, {
    key: "cloneNode",
    value: function cloneNode() {
      var recursive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return _cloneNode(this, recursive);
    }
  }]);
}();
/**
 * A node that contains some data.
 */
var DataNode = /*#__PURE__*/function (_Node) {
  /**
   * @param data The content of the data node
   */
  function DataNode(data) {
    var _this;
    _classCallCheck(this, DataNode);
    _this = _callSuper(this, DataNode);
    _this.data = data;
    return _this;
  }
  /**
   * Same as {@link data}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  _inherits(DataNode, _Node);
  return _createClass(DataNode, [{
    key: "nodeValue",
    get: function get() {
      return this.data;
    },
    set: function set(data) {
      this.data = data;
    }
  }]);
}(Node);
/**
 * Text within the document.
 */
var Text = /*#__PURE__*/function (_DataNode) {
  function Text() {
    var _this2;
    _classCallCheck(this, Text);
    _this2 = _callSuper(this, Text, arguments);
    _this2.type = ElementType.Text;
    return _this2;
  }
  _inherits(Text, _DataNode);
  return _createClass(Text, [{
    key: "nodeType",
    get: function get() {
      return 3;
    }
  }]);
}(DataNode);
/**
 * Comments within the document.
 */
var Comment = /*#__PURE__*/function (_DataNode2) {
  function Comment() {
    var _this3;
    _classCallCheck(this, Comment);
    _this3 = _callSuper(this, Comment, arguments);
    _this3.type = ElementType.Comment;
    return _this3;
  }
  _inherits(Comment, _DataNode2);
  return _createClass(Comment, [{
    key: "nodeType",
    get: function get() {
      return 8;
    }
  }]);
}(DataNode);
/**
 * Processing instructions, including doc types.
 */
var ProcessingInstruction = /*#__PURE__*/function (_DataNode3) {
  function ProcessingInstruction(name, data) {
    var _this4;
    _classCallCheck(this, ProcessingInstruction);
    _this4 = _callSuper(this, ProcessingInstruction, [data]);
    _this4.name = name;
    _this4.type = ElementType.Directive;
    return _this4;
  }
  _inherits(ProcessingInstruction, _DataNode3);
  return _createClass(ProcessingInstruction, [{
    key: "nodeType",
    get: function get() {
      return 1;
    }
  }]);
}(DataNode);
/**
 * A `Node` that can have children.
 */
var NodeWithChildren = /*#__PURE__*/function (_Node2) {
  /**
   * @param children Children of the node. Only certain node types can have children.
   */
  function NodeWithChildren(children) {
    var _this5;
    _classCallCheck(this, NodeWithChildren);
    _this5 = _callSuper(this, NodeWithChildren);
    _this5.children = children;
    return _this5;
  }
  // Aliases
  /** First child of the node. */
  _inherits(NodeWithChildren, _Node2);
  return _createClass(NodeWithChildren, [{
    key: "firstChild",
    get: function get() {
      var _a;
      return (_a = this.children[0]) !== null && _a !== undefined ? _a : null;
    }
    /** Last child of the node. */
  }, {
    key: "lastChild",
    get: function get() {
      return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    }
    /**
     * Same as {@link children}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
  }, {
    key: "childNodes",
    get: function get() {
      return this.children;
    },
    set: function set(children) {
      this.children = children;
    }
  }]);
}(Node);
var CDATA = /*#__PURE__*/function (_NodeWithChildren) {
  function CDATA() {
    var _this6;
    _classCallCheck(this, CDATA);
    _this6 = _callSuper(this, CDATA, arguments);
    _this6.type = ElementType.CDATA;
    return _this6;
  }
  _inherits(CDATA, _NodeWithChildren);
  return _createClass(CDATA, [{
    key: "nodeType",
    get: function get() {
      return 4;
    }
  }]);
}(NodeWithChildren);
/**
 * The root node of the document.
 */
var Document = /*#__PURE__*/function (_NodeWithChildren2) {
  function Document() {
    var _this7;
    _classCallCheck(this, Document);
    _this7 = _callSuper(this, Document, arguments);
    _this7.type = ElementType.Root;
    return _this7;
  }
  _inherits(Document, _NodeWithChildren2);
  return _createClass(Document, [{
    key: "nodeType",
    get: function get() {
      return 9;
    }
  }]);
}(NodeWithChildren);
/**
 * An element within the DOM.
 */
var Element = /*#__PURE__*/function (_NodeWithChildren3) {
  /**
   * @param name Name of the tag, eg. `div`, `span`.
   * @param attribs Object mapping attribute names to attribute values.
   * @param children Children of the node.
   */
  function Element(name, attribs) {
    var _this8;
    var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : name === "script" ? ElementType.Script : name === "style" ? ElementType.Style : ElementType.Tag;
    _classCallCheck(this, Element);
    _this8 = _callSuper(this, Element, [children]);
    _this8.name = name;
    _this8.attribs = attribs;
    _this8.type = type;
    return _this8;
  }
  _inherits(Element, _NodeWithChildren3);
  return _createClass(Element, [{
    key: "nodeType",
    get: function get() {
      return 1;
    }
    // DOM Level 1 aliases
    /**
     * Same as {@link name}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
  }, {
    key: "tagName",
    get: function get() {
      return this.name;
    },
    set: function set(name) {
      this.name = name;
    }
  }, {
    key: "attributes",
    get: function get() {
      var _this9 = this;
      return Object.keys(this.attribs).map(function (name) {
        var _a, _b;
        return {
          name: name,
          value: _this9.attribs[name],
          namespace: (_a = _this9["x-attribsNamespace"]) === null || _a === undefined ? undefined : _a[name],
          prefix: (_b = _this9["x-attribsPrefix"]) === null || _b === undefined ? undefined : _b[name]
        };
      });
    }
  }]);
}(NodeWithChildren);
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */
function isTag(node) {
  return isTag$1(node);
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */
function isCDATA(node) {
  return node.type === ElementType.CDATA;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */
function isText(node) {
  return node.type === ElementType.Text;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */
function isComment(node) {
  return node.type === ElementType.Comment;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDirective(node) {
  return node.type === ElementType.Directive;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDocument(node) {
  return node.type === ElementType.Root;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has children, `false` otherwise.
 */
function hasChildren(node) {
  return Object.prototype.hasOwnProperty.call(node, "children");
}
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */
function _cloneNode(node) {
  var recursive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var result;
  if (isText(node)) {
    result = new Text(node.data);
  } else if (isComment(node)) {
    result = new Comment(node.data);
  } else if (isTag(node)) {
    var children = recursive ? cloneChildren(node.children) : [];
    var clone = new Element(node.name, _objectSpread2({}, node.attribs), children);
    children.forEach(function (child) {
      return child.parent = clone;
    });
    if (node.namespace != null) {
      clone.namespace = node.namespace;
    }
    if (node["x-attribsNamespace"]) {
      clone["x-attribsNamespace"] = _objectSpread2({}, node["x-attribsNamespace"]);
    }
    if (node["x-attribsPrefix"]) {
      clone["x-attribsPrefix"] = _objectSpread2({}, node["x-attribsPrefix"]);
    }
    result = clone;
  } else if (isCDATA(node)) {
    var _children = recursive ? cloneChildren(node.children) : [];
    var _clone = new CDATA(_children);
    _children.forEach(function (child) {
      return child.parent = _clone;
    });
    result = _clone;
  } else if (isDocument(node)) {
    var _children2 = recursive ? cloneChildren(node.children) : [];
    var _clone2 = new Document(_children2);
    _children2.forEach(function (child) {
      return child.parent = _clone2;
    });
    if (node["x-mode"]) {
      _clone2["x-mode"] = node["x-mode"];
    }
    result = _clone2;
  } else if (isDirective(node)) {
    var instruction = new ProcessingInstruction(node.name, node.data);
    if (node["x-name"] != null) {
      instruction["x-name"] = node["x-name"];
      instruction["x-publicId"] = node["x-publicId"];
      instruction["x-systemId"] = node["x-systemId"];
    }
    result = instruction;
  } else {
    throw new Error("Not implemented yet: ".concat(node.type));
  }
  result.startIndex = node.startIndex;
  result.endIndex = node.endIndex;
  if (node.sourceCodeLocation != null) {
    result.sourceCodeLocation = node.sourceCodeLocation;
  }
  return result;
}
function cloneChildren(childs) {
  var children = childs.map(function (child) {
    return _cloneNode(child, true);
  });
  for (var i = 1; i < children.length; i++) {
    children[i].prev = children[i - 1];
    children[i - 1].next = children[i];
  }
  return children;
}

// Default options
var defaultOpts = {
  withStartIndices: false,
  withEndIndices: false,
  xmlMode: false
};
var DomHandler = /*#__PURE__*/function () {
  /**
   * @param callback Called once parsing has completed.
   * @param options Settings for the handler.
   * @param elementCB Callback whenever a tag is closed.
   */
  function DomHandler(callback, options, elementCB) {
    _classCallCheck(this, DomHandler);
    /** The elements of the DOM */
    this.dom = [];
    /** The root element for the DOM */
    this.root = new Document(this.dom);
    /** Indicated whether parsing has been completed. */
    this.done = false;
    /** Stack of open tags. */
    this.tagStack = [this.root];
    /** A data node that is still being written to. */
    this.lastNode = null;
    /** Reference to the parser instance. Used for location information. */
    this.parser = null;
    // Make it possible to skip arguments, for backwards-compatibility
    if (typeof options === "function") {
      elementCB = options;
      options = defaultOpts;
    }
    if (_typeof(callback) === "object") {
      options = callback;
      callback = undefined;
    }
    this.callback = callback !== null && callback !== undefined ? callback : null;
    this.options = options !== null && options !== undefined ? options : defaultOpts;
    this.elementCB = elementCB !== null && elementCB !== undefined ? elementCB : null;
  }
  return _createClass(DomHandler, [{
    key: "onparserinit",
    value: function onparserinit(parser) {
      this.parser = parser;
    }
    // Resets the handler back to starting state
  }, {
    key: "onreset",
    value: function onreset() {
      this.dom = [];
      this.root = new Document(this.dom);
      this.done = false;
      this.tagStack = [this.root];
      this.lastNode = null;
      this.parser = null;
    }
    // Signals the handler that parsing is done
  }, {
    key: "onend",
    value: function onend() {
      if (this.done) return;
      this.done = true;
      this.parser = null;
      this.handleCallback(null);
    }
  }, {
    key: "onerror",
    value: function onerror(error) {
      this.handleCallback(error);
    }
  }, {
    key: "onclosetag",
    value: function onclosetag() {
      this.lastNode = null;
      var elem = this.tagStack.pop();
      if (this.options.withEndIndices) {
        elem.endIndex = this.parser.endIndex;
      }
      if (this.elementCB) this.elementCB(elem);
    }
  }, {
    key: "onopentag",
    value: function onopentag(name, attribs) {
      var type = this.options.xmlMode ? ElementType.Tag : undefined;
      var element = new Element(name, attribs, undefined, type);
      this.addNode(element);
      this.tagStack.push(element);
    }
  }, {
    key: "ontext",
    value: function ontext(data) {
      var lastNode = this.lastNode;
      if (lastNode && lastNode.type === ElementType.Text) {
        lastNode.data += data;
        if (this.options.withEndIndices) {
          lastNode.endIndex = this.parser.endIndex;
        }
      } else {
        var node = new Text(data);
        this.addNode(node);
        this.lastNode = node;
      }
    }
  }, {
    key: "oncomment",
    value: function oncomment(data) {
      if (this.lastNode && this.lastNode.type === ElementType.Comment) {
        this.lastNode.data += data;
        return;
      }
      var node = new Comment(data);
      this.addNode(node);
      this.lastNode = node;
    }
  }, {
    key: "oncommentend",
    value: function oncommentend() {
      this.lastNode = null;
    }
  }, {
    key: "oncdatastart",
    value: function oncdatastart() {
      var text = new Text("");
      var node = new CDATA([text]);
      this.addNode(node);
      text.parent = node;
      this.lastNode = text;
    }
  }, {
    key: "oncdataend",
    value: function oncdataend() {
      this.lastNode = null;
    }
  }, {
    key: "onprocessinginstruction",
    value: function onprocessinginstruction(name, data) {
      var node = new ProcessingInstruction(name, data);
      this.addNode(node);
    }
  }, {
    key: "handleCallback",
    value: function handleCallback(error) {
      if (typeof this.callback === "function") {
        this.callback(error, this.dom);
      } else if (error) {
        throw error;
      }
    }
  }, {
    key: "addNode",
    value: function addNode(node) {
      var parent = this.tagStack[this.tagStack.length - 1];
      var previousSibling = parent.children[parent.children.length - 1];
      if (this.options.withStartIndices) {
        node.startIndex = this.parser.startIndex;
      }
      if (this.options.withEndIndices) {
        node.endIndex = this.parser.endIndex;
      }
      parent.children.push(node);
      if (previousSibling) {
        node.prev = previousSibling;
        previousSibling.next = node;
      }
      node.parent = parent;
      this.lastNode = null;
    }
  }]);
}();

var xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
var xmlCodeMap = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]);
// For compatibility with node < 4, we wrap `codePointAt`
var getCodePoint =
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null ? function (str, index) {
  return str.codePointAt(index);
} :
// http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
function (c, index) {
  return (c.charCodeAt(index) & 0xfc00) === 0xd800 ? (c.charCodeAt(index) - 0xd800) * 0x400 + c.charCodeAt(index + 1) - 0xdc00 + 0x10000 : c.charCodeAt(index);
};
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
function encodeXML(str) {
  var ret = "";
  var lastIdx = 0;
  var match;
  while ((match = xmlReplacer.exec(str)) !== null) {
    var i = match.index;
    var _char = str.charCodeAt(i);
    var next = xmlCodeMap.get(_char);
    if (next !== undefined) {
      ret += str.substring(lastIdx, i) + next;
      lastIdx = i + 1;
    } else {
      ret += "".concat(str.substring(lastIdx, i), "&#x").concat(getCodePoint(str, i).toString(16), ";");
      // Increase by 1 if we have a surrogate pair
      lastIdx = xmlReplacer.lastIndex += Number((_char & 0xfc00) === 0xd800);
    }
  }
  return ret + str.substr(lastIdx);
}
/**
 * Creates a function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 *
 * @param regex Regular expression to match characters to escape.
 * @param map Map of characters to escape to their entities.
 *
 * @returns Function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 */
function getEscaper(regex, map) {
  return function escape(data) {
    var match;
    var lastIdx = 0;
    var result = "";
    while (match = regex.exec(data)) {
      if (lastIdx !== match.index) {
        result += data.substring(lastIdx, match.index);
      }
      // We know that this character will be in the map.
      result += map.get(match[0].charCodeAt(0));
      // Every match will be of length 1
      lastIdx = match.index + 1;
    }
    return result + data.substring(lastIdx);
  };
}
/**
 * Encodes all characters that have to be escaped in HTML attributes,
 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
 *
 * @param data String to escape.
 */
var escapeAttribute = getEscaper(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]]));
/**
 * Encodes all characters that have to be escaped in HTML text,
 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
 *
 * @param data String to escape.
 */
var escapeText = getEscaper(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));

var elementNames = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (val) {
  return [val.toLowerCase(), val];
}));
var attributeNames = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (val) {
  return [val.toLowerCase(), val];
}));

var unencodedElements = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function replaceQuotes(value) {
  return value.replace(/"/g, "&quot;");
}
/**
 * Format attributes
 */
function formatAttributes(attributes, opts) {
  var _a;
  if (!attributes) return;
  var encode = ((_a = opts.encodeEntities) !== null && _a !== undefined ? _a : opts.decodeEntities) === false ? replaceQuotes : opts.xmlMode || opts.encodeEntities !== "utf8" ? encodeXML : escapeAttribute;
  return Object.keys(attributes).map(function (key) {
    var _a, _b;
    var value = (_a = attributes[key]) !== null && _a !== undefined ? _a : "";
    if (opts.xmlMode === "foreign") {
      /* Fix up mixed-case attribute names */
      key = (_b = attributeNames.get(key)) !== null && _b !== undefined ? _b : key;
    }
    if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
      return key;
    }
    return "".concat(key, "=\"").concat(encode(value), "\"");
  }).join(" ");
}
/**
 * Self-enclosing tags
 */
var singleTag = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
/**
 * Renders a DOM node or an array of DOM nodes to a string.
 *
 * Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
 *
 * @param node Node to be rendered.
 * @param options Changes serialization behavior
 */
function render(node) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var nodes = "length" in node ? node : [node];
  var output = "";
  for (var i = 0; i < nodes.length; i++) {
    output += renderNode(nodes[i], options);
  }
  return output;
}
function renderNode(node, options) {
  switch (node.type) {
    case Root:
      return render(node.children, options);
    // @ts-expect-error We don't use `Doctype` yet
    case Doctype:
    case Directive:
      return renderDirective(node);
    case Comment$1:
      return renderComment(node);
    case CDATA$1:
      return renderCdata(node);
    case Script:
    case Style:
    case Tag:
      return renderTag(node, options);
    case Text$1:
      return renderText(node, options);
  }
}
var foreignModeIntegrationPoints = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]);
var foreignElements = new Set(["svg", "math"]);
function renderTag(elem, opts) {
  var _a;
  // Handle SVG / MathML in HTML
  if (opts.xmlMode === "foreign") {
    /* Fix up mixed-case element names */
    elem.name = (_a = elementNames.get(elem.name)) !== null && _a !== undefined ? _a : elem.name;
    /* Exit foreign mode at integration points */
    if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
      opts = _objectSpread2(_objectSpread2({}, opts), {}, {
        xmlMode: false
      });
    }
  }
  if (!opts.xmlMode && foreignElements.has(elem.name)) {
    opts = _objectSpread2(_objectSpread2({}, opts), {}, {
      xmlMode: "foreign"
    });
  }
  var tag = "<".concat(elem.name);
  var attribs = formatAttributes(elem.attribs, opts);
  if (attribs) {
    tag += " ".concat(attribs);
  }
  if (elem.children.length === 0 && (opts.xmlMode ?
  // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
  opts.selfClosingTags !== false :
  // User explicitly asked for self-closing tags, even in HTML mode
  opts.selfClosingTags && singleTag.has(elem.name))) {
    if (!opts.xmlMode) tag += " ";
    tag += "/>";
  } else {
    tag += ">";
    if (elem.children.length > 0) {
      tag += render(elem.children, opts);
    }
    if (opts.xmlMode || !singleTag.has(elem.name)) {
      tag += "</".concat(elem.name, ">");
    }
  }
  return tag;
}
function renderDirective(elem) {
  return "<".concat(elem.data, ">");
}
function renderText(elem, opts) {
  var _a;
  var data = elem.data || "";
  // If entities weren't decoded, no need to encode them back
  if (((_a = opts.encodeEntities) !== null && _a !== undefined ? _a : opts.decodeEntities) !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
    data = opts.xmlMode || opts.encodeEntities !== "utf8" ? encodeXML(data) : escapeText(data);
  }
  return data;
}
function renderCdata(elem) {
  return "<![CDATA[".concat(elem.children[0].data, "]]>");
}
function renderComment(elem) {
  return "<!--".concat(elem.data, "-->");
}

/**
 * Replace an element in the dom
 *
 * @category Manipulation
 * @param elem The element to be replaced
 * @param replacement The element to be added
 */
function replaceElement(elem, replacement) {
  var prev = replacement.prev = elem.prev;
  if (prev) {
    prev.next = replacement;
  }
  var next = replacement.next = elem.next;
  if (next) {
    next.prev = replacement;
  }
  var parent = replacement.parent = elem.parent;
  if (parent) {
    var childs = parent.children;
    childs[childs.lastIndexOf(elem)] = replacement;
    elem.parent = null;
  }
}

/**
 * Finds one element in a tree that passes a test.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Node or array of nodes to search.
 * @param recurse Also consider child nodes.
 * @returns The first node that passes `test`.
 */
function findOne(test, nodes) {
  var recurse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var searchedNodes = Array.isArray(nodes) ? nodes : [nodes];
  for (var i = 0; i < searchedNodes.length; i++) {
    var node = searchedNodes[i];
    if (isTag(node) && test(node)) {
      return node;
    }
    if (recurse && hasChildren(node) && node.children.length > 0) {
      var found = findOne(test, node.children, true);
      if (found) return found;
    }
  }
  return null;
}
/**
 * Search an array of nodes and their children for elements passing a test function.
 *
 * Same as `find`, but limited to elements and with less options, leading to reduced complexity.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns All nodes passing `test`.
 */
function findAll(test, nodes) {
  var result = [];
  var nodeStack = [Array.isArray(nodes) ? nodes : [nodes]];
  var indexStack = [0];
  for (;;) {
    if (indexStack[0] >= nodeStack[0].length) {
      if (nodeStack.length === 1) {
        return result;
      }
      // Otherwise, remove the current array from the stack.
      nodeStack.shift();
      indexStack.shift();
      // Loop back to the start to continue with the next array.
      continue;
    }
    var elem = nodeStack[0][indexStack[0]++];
    if (isTag(elem) && test(elem)) result.push(elem);
    if (hasChildren(elem) && elem.children.length > 0) {
      indexStack.unshift(0);
      nodeStack.unshift(elem.children);
    }
  }
}

// Helper methods
/**
 * Parses the data, returns the resulting document.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM handler.
 */
function parseDocument(data, options) {
  var handler = new DomHandler(undefined, options);
  new Parser(handler, options).end(data);
  return handler.root;
}

class InputSettings {
    type;
    style;
    width;
    isNull;
    minValue;
    maxValue;
    maxCharacter;
    minDecimalForFloat;
    maxDecimalForFloat;
    selectList;
    selectValueStr;
    constructor(options) {
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
class Input {
    el;
    id;
    constructor(input) {
        if (typeof input === 'string') {
            const doc = parseDocument(input);
            this.el = findOne(el => {
                const clazz = el.attribs.class;
                return !!clazz && clazz.includes(Config.inputClassName);
            }, doc.children);
        }
        else {
            this.el = input;
        }
        this.el = this.parse();
        this.id = this?.el?.attribs?.inputid ?? uuid$1();
    }
    render() {
        if (!this.el)
            return '';
        return render(this.el, {
            // 是否对HTML中的保留字进行编码处理，例如&nbsp;会被编码成&#xa0;
            encodeEntities: false
        });
    }
    parse() {
        if (!this.el)
            return null;
        return this.parseTextInput(this.el);
    }
    /**
     * 把具有Config.inputClassName类名的div元素，替换为input元素
     * @param el Element
     * @returns
     */
    parseTextInput(el) {
        const attribs = el.attribs;
        const settings = this.getInputSettings(attribs.data);
        const options = {
            type: 'text',
            class: attribs.class || '',
            inputid: attribs.inputid ?? uuid$1(),
            autocomplete: 'new-password',
            data: attribs.data || '',
            maxlength: settings.maxCharacter.toString(),
            style: `width: ${settings.width}px`
        };
        if (settings.type == InputTypeEnum.SELECT) {
            options.type = 'button';
        }
        if (settings.style == InputBorderStyleEnum.ALLBORDER) {
            options.class += ' allBorder';
        }
        else {
            options.class += ' underline';
        }
        const input = new Element$1('input', options);
        return input;
    }
    getInputSettings(settingStr) {
        try {
            const o = JSON.parse(settingStr);
            return new InputSettings(o);
        }
        catch (e) {
            return new InputSettings();
        }
    }
}
class RichText {
    text;
    html;
    resourceList;
    isHtml;
    inputIds = new Set();
    constructor(props) {
        props = props ?? {};
        this.text = props.text ?? '';
        this.html = props.html ?? '';
        this.resourceList = props.resourceList ?? [];
        this.isHtml = props.isHtml ?? false;
        this.parse();
    }
    parse() {
        if (!this.isHtml || !this.html)
            return;
        const doc = parseDocument(this.html);
        // 处理资源
        // 处理填空
        this.parseInput(doc);
    }
    parseInput(doc) {
        const inputList = findAll(el => {
            const clazz = el.attribs.class;
            return !!clazz && clazz.includes(Config.inputClassName);
        }, doc.childNodes);
        for (const el of inputList) {
            const input = new Input(el);
            if (input.el) {
                replaceElement(el, input.el);
                this.inputIds.add(input.id);
            }
        }
        this.html = render(doc, {
            // 是否对HTML中的保留字进行编码处理，例如&nbsp;会被编码成&#xa0;
            encodeEntities: false
        });
    }
    parseResource(doc) {
        // 把image的src都去掉
        // 音视频的占位图片由css来处理，作答端、管理端引入不同的css
        // 解析image属性
        // const imageList = 
    }
}

/**
 * 实例id
 */
let instanceUid = 0;
/**
 * @class
 * @classdesc 题目基类
 */
class Question extends Duplex {
    _instanceId;
    pageId;
    id;
    index;
    title;
    version;
    updateVersion;
    tips;
    isMustAnswer;
    isChildQuestion;
    parentId;
    isAssist;
    canDrag;
    insertParentType;
    // 题目中设置了规则时，影响到的题目id
    involvedQuestionIds = new Set();
    // 题目显示状态，true：显示，false：隐藏
    visiable = false;
    // 题目初始默认值，在初始化题目时得到，用于在规则未触发时，还原状态
    originVisiable = false;
    constructor(props) {
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
    update() {
    }
    /**
     * 反馈变化
     */
    emitChange() {
        this.publish(this.pageId, this);
    }
}

/**
 * 题目规则
 *
 * visiable: 显隐规则
 *      选中某个选项后，可设置某些题目显示或隐藏
 *      visiable[n].visiable为true时，选中选项后设置目标题目为显示状态，目标题目初始状态为隐藏
 *      visiable[n].visiable为false时，选中选项后设置目标题目为隐藏状态，目标题目初始状态为显示
 *      单选、多选、单选表格题支持此规则
 *
 * target: 跳转规则
 *      选中某个选项后，跳转至目标题目，中间的题目都隐藏，优先级高于显隐规则
 *      目前仅单选题可以设置此规则
 *
 * relate: 选项关联规则
 *      选中某个选项时，可设置本题之后的其他选择题的某些选项不可选
 *      目前仅单选题可以设置此规则
 *
 * "rules": {
 *      "visiable": [
 *          {
 *              "id": "2ecd56b3-485c-4245-b67d-78567129e0bd",
 *              "visiable": true
 *          }
 *      ],
 *      "target": "2ecd56b3-485c-4245-b67d-78567129e0bd",
 *      "relate": [
 *           {
 *               "id": "2ecd56b3-485c-4245-b67d-78567129e0bd",
 *               "disabled": [
 *                   "2f43f94c-efa8-4bb7-9c09-b5f9900805bf"
 *               ]
 *           }
 *       ]
 * }
 */
class Rule {
    /**
     * 多个选项触发同一题显隐逻辑时的逻辑关系，默认为“或”关系
     * 具体值存储在具体的题目中，在初始化题目的时候重置此值
     */
    optionLogic = OptionLogicEnum.OR;
    /**
     * 规则所在的选项id
     */
    optionId;
    visiable;
    relate;
    target;
    constructor(props) {
        this.optionId = props?.optionId ?? '';
        this.visiable = props?.visiable ?? [];
        this.relate = props?.relate ?? [];
        this.target = props?.target ?? '';
    }
    /**
     * 当前规则关联到的所有题目
     */
    get involvedQuestionIds() {
        const visiableIds = this.visiable.map(v => v.id);
        const relateIds = this.relate.map(v => v.id);
        const ids = [...visiableIds, ...relateIds];
        if (this.target) {
            ids.push(this.target);
        }
        return new Set(ids);
    }
    /**
     * 规则是否关联到某题
     * @param questionId 题目id
     * @returns
     */
    isInvolved(questionId) {
        return this.involvedQuestionIds.has(questionId);
    }
}

class BaseOption extends RichText {
    id;
    select = false;
    constructor(props) {
        super(props);
        this.id = props.id;
    }
}
class RadioOption extends BaseOption {
    isOther = false;
    rules;
    constructor(props) {
        super(props);
        this.rules = new Rule(props.rules);
        this.rules.optionId = this.id;
    }
}
class CheckOption extends BaseOption {
    isOther = false;
    rules;
    constructor(props) {
        super(props);
        this.rules = new Rule(props.rules);
        this.rules.optionId = this.id;
    }
}
class TableOption {
    id;
    colWidth;
    value;
    rules;
    select = false;
    constructor(props) {
        this.id = props.id;
        this.colWidth = props.colWidth;
        this.value = new RichText(props.value);
        this.rules = new Rule(props.rules);
        this.rules.optionId = this.id;
    }
}

class Answer extends Duplex$1 {
    questionId;
    constructor(questionId) {
        super();
        this.questionId = questionId;
    }
}

/**
 * {
 *     "questionId": "0c45536a-8774-44fe-8c3a-ee8e529a4583",
 *     "填空1 id": "填空1答案"
 * }
 */
class BlankAnswer extends Answer {
    answerMap = new Map();
    get(inputId) {
        return this.answerMap.get(inputId) ?? '';
    }
    update(inputId, value) {
        this.answerMap.set(inputId, value);
    }
}

/**
 * {
 *    "questionId": "0c45536a-8774-44fe-8c3a-ee8e529a4583",
 *    "options": ["fsdfsdfsd123"],
 *    "blanks": {
 *         "填空1 id": "填空1答案"
 *     },
 *     "optionBlankMap": {
 *         "选项1 id": ["填空1 id", "填空2 id"]
 *     }
 * }
 */
class RadioAnswer extends Answer {
    options = new Set();
    blanks;
    // 选项id和填空id的映射关系
    optionBlankMap = new Map();
    constructor(questionId) {
        super(questionId);
        this.blanks = new BlankAnswer(questionId);
    }
    updateOptions(optionId) {
        this.options.clear();
        if (optionId) {
            this.options.add(optionId);
        }
    }
    updateBlanks(blankId, blankValue) {
        this.blanks.update(blankId, blankValue);
    }
    updateOptionBlankMap(optionId, blankIds) {
        this.optionBlankMap.set(optionId, new Set(blankIds));
    }
}

/**
 * 单选题
 */
class Radio extends Question {
    type = QuestionTypeEnum$1.Radio;
    showColNum;
    optionList;
    isShowOtherOption;
    otherOptionData;
    answer;
    constructor(props) {
        super(props);
        // 答案
        this.answer = new RadioAnswer(this.id);
        // 每列显示几个选项
        this.showColNum = props.showColNum || 1;
        // 选项列表
        this.optionList = props.optionList.map((option) => {
            const o = new RadioOption(option);
            this.answer.updateOptionBlankMap(o.id, o.inputIds);
            // 规则影响到的题目
            this.involvedQuestionIds = new Set([...this.involvedQuestionIds, ...o.rules.involvedQuestionIds]);
            return o;
        });
        // 是否显示“其他”选项
        this.isShowOtherOption = props.isShowOtherOption || false;
        // “其他”选项
        if (this.isShowOtherOption && props.otherOptionData) {
            const o = new RadioOption(props.otherOptionData);
            o.isOther = true;
            this.otherOptionData = o;
            this.optionList.push(o);
            this.answer.updateOptionBlankMap(o.id, o.inputIds);
            // 规则影响到的题目
            this.involvedQuestionIds = new Set([...this.involvedQuestionIds, ...o.rules.involvedQuestionIds]);
        }
    }
    /**
     * 选中/取消选中选项
     * @param option 选项实例
     */
    triggerOption(option) {
        this.optionList.forEach(o => {
            if (o.id !== option.id) {
                o.select = false;
                return;
            }
            o.select = !o.select;
            this.answer.updateOptions(o.select ? o.id : '');
        });
        this.emitChange();
    }
    /**
     * 更新填空
     * @param inputId 输入框id
     * @param value 输入内容
     */
    updateBlank(inputId, value) {
        this.answer.updateBlanks(inputId, value);
    }
}

var QuestionTypeEnum;
(function (QuestionTypeEnum) {
    /**
     * 单选题
     */
    QuestionTypeEnum[QuestionTypeEnum["Radio"] = 1] = "Radio";
    /**
     * 多选题
     */
    QuestionTypeEnum[QuestionTypeEnum["Check"] = 2] = "Check";
    /**
     * 表格题
     */
    QuestionTypeEnum[QuestionTypeEnum["Table"] = 3] = "Table";
    /**
     * 填空题
     */
    QuestionTypeEnum[QuestionTypeEnum["Blank"] = 4] = "Blank";
    /**
     * 简答题
     */
    QuestionTypeEnum[QuestionTypeEnum["Answer"] = 5] = "Answer";
    /**
     * 排序题
     */
    QuestionTypeEnum[QuestionTypeEnum["Rank"] = 6] = "Rank";
    /**
     * 量表题
     */
    QuestionTypeEnum[QuestionTypeEnum["Inventory"] = 7] = "Inventory";
    /**
     * 段落说明
     */
    QuestionTypeEnum[QuestionTypeEnum["Paragraph"] = 8] = "Paragraph";
    /**
     * 组合题
     */
    QuestionTypeEnum[QuestionTypeEnum["Combination"] = 9] = "Combination";
    /**
     * 题目组
     */
    QuestionTypeEnum[QuestionTypeEnum["QuestionGroup"] = 10] = "QuestionGroup";
    /**
     * 录音题
     */
    QuestionTypeEnum[QuestionTypeEnum["Record"] = 11] = "Record";
})(QuestionTypeEnum || (QuestionTypeEnum = {}));

/**
 * {
 *    "questionId": "0c45536a-8774-44fe-8c3a-ee8e529a4583",
 *    "options": ["fsdfsdfsd123"],
 *    "blanks": {
 *        "填空1 id": "填空1答案"
 *    },
 *    "optionBlankMap": {
 *        "选项1 id": ["填空1 id", "填空2 id"]
 *    }
 * }
 */
class CheckAnswer extends Answer {
    options = new Set();
    blanks;
    // 选项id和填空id的映射关系
    optionBlankMap = new Map();
    constructor(questionId) {
        super(questionId);
        this.blanks = new BlankAnswer(questionId);
    }
    updateOptions(optionIds) {
        this.options = new Set(optionIds);
    }
    updateBlanks(blankId, blankValue) {
        this.blanks.update(blankId, blankValue);
    }
    updateOptionBlankMap(optionId, blankIds) {
        this.optionBlankMap.set(optionId, new Set(blankIds));
    }
}

class Check extends Question {
    type = QuestionTypeEnum.Check;
    showColNum;
    optionList;
    isShowOtherOption;
    otherOptionData;
    isMutualRule;
    maximumCheck;
    minimumCheck;
    optionLogic;
    answer;
    constructor(props) {
        super(props);
        // 答案
        this.answer = new CheckAnswer(this.id);
        // 每列显示几个选项
        this.showColNum = props.showColNum || 1;
        // 选项列表
        this.optionList = props.optionList.map((option) => {
            const o = new CheckOption(option);
            o.rules.optionLogic = props.optionLogic;
            this.answer.updateOptionBlankMap(o.id, o.inputIds);
            // 规则影响到的题目
            this.involvedQuestionIds = new Set([...this.involvedQuestionIds, ...o.rules.involvedQuestionIds]);
            return o;
        });
        // 是否显示“其他”选项
        this.isShowOtherOption = props.isShowOtherOption || false;
        // “其他”选项
        if (this.isShowOtherOption && props.otherOptionData) {
            const o = new CheckOption(props.otherOptionData);
            o.isOther = true;
            o.rules.optionLogic = props.optionLogic;
            this.otherOptionData = o;
            this.optionList.push(o);
            this.answer.updateOptionBlankMap(o.id, o.inputIds);
            // 规则影响到的题目
            this.involvedQuestionIds = new Set([...this.involvedQuestionIds, ...o.rules.involvedQuestionIds]);
        }
        this.isMutualRule = props.isMutualRule || false;
        this.maximumCheck = props.maximumCheck || this.optionList.length;
        this.minimumCheck = props.minimumCheck || 1;
        this.optionLogic = props.optionLogic;
    }
}

/**
 * {
 *     "questionId": "0c45536a-8774-44fe-8c3a-ee8e529a4583",
 *     "titleAnswer": {
 *         "填空1 id": "填空1答案"
 *     },
 *     "dataAnswer": {
 *         "分组序号 0": {
 *             "分组问题序号 0": ["选项id 1", "选项id 2"]
 *         }
 *     }
 * }
 */
class TableAnswer extends Answer {
    titleAnswer;
    // 出题时没有设置分组id，这里使用分组的序号作为key，value为该分组的答案
    dataAnswer = new Map();
    constructor(questionId) {
        super(questionId);
        this.titleAnswer = new BlankAnswer(questionId);
    }
}

class Table extends Question {
    type = QuestionTypeEnum$1.Table;
    colWidth;
    groupList;
    isShowTitle;
    maximumCheck;
    minimumCheck;
    optionList;
    answer;
    constructor(props) {
        super(props);
        this.colWidth = props.colWidth;
        this.groupList = props.groupList.map((group) => {
            return new TableGroup(group);
        });
        this.isShowTitle = props.isShowTitle;
        this.maximumCheck = props.maximumCheck;
        this.minimumCheck = props.minimumCheck;
        this.optionList = props.optionList.map((option) => {
            return new TableOption(option);
        });
        // 答案
        this.answer = new TableAnswer(this.id);
    }
}
class TableGroup {
    title;
    optionList = [];
    constructor(props) {
        this.title = new RichText(props.title);
        this.optionList = props.optionList.map((option) => {
            return new TableGroupOption(option);
        });
    }
}
class TableGroupOption {
    value;
    answer;
    constructor(props) {
        this.value = new RichText(props.value);
        this.answer = props.answer;
    }
}

/**
 * 题目规则提取，统一管理
 * 当前题目结构中，一个题目所关联的规则存储在其他题目中，处理规则时需要遍历题目列表，到其他题目中去找，消耗较大
 * 此类把题目相关的所有规则提取出来，以map形式呈现，且实时更新规则触发状态，使用时可将性能消耗降至最低
 * TODO:
 * 做题时，题目如有更新，则反馈事件，传递的数据包括：题目本身、答案
 * 事件逻辑如何设计？
 * {
 *     '题目1id': {
 *         visiable: {
 *             "题目1 id": {
 *                 "optionLogic": 'or',
 *                 "选项1 id": {
 *                     visiable: false,
 *                     trigger: false
 *                 }
 *             }
 *         },
 *         target: {
 *             "题目1 id": {
 *                 "选项1 id": {
 *                     trigger: false
 *                 }
 *             }
 *         },
 *         relate: {
 *             "题目1 id": {
 *                 "选项1 id": {
 *                     disabled: ['1', '2'],
 *                     trigger: false
 *                 }
 *             }
 *         }
 *     }
 * }
 *
 * 继承Map key: 题目id  value: 和该题目相关的所有规则
 */
class QuestionRule extends Map {
    /**
     * 添加规则
     * @param question 题目实例，注意此题目是规则的触发源（即规则设置在哪个题目里），
     *      当前题目的规则影响其他题目，需要把其中的规则解析并反向表达出来，得到一个题目受哪些题目规则的影响
     * @returns
     */
    addRule(question, answer) {
        if (!question.id)
            return;
        const ruleList = this.parseRule(question);
        for (const rule of ruleList) {
            const { optionId = '', target = '', relate = [], visiable = [] } = rule;
            if (!optionId)
                return;
            // 显隐规则
            for (const vRule of visiable) {
                // 找到影响的题目
                const ruleItem = this.ensureQuestionRuleItem(vRule.id);
                ruleItem.addVisiableRule(vRule, rule, question);
            }
        }
    }
    updateRule(question, answer) {
        if (!question.id)
            return;
    }
    /**
     * 解析题目中的所有规则
     * @param question 题目
     * @returns
     */
    parseRule(question) {
        const optionList = Reflect.get(question, 'optionList');
        if (!optionList?.length)
            return [];
        return optionList.map((v) => v.rules);
    }
    /**
     * 根据题目id查询对应的规则，如果不存在，则创建一个
     * @param questionId 题目id
     * @returns
     */
    ensureQuestionRuleItem(questionId) {
        let questionRule = this.get(questionId);
        if (!questionRule) {
            questionRule = new QuestionRuleItem(questionId);
            this.set(questionId, questionRule);
        }
        return questionRule;
    }
}
/**
 * 和单个题目相关的所有规则
 * {
 *     visiable: {
 *         "题目1 id": {
 *             "optionLogic": 'or',
 *             "选项1 id": {
 *                  visiable: false,
 *                  trigger: false
 *              }
 *         }
 *     },
 *     target: {
 *         "题目1 id": {
 *             "选项1 id": {
 *                  trigger: false
 *              }
 *         }
 *     },
 *     relate: {
 *         "题目1 id": {
 *             "选项1 id": {
 *                  disabled: ['1', '2'],
 *                  trigger: false
 *              }
 *         }
 *     }
 * }
 */
class QuestionRuleItem {
    questionId;
    /**
     * 和此题目相关的所有显隐规则
     */
    visiable = new QuestionVisiableRule();
    /**
     * 和此题目相关的所有选项关联规则
     */
    // public relate: string = '';
    /**
     * 和此题目相关的所有跳转规则
     */
    // public target: string = '';
    constructor(questionId) {
        this.questionId = questionId;
    }
    addVisiableRule(visiableRule, rule, sourceQuestion) {
        if (visiableRule.id !== this.questionId)
            return;
        this.visiable.addRule(visiableRule, rule, sourceQuestion);
    }
    /**
     * 获取影响到此题目的所有题目id
     * @returns
     */
    getRelationQuestionIds() {
        const visiableIds = Array.from(this.visiable.keys());
        // TODO:
        const relateIds = [];
        const targetIds = [];
        return new Set([...visiableIds, ...relateIds, ...targetIds]);
    }
}
/**
 * 一个题目的所有显隐规则，可能来自多道题
 * {
 *     "题目1 id": {
 *         "optionLogic": 'or',
 *         "选项1 id": {
 *              visiable: false,
 *              trigger: false
 *          }
 *     }
 * }
 * 继承Map key: 题目id--即哪个题目上设置了显隐规则且影响到了此题目     value: 设置显隐规则的题目中，所有影响到此题目的显隐规则，因为多选题可能使用多个选项控制一道题的显隐
 */
class QuestionVisiableRule extends Map {
    addRule(visiableRule, rule, sourceQuestion) {
        let ruleItem = this.get(sourceQuestion.id);
        if (!ruleItem) {
            ruleItem = new QuestionVisiableRuleItem();
            ruleItem.optionLogic = rule.optionLogic;
            this.set(sourceQuestion.id, ruleItem);
        }
        ruleItem.optionLogic = rule.optionLogic;
        ruleItem.addOption(rule.optionId, visiableRule);
    }
    isTrigger() {
        // 只取触发的规则
        const rules = [];
        for (const ruleItem of this.values()) {
            const result = ruleItem.isTrigger();
            if (result)
                rules.push(result);
        }
        return QuestionVisiableRuleItem.getTriggerResult(rules);
    }
}
/**
 * 一个题目下，来自另一个题目的显隐规则，可能涉及到多个选项
 * {
 *     "optionLogic": 'or',
 *     "选项1 id": {
 *         visiable: false,
 *         trigger: false
 *     }
 * }
 * 继承Map，key: 设置了显隐规则的选项id  value: 规则详情，是否触发
 */
class QuestionVisiableRuleItem extends Map {
    // 多个选项控制一道题时，规则触发逻辑，or: 或  and: 且
    optionLogic = OptionLogicEnum.OR;
    addOption(optionId, rule) {
        this.set(optionId, {
            visiable: rule.visiable,
            trigger: false
        });
    }
    getOption(optionId) {
        return this.get(optionId);
    }
    /**
     * 规则是否触发
     * @returns
     */
    isTrigger() {
        let rules = [...this.values()];
        if (!rules.length)
            return false;
        // 多个选项同时对一道题设置同一种逻辑，需要根据optionLogic字段来决定触发规则
        const isSameRule = rules.every(v => v.visiable === rules[0].visiable);
        // optionLogic为or时，交给下面的逻辑处理，有任何一条触发即可
        // 为and时，必须所有的都触发才可以
        if (isSameRule && this.optionLogic === OptionLogicEnum.AND) {
            const hasUnTriggered = rules.some(v => !v.trigger);
            if (hasUnTriggered)
                return false;
            return {
                trigger: true,
                visiable: rules[0].visiable
            };
        }
        return QuestionVisiableRuleItem.getTriggerResult(rules);
    }
    static getTriggerResult(rules) {
        // 忽略未触发的
        const ruleList = rules.filter(v => v.trigger);
        if (!ruleList.length)
            return false;
        // 是否有触发的显示规则、隐藏规则
        let hasShowRule = false, hasHideRule = false;
        for (const rule of ruleList) {
            if (rule.visiable) {
                hasShowRule = true;
            }
            else {
                hasHideRule = true;
            }
        }
        if (!hasShowRule && !hasHideRule)
            return false;
        return {
            trigger: true,
            // 显隐冲突时，以显示规则为准
            visiable: hasShowRule
        };
    }
}

const ClazzMap = {
    [QuestionTypeEnum$1.Radio]: Radio,
    [QuestionTypeEnum$1.Check]: Check,
    [QuestionTypeEnum$1.Table]: Table,
    // [QuestionTypeEnum.Answer]: Radio,
    // [QuestionTypeEnum.Blank]: Radio,
    // [QuestionTypeEnum.Combination]: Radio,
    // [QuestionTypeEnum.Inventory]: Radio,
    // [QuestionTypeEnum.Paragraph]: Radio,
    // [QuestionTypeEnum.QuestionGroup]: Radio,
    // [QuestionTypeEnum.Rank]: Radio,
    // [QuestionTypeEnum.Record]: Radio
};
class QuestionFactory {
    static create(props) {
        const clazz = ClazzMap[props.type];
        // if (!clazz) throw new Error('题目类型不存在');
        if (!clazz)
            return {};
        return new clazz(props);
    }
}

class Page extends Duplex {
    page;
    pageId;
    questionMap = new Map();
    answerMap = new Map();
    /**
     * 题目和题目相关的所有规则的映射
     * 规则存储在各个题目的选项中
     * 旧版本逻辑是，题目A变化后，广播通知关联到的题目，被关联到的题目再广播事件去查找所有和自身相关的规则
     * 这里直接在初始化的时候把规则提取出来(并标记是否触发)，省去了查找过程，要获取一个题目相关的所有规则，通过ruleMap查找即可
     *
     * 规则更新时，从上往下更新，事件也是从上往下注册，因为下面的题目影响不了上面的题目
     */
    questionRule = new QuestionRule();
    constructor(props) {
        super();
        this.page = props.page;
        this.pageId = props.pageId;
        props.questionList.forEach(o => {
            const question = this.addQuestion(o);
            if (!question.id)
                return;
            question.pageId = this.pageId;
            this.questionRule.addRule(question);
        });
        console.log('questionRule', this.questionRule);
        // 初始化事件，以Page为单位注册事件，题目变化后触发该事件，在Page中统一处理各种规则
        this.subscribe(this.pageId, this.onQuestionChange);
    }
    onQuestionChange(question) {
        // TODO: 题目更新时，更新规则触发状态
        console.log('onQuestionChange', question);
        const involvedQuestionIds = question.involvedQuestionIds;
        // 通知关联到的题目进行更新
        for (const id of involvedQuestionIds) {
            this.updateQuestion(id);
        }
        // TODO: 更新进度等
    }
    // 更新题目状态
    updateQuestion(questionId) {
        const question = this.questionMap.get(questionId);
        if (!question)
            return;
        // 影响到此题的所有规则
        const rule = this.questionRule.get(questionId);
        if (!rule)
            return;
        // 更新题目显隐状态
        question.visiable = this.getQuestionVisiable(question, rule);
        question.update();
    }
    /**
     * 获取题目的显隐状态
     * @param question 题目
     * @param rule 和此题相关的所有规则
     * @returns 题目最终的显隐状态，true：显示，false：隐藏
     */
    getQuestionVisiable(question, rule) {
        // 跳转规则为第一优先级，其余情况如果同时存在显示和隐藏逻辑，以显示逻辑为准
        // 如不匹配下面任何一个分支，则该题目显示初始默认值
        // 是否触发跳转规则（前面的题目设置了跳转，触发之后把本题跳过）
        // const hasTargetRule = showData.some(v => v.visiableRule.type === 'target');
        const triggerTargetRule = Math.random() > 0.5;
        // 触发跳转规则之后跳过（隐藏）本题
        if (triggerTargetRule)
            return false;
        // 显隐规则
        // 显隐规则同时存在时，以显示规则为准
        const triggerVisiableRule = rule.visiable.isTrigger();
        if (triggerVisiableRule && triggerVisiableRule.trigger) {
            return triggerVisiableRule.visiable;
        }
        // 未触发规则，还原初始状态
        return question.originVisiable;
    }
    addQuestion(question) {
        const o = question instanceof Question ? question : QuestionFactory.create(question);
        this.questionMap.set(question.id, o);
        return o;
    }
    get questionList() {
        return Array.from(this.questionMap.values());
    }
}

class Paper {
    id;
    code;
    name;
    pageMap = new Map();
    resourceIds = new Set();
    constructor(props) {
        this.id = props.id;
        this.name = props.name;
        this.code = props.code;
        try {
            const ids = JSON.parse(props.resourceJson);
            this.resourceIds = new Set(ids);
        }
        catch { }
        const pageList = JSON.parse(props.paperJson);
        pageList.forEach((o) => {
            this.addPage(o);
        });
    }
    addPage(page) {
        if (page instanceof Page) {
            this.pageMap.set(page.pageId, page);
        }
        else {
            const o = new Page(page);
            this.pageMap.set(o.pageId, o);
        }
    }
    get pageList() {
        return Array.from(this.pageMap.values());
    }
}

export { Check, Config, Page, Paper, Question, Radio, Table, TableGroup, TableGroupOption };
