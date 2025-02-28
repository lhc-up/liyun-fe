//服务配置
let serverUrl = {
    dev: 'http://123.56.79.214:8595',//开发环境
    show: 'http://eachinashow.changyan.cn',//演示环境
    test: 'https://test.liyunedu.cn',//测试环境
    release: 'https://eachina.changyan.cn'//正式环境
}
let router = ['/wj/admin/api'];
let server = {
    //最终结果
    /*'dev|show|test|release': {
        '/wj/api/': {target: serverUrl.dev|show|test|release},
        '/wj/update/': {target: serverUrl.dev}
    } */
}
Object.keys(serverUrl).forEach(item => {
    server[item] = {};
    let target = serverUrl[item];
    router.forEach(routerItem => {
        server[item][routerItem] = {
            target,
            secure: false,
            changeOrigin: true,
            headers: {
                Referer: target.endsWith('/') ? target : target + '/'
            }
        }
    });
});
module.exports = { server, serverUrl };