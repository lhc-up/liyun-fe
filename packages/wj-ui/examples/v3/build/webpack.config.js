const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const fs = require('fs');
const threads = require('os').cpus().length;
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');
const chalk = require('chalk');
const devMode = process.env.NODE_ENV === 'development';

module.exports = {
    mode: 'development',
    entry: {
        main: './main.ts'
    },
    output: {
        path: path.join(__dirname, '../dist'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                // include: path.resolve(__dirname, '../src'),
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: threads
                        }
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                // include: path.resolve(__dirname, '../src'),
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: threads
                        }
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false
                        }
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                            // 关闭ts-loader的类型检查，类型检查由 fork-ts-checker-webpack-plugin 插件执行
                            transpileOnly: true,
                            happyPackMode: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                exclude: [/\.lazy\.less$/i],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.lazy\.less$/i,
                use: [
                    {
                        loader: 'style-loader',
                        options: { injectType: 'lazySingletonStyleTag' }
                    },
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(gif|svg|png|jpe?g|ico|hdr|mp4|mp3|MP3|wav)(\?\S*)?$/,
                type: 'asset/resource'
            },
            {
                test: /\.(eot|ttf|woff|woff2|otf|glb|fbx|obj|mtl|gltf|exr)(\?\S*)?$/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.vue', '.ts', '.js', '.json', '.tsx'],
        fallback: {
            url: require.resolve('url')
        },
        alias: {
            '@liyun/wj-ui': path.resolve(__dirname, '../../../src'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: `./index.html`,
            inject: 'body',
            favicon: false,
            hash: !devMode,
            minify: !devMode,
            cache: true,
        }),
        new MiniCssExtractPlugin({
            filename: `css/[name]${devMode ? '' : '.[contenthash:8]'}.css`,
            chunkFilename: `css/[name]${
                devMode ? '' : '.[contenthash:8]'
            }.css`,
            ignoreOrder: true
        }),
        new VueLoaderPlugin(),
        new webpack.ProgressPlugin({
            activeModules: true
        }),
    ]
}
