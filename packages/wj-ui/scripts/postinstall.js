const { isVue2 }  = require('vue-demi');
const fs = require('fs');
const path = require('path');
const distDir = path.resolve(__dirname, '..', 'dist');

// 获取vue版本，根据vue版本匹配对应的产物
const Vue = loadModule('vue');
let sourceFolder = '';
if (!Vue || typeof Vue.version !== 'string') {
    console.warn('[wj-ui] Vue is not found. Please run "npm install vue" to install.')
} else if (Vue.version.startsWith('2.')) {
    sourceFolder = path.join(distDir, 'v2');
} else if (Vue.version.startsWith('3.')) {
    sourceFolder = path.join(distDir, 'v3');
} else {
    console.warn(`[wj-ui] Vue version v${Vue.version} is not supported.`)
}

if (sourceFolder) {
    const fileList = getFileList(sourceFolder);
    fileList.forEach(file => {
        const src = path.join(sourceFolder, file);
        const dest = path.join(distDir, file);
        try {
            fs.unlinkSync(dest);
        } catch(err) {}
        fs.copyFileSync(src, dest);
    });
}


function getFileList(folder) {
    try {
        return fs.readdirSync(folder);
    } catch(err) {
        return [];
    }
}

function loadModule(name) {
    try {
        return require(name)
    } catch (e) {
        return undefined
    }
}