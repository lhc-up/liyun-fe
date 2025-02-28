const context = require('./libs/interface/context.js');

module.exports = [
    {
        path: context.name + '/home.html',
        name: '/home.html',
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
    }
];
