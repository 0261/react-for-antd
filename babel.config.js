const presets = ['@babel/preset-env', '@babel/preset-react', '@babel/typescript'];
const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    [
        '@babel/plugin-transform-runtime',
        {
            regenerator: true,
        },
    ],
];

module.exports = { presets, plugins };
