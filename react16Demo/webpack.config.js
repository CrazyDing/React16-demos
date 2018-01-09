var path = require('path');

var config = {
    entry: './main.js',

    output: {
        path: path.resolve(__dirname, './'),
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 7777
    },

    module: {
        loaders: [ {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader?importLoaders=1',  //loader串联使用
            },]
    }

}

module.exports = config;