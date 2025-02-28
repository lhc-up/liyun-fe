const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const Autoprefixer = require('autoprefixer');
const context = require('../src/libs/interface/context.js');
// 去掉上下文前的‘/’，使用publicPath来决定采用相对路径还是绝对路径
const contextName = context.name.substr(1);

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

function getConfig(mode='production') {
    const devMode= mode === 'development';
    var webpackBaseConfig= {
        mode,
        entry: {
            main: ['@babel/polyfill', './src/main.js']
        },
        output: {
            path: path.join(__dirname, '../dist/'),
            publicPath: '/',
            filename: `${contextName}/js/[name]${devMode ?  '' : '-[hash:8]'}.js`,
            chunkFilename: `${contextName}/js/[name]${devMode ? '' : '-[hash]'}.js`,
        },
        optimization: {
            runtimeChunk: false,
            minimize: !devMode,
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendor: {
                        test: /node_modules\//,
                        name: 'vendor',
                        priority: 10,
                        enforce: true
                    }
                }
            }
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    exclude: [/node_modules/],
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                },
                {
                    test: /\.mjs$/,
                    include: /node_modules/,
                    type: 'javascript/auto',
                },
                {
                    test: /\.css$/,
                    // 以.editor.css结尾的css文件是富文本编辑器的专用css文件，不走常规编译，单独配置编译规则
                    exclude: [/\.editor\.css$/],
                    use: (devMode ? ['css-hot-loader'] : []).concat([
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [Autoprefixer]
                            }
                        }
                    ])
                },
                {
                    // .editor.css结尾的css文件是富文本编辑器中的iframe使用的css文件
                    // 先以style标签插入当前文档，并添加标签属性<style for="editor"></style>
                    // 初始化编辑器时，根据属性查询到style标签，把样式复制到iframe中
                    test: /\.editor\.css$/,
                    use: [
                        {
                            loader: 'style-loader',
                            options: {
                                attributes: {
                                    type: "text/css",
                                    for: 'editor'
                                }
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [Autoprefixer]
                            }
                        }
                    ]
                },
                {
                    test: /\.less$/,
                    use: (devMode ? ['css-hot-loader'] : []).concat([
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [Autoprefixer]
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                lessOptions: {
                                    javascriptEnabled: true
                                }
                            }
                        }
                    ])
                },
                {
                    test: /\.(gif|svg|png|jpe?g|ico|hdr|cur)(\?\S*)?$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            esModule: false,
                            limit: 2048,
                            name: `${contextName}/images/[name].[hash:8].[ext]`
                        }
                    }]
                },
                {
                    test: /\.(eot|ttf|woff|woff2|otf)(\?\S*)?$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            esModule: false,
                            limit: 2048,
                            name: `${contextName}/images/[name].[ext]`
                        }
                    }]
                },
                {
                    test:/\.(xml)$/,
                    use: [{
                        loader: 'file-loader'
                    }]
                },
                {
                    test: /\.(html|tpl)$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.worker\.js$/,
                    use: [{
                        loader: 'worker-loader',
                        options: {
                            inline: "fallback",
                        }
                    }]
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.json', '.vue'],
            modules: [
                resolve('src'),
                resolve('node_modules')
            ],
            alias: {
                '@': resolve('src'),
                '@image': resolve('src/libs/images'),
                '@public': resolve('public')
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.ejs',
                filename: './index.html',
                title: '加载中...',
                inject: 'body',
                favicon: false,
                hash: false
            }),
            new MiniCssExtractPlugin({
                filename: `${contextName}/css/[name]${devMode ? '' : '-[hash]'}.css`,
                chunkFilename: `${contextName}/css/[name]${devMode ? '' : '-[hash]'}.css`,
                ignoreOrder: true
            }),
            new VueLoaderPlugin(),
            new webpack.DefinePlugin({
                ENV: `"${process.argv[2] || 'release'}"`
            })
        ]
    }

    return webpackBaseConfig;
}
module.exports = getConfig;
