import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { output, entry } from '../build/path';
import webpack from 'webpack';

export const common: webpack.Configuration = {
    entry: {
        path: `${entry}/index.tsx`,
        vendor: ['react', 'react-dom', 'react-router-dom', 'antd', 'aws-sdk'],
    },
    output: {
        path: output,
        publicPath: '/',
        chunkFilename: '[name].[hash].js',
        filename: '[name].[hash].js',
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [['import', { libraryName: 'antd', style: 'css' }]],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'url-loader',
                options: {
                    limit: 1000000,
                    name: 'src/static/img/[name].[hash:8].[ext]',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        plugins: [
            new TsconfigPathsPlugin({
                extensions: ['ts', 'tsx'],
            }),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    priority: 1,
                },
                reactBundle: {
                    name: 'react.bundle',
                    priority: 2,
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                },
            },
        },
    },
};
