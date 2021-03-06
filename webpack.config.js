var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      './echarts/index.js' // Your appʼs entry point
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                include: path.join(__dirname, 'echarts'),
                loader: 'react-hot!babel-loader'
            },
            {
                test: /\.js$/,
                include: path.join(__dirname, 'echarts'),
                loader: 'react-hot!babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map'
}