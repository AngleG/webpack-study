/* 
* @Author: wxx
* @Date:   2017-04-25 14:57:32
* @Last Modified time: 2017-05-11 11:18:42
*/
var webpack = require("webpack");
var path = require("path");
module.exports = {
    //页面入口文件配置
    entry: [
        path.join(__dirname, "app/entry.js")   //__dirname是当前运行的js所在的目录
    ],
    //入口文件输出配置 
    output: {
        path: path.join(__dirname, "build"),     //打包后文件存放的位置  *path.resolve()的作用是把相对路径改为绝对路径
        publicPath:"assets",   //指定编译后的包(bundle)的访问位置
        filename: "bundle.js"    //打包后输出文件的文件名
    },
    module: {
    //加载器配置  告知webpack每一种文件都需要什么加载器来处理
        loaders: [
            // {test: require.resolve('jquery'), loader: "expose?jQuery!expose?$"},
            // {test: /bootstrap\/js\//, loader: "imports?jQuery=jquery"},
            {test: /\.jade$/, loader: "jade-loader"},
            //css文件使用 style-loader和css-loader来处理
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.json$/, loader: "json-loader"},
            {test: /\.(png|jpeg|gif|jpg)$/, loader: "url-loader?limit=25000"},

            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff2"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
        ]
    },
    plugins:[            
            new webpack.BannerPlugin('This file is create by wxx.'),  //会像打包的bundle文件头部添加这一句注释信息
        ],
    resolve: {
        extensions: ['', '.web.js', '.js', '.jsx', '.css', '.less'],    //后缀名自动补全
        alias: {
            // jquery: "app/jquery-vendor.js"
        }
    },
    devtool: "eval-source-map",
}