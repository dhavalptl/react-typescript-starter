const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.join(__dirname, "/src/index.tsx"),
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                oneOf: [
                  {
                    test: /\.module\.css$/,
                    use: [
                      {
                        loader: MiniCssExtractPlugin.loader,
                        options: { hmr: true }
                      },
                      {
                        loader: "css-loader",
                        options: { modules: true }
                      }
                    ]
                  },
                  {
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
                  }
                ]
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            mimetype: 'image/png'
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./public/index.html")
        }),
        new ForkTsCheckerWebpackPlugin({ eslint: true })
    ]
};
