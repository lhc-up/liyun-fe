/**
 * 2020年05月26日
 * 本文件统一升级，请修改配置文件，不要改动此文件配置
 */
process.env.NODE_ENV = 'production';
const webpack = require('webpack');
const chalk = require('chalk');
const devServerConfig = require('../public/config/devServerConfig.js');
const consoleInfo = require('./libs/consoleInfo.js');
const webpackConfig = require('./webpack.config.js')("production");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const build = {
    run() {
        // 输出运行环境
        consoleInfo.runTime(devServerConfig.runTime);
        require("del")(["./dist/*"]); //删除历史打包数据
        this.addPluginForWebpack();
        this.buildApp();
    },
    addPluginForWebpack(){
         // 添加htmlWebpackPlugin，打包多页面
         const routers = require('../src/router.js');
         this.addHtmlWebpackPlugin(routers);
         this.addProgressPlugin();  
    },
    // 给每一条路由添加htmlWebpackPlugin插件，从而打包对应的页面
    addHtmlWebpackPlugin(routers){
        routers.forEach(item => {
            let htmlPath = item.path;
            webpackConfig.plugins.push(new HtmlWebpackPlugin({
                template: './src/index.ejs',
                filename: `.${htmlPath}`,
                title: '加载中...',
                favicon: false,
                inject: 'body',
                hash: false,
                minify: false,
                cache: false
            }));
            if (item.children instanceof Array && item.children.length) {
                this.addHtmlWebpackPlugin(item.children);
            }
        });
    },
    // 添加进度插件
    addProgressPlugin() {
        // 显示打包进度
        webpackConfig.plugins.push(new ProgressBarPlugin({
            format: '正在打包 [:bar] ' + chalk.green.bold(':percent'),
            width: 50,
            summary: false
        }));
    },
    // 打包
    buildApp() {
        const compiler = webpack(webpackConfig);
        compiler.run((err, stats) => {
            if (err) {
                console.log(chalk.red(err));
                process.exit(0);
            }
            let log = '';
            Object.keys(stats.compilation.assets).forEach(key => {
                log += chalk.blue(key) + '\n';
            });
            stats.compilation.warnings.forEach(key => {
                log += chalk.yellow(key) + '\n';
            });
            stats.compilation.errors.forEach(key => {
                log += chalk.red(`${key}:${stats.compilation.errors[key]}`) + '\n';
            });
            log += chalk.green(`time：${(stats.endTime - stats.startTime) / 1000} s\n`) + '\n';
            console.log(log);
            // 输出运行环境
            consoleInfo.runTime(devServerConfig.runTime);
        });
    },
};

build.run();
