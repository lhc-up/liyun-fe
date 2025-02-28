import Vue from 'vue';
import 'vuex';
import iView from 'iview';
import VueRouter from 'vue-router';
import store from './store/index.js';
import 'iview/dist/styles/iview.css';
import './libs/css/theme/my-theme.less';
import "./libs/css/public.less";
import 'liyun-wj-ui/dist/styles/index.css';
const routers = require("./router.js");

import App from "./App.vue";
import _ from 'lodash';
Vue.prototype._ = _;

//取消 Vue 所有的日志与警告
Vue.config.silent = true;
Vue.use(VueRouter);
Vue.use(iView);


const VueRouterPush = VueRouter.prototype.push 
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

iView.Message.config({
    duration: 3,
    top:180
});

let router = new VueRouter({
    routes: routers,
    mode: "history"//history
});
var firstRouter=null;//第一次访问的路由

window.router=router;

router.beforeEach((to, from, next) => {
    if (!firstRouter) {
        firstRouter = to;
        next(false);
    }else{
        document.title=(to.meta && to.meta.title)?to.meta.title:"网络测试进度管理系统";
        window.author=(to.meta && to.meta.author)?to.meta.author:"未知";
        next();
    }
});

window.WebSiteApp = new Vue({
    el: '#app',
    router: router,
    store: store,
    render: (h) => {
        return h(App,{
            props: {
                firstRouter: firstRouter
            }
        });
    }
});
