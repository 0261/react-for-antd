import webpack from 'webpack';

export const config: webpack.Configuration = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: 8081,
        historyApiFallback: true,
        open: false,
    },
};
