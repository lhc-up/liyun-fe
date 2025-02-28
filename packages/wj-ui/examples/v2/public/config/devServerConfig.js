/**
 * devServer的配置
 * 使用以下命令启动各环境配置
 * npm run dev [dev|test|show|release]
 * 配置详情参阅 ./runTimeConfig.js
*/
const { server } = require("./runTimeConfig.js");
let proxyList = ["dev", "show", "test", "release"];
// 默认是正式站代理
let proxy = server.release;
let runTime = "release";
// 根据进程参数选择代理地址
proxyList.forEach(item => {
    if (process.argv.indexOf(item) > 1) {
        runTime = item;
        proxy = server[item] || proxy;
    }
});
// 导出服务配置
module.exports = {
    host: '127.0.0.1',
    port: 8988,
    runTime,//运行环境
    openBrowserAfterComplete: true,//调试完打开
    proxy
};