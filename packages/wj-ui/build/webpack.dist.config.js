const path = require('path');
const { VueLoaderPlugin: VueLoaderPlugin2 } = require('vue-loader2');
const { VueLoaderPlugin: VueLoaderPlugin3 } = require('vue-loader3');
const webpack = require('webpack');
const ScriptSetup = require('unplugin-vue2-script-setup/webpack').default
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const { isVue2 } = require('vue-demi');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    devtool: 'eval-source-map',
    entry: {
        main: './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, '../dist', isVue2? 'v2' : 'v3'),
        publicPath: `/dist/${isVue2 ? 'v2' : 'v3'}/`,
        filename: 'wjui.js',
        library: 'wjui',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        isVue2 ? new VueLoaderPlugin2() : new VueLoaderPlugin3(),
        isVue2 ? ScriptSetup() : ''
    ].filter(Boolean)
});
