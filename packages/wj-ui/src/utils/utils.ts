/**
 * 把枚举对象转换为对象数组
 * @param enumObj 枚举对象
 * @param keyName 对象的key名
 * @param valueName 对象的value名
 * @returns 
 */
export const enumToObjList = (enumObj: any, keyName='name', valueName='value') => {
    return Object.entries(enumObj).filter(([k, ]) => {
        return Number.isNaN(Number(k));
    }).map(([k, v]) => {
        return {
            [keyName]: k,
            [valueName]: v
        }
    });
};

/**
 * 解析json字符串
 * @param jsonStr 
 * @param defaultValue 
 * @returns 
 */
export const ensureJson = (jsonStr, defaultValue = '') => {
    if (!jsonStr) return defaultValue;
    if (typeof jsonStr !== 'string') return jsonStr;
    try {
        return JSON.parse(jsonStr);
    } catch {
        return defaultValue;
    }
};