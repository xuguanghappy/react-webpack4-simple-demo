const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './../src'), 
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules|antd\.css/, //splite css without antd.css
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        // "postcss" loader applies autoprefixer to our CSS.
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                ]
            },
            {
                test: /\.css$/,
                include: /node_modules|antd\.css/, //antd.css resolve 
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // modules: true,  //antd should not be splite
                            importLoaders: 1,
                            // localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        // "postcss" loader applies autoprefixer to our CSS.
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                ]
            },
            {
                test: /\.less$/,
                exclude: /node_modules|antd\.css/, //splite css without antd.css
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
                            plugins: () => [
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                    { 
                        loader: "less-loader", 
                        options: { javascriptEnabled: true } 
                    } 
                    // 'less-loader'
                ]
            },
            {
                test: /\.less$/,
                include: /node_modules|antd\.css/, //antd.css resolve 
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // modules: true,
                            importLoaders: 1,
                            // localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
                            plugins: () => [
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                    { 
                        loader: "less-loader", 
                        options: { javascriptEnabled: true } 
                    } 
                    // 'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})