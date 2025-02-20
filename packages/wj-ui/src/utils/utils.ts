import is from 'is';
/**
 * 把枚举对象转换为对象数组
 * @param enumObj 枚举对象
 * @param keyName 对象的key名
 * @param valueName 对象的value名
 * @returns 
 */
export const enumToObjList = (enumObj: any, keyName='name', valueName='value') => {
    return Object.entries(enumObj).filter(([, v]) => {
        return is.number(v);
    }).map(([k, v]) => {
        return {
            [keyName]: k,
            [valueName]: v
        }
    });
};
