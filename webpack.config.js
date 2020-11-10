const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// Module for export 
module.exports = {
    //entry, proncipal file 
    entry: './src/index.js',
    // where we save
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                //regular expressions
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/,
                use:
                {
                    loader: 'html-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
    ],
};