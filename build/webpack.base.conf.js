var path = require('path');
var config = require('../config');
var utils = require('./utils');
var projectRoot = path.resolve(__dirname, '../');
module.exports = {
    resolve: {
        extensions: ['', '.js', '.vue'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'directives': path.resolve(__dirname, '../src/directives'),
            'components': path.resolve(__dirname, '../src/components'),
            'data': path.resolve(__dirname, '../src/data')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        preLoaders: [{
            test: /\.vue$/,
            loader: 'eslint',
            include: projectRoot,
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            loader: 'eslint',
            include: projectRoot,
            exclude: /node_modules/
        }],
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            include: projectRoot,
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.html$/,
            loader: 'vue-html'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }, {
            test: require.resolve('jquery'), //  绝对路径文件
            loader: 'expose?$!expose?jQuery' // 加载模块为 expose 加载关键字为 jQuery
        }]
    },
    eslint: {
        formatter: require('eslint-friendly-formatter')
    },
    vue: {
        loaders: utils.cssLoaders()
    }
};
