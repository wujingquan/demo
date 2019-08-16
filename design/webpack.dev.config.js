const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/bundle.js'  // release 会自动创建
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'  // bundle.js 会自动注入
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "./release"),  // 根目录
        open: false,  // 自动打开浏览器
        port: 9000,   // 端口
        proxy: {
            '/api/*': {
                target: 'http://127.0.0.1:5500/src/'
                // target: 'http://wujingquan.com'
            }
        }
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]
    }
}