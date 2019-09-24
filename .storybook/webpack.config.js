const path = require('path')

module.exports = ({config, mode, defaultConfig}) => {
    config.module.rules.push(
        {
            test: /\.(ts|tsx)$/,
            exclude: path.resolve(__dirname, '../node_modules/'),
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [['react-app', {flow: false, typescript: true}]],
                    },
                },
                {
                    // commenting this out, improves performance significantly
                    loader: 'react-docgen-typescript-loader',
                },
            ],
        },
        {
            test: /\.stories\.(ts|tsx)$/,
            exclude: path.resolve(__dirname, '../node_modules/'),
            use: [
                {
                    // needed for storysource-addon
                    loader: require.resolve('@storybook/addon-storysource/loader'),
                    options: {parser: 'typescript'},
                },
                {
                    // needed for docs addon
                    loader: '@storybook/source-loader',
                    options: {injectParameters: true},
                },
            ],
        },
    );
    config.resolve.extensions.push('.ts', '.tsx');
    return config
};