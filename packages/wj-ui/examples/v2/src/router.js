const context = require('./libs/interface/context.js');

module.exports = [
    {
        path: context.name + '/',
        name: '/',
        meta: {
            title: '首页'
        },
        component: resolve => {
            require.ensure(
                [],
                () => {
                    return resolve(require('./views/index.vue'));
                },
                'home'
            );
        }
    },
    {
        path: context.name + '/make.html',
        name: '/make.html',
        meta: {
            title: '出题'
        },
        component: resolve => {
            require.ensure(
                [],
                () => {
                    return resolve(require('./views/make.vue'));
                },
                'make'
            );
        }
    }
];
