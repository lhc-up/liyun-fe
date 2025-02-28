/**
 * 2020年05月26日
 * 本文件统一升级，请修改配置文件，不要改动此文件配置
 */
process.env.NODE_ENV = 'development';
const os = require('os');
const webpack = require('webpack');
const chalk = require('chalk');
const consoleInfo = require('./libs/consoleInfo.js');

const dev = {
    run() {
        require("del")(["./dist/*"]); //删除历史打包数据
        this.runDev();
    },
    runDev(){
        const WebpackDevServer = require('webpack-dev-server');
        const devServerConfig = require('../public/config/devServerConfig.js');
        const webpackConfig = require('./webpack.config.js')("development");
        webpackConfig.plugins.push(new webpack.optimize.OccurrenceOrderPlugin(true));
        webpackConfig.plugins.push(new webpack.NoEmitOnErrorsPlugin());

        consoleInfo.runTime(devServerConfig.runTime);//输出运行环境

        let { host, port, proxy } = devServerConfig;
        const compiler = webpack(webpackConfig);
        new WebpackDevServer(
            compiler, {
                contentBase: webpackConfig.output.path,
                publicPath: webpackConfig.output.publicPath,
                inline: true,
                hot: true,
                hotOnly: true,
                quiet: true,
                progress: true,
                compress: true,
                disableHostCheck: true,
                historyApiFallback: {
                    disableDotRule: true
                },
                port,
                host,
                proxy
            }
        ).listen(port, host, err => {
            if (err) return console.log(err);
            console.log(`Listening at http://${host}:${port}`);
        });

        compiler.hooks.done.tap('done', stats => {
            const compilation = stats.compilation;
            Object.keys(compilation.assets).forEach(key => {
                console.log(chalk.blue(key));
            });
            compilation.warnings.forEach(key => {
                console.log(chalk.yellow(key));
            });
            compilation.errors.forEach(key => {
                console.log(chalk.red(`${key}:${stats.compilation.errors[key]}`));
            });
            console.log(chalk.green(`time：${(stats.endTime - stats.startTime) / 1000} s\n`) + chalk.white('调试完毕'));
            consoleInfo.runTime(devServerConfig.runTime);//输出运行环境
            if (devServerConfig.openBrowserAfterComplete) {
                const cmd = os.platform() === 'win32' ? 'explorer' : 'open';
                require('child_process').exec(`${cmd} http://${host}:${port}`);
                devServerConfig.openBrowserAfterComplete = false;
            }
        })
    }
};

dev.run();


