/**
 * 公共配置
 */
const path = require('path');
const webpack = require('webpack');
const pkg = require('../package.json');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}

const devMode = process.env.NODE_ENV === "development";

module.exports = {
    // 加载器
    module: {
        // https://doc.webpack-china.org/guides/migrating/#module-loaders-module-rules
        rules: [
            {
                // https://vue-loader.vuejs.org/en/configurations/extract-css.html
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false,
                        },
                    },
                ]
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false,
                        },
                    },
                    {
                        loader: "ts-loader",
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                            // 关闭ts-loader的类型检查，类型检查由 fork-ts-checker-webpack-plugin 插件执行
                            transpileOnly: true,
                            happyPackMode: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ]
            },
            {
                test: /\.less$/,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    "postcss-loader",
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            },
                        },
                    },
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                type: "asset/resource",
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: [".vue", ".ts", ".js", ".json", ".tsx"],
        fallback: {
            url: require.resolve("url"),
        },
        alias: {
            '@': resolve('src')
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.VERSION': `'${pkg.version}'`
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: `[name].css`,
            chunkFilename: `[name].css`,
            ignoreOrder: true,
        }),
    ]
};
