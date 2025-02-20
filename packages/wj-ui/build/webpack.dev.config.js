/**
 * 本地预览
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

process.env.NODE_ENV = 'development';

module.exports = merge(webpackBaseConfig, {
    target: 'web',
    mode: 'development',
    devtool: 'eval-source-map',
    // 入口
    entry: {
        main: './examples/main.ts',
    },
    // 输出
    output: {
        path: path.join(__dirname, '../examples/dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
        alias: {
            '@liyun/wj-ui': resolve('src/index'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            filename: resolve('examples/dist/index.html'),
            template: resolve('examples/index.html')
        }),
    ],
    devServer: {
        hot: true,
    }
});
