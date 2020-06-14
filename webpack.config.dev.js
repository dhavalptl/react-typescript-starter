const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
});
