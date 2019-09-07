import webpackMerge from 'webpack-merge';
import { common } from './build/webpack.common';
import chalk from 'chalk';

const log = (color: 'yellow' | 'red', message: string) => {
    console.log(chalk.bold(chalk[color](`${message}`)));
};
interface Environment {
    mode: string;
}
export default async (env: Environment) => {
    if (!env) {
        log(
            'red',
            `
            :::::ERROR::::::
            Required ENV
            > mode <
        `,
        );
        process.exit(1);
    }
    if (!env.mode) {
        log(
            'yellow',
            `
            :::::WARNING::::::
            build env (dev, prod)
            > webpack --env.mode=prod or webpack --env.mode=dev <
        `,
        );
        process.exit(1);
    }

    const webpack = env.mode === 'prod' ? await import(`./build/webpack.prod`) : await import(`./build/webpack.dev`);
    return webpackMerge(common, webpack.config);
};
