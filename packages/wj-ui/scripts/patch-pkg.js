const { resolveModule } = require('local-pkg');
const fs = require('fs');
const { isVue2 } = require('vue-demi');

/**
 * vue-template-compiler会检查当前项目内的vue版本，如果和自己的版本不匹配，则会报错
 * 由于本项目内存在多个vue版本，所以需要动态判断版本
 * 这里相当于跳过了vue-template-compiler的版本检查
 */
const patch = async () => {
    const packagePath = await resolveModule('vue-template-compiler');
    if (!packagePath) return console.log('vue-template-compiler not found');
    const content = fs.readFileSync(packagePath, 'utf-8');
    try {
        fs.writeFileSync(
            packagePath,
            content.replace(
                "require('vue').version",
                `require('vue@${isVue2 ? 2 : 3}').version`
            )
        );
    } catch (e) {
        console.log(3);
    }
};

patch();