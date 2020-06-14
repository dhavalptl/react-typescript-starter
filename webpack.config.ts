import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const webpackConfig = (env: any): Configuration => ({
    entry: path.join(__dirname, "/src/index.tsx"),
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: env.development ? 'bundle.js' : '[name].[contenthash:8].js',
        chunkFilename: env.development ? '[name].chunk.js' : '[name].[contenthash:8].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                oneOf: [
                  {
                    test: /\.module\.css$/,
                    use: [
                      MiniCssExtractPlugin.loader,
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
        new ForkTsCheckerWebpackPlugin({ eslint: true }),
        new MiniCssExtractPlugin({
            filename: env.development ? '[name].css' : '[name].[hash].css',
            chunkFilename: env.development ? '[id].css' : '[id].[hash].css'
        })
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            name: false,
        }
    }
});

export default webpackConfig;
