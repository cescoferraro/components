module.exports = ({config, mode}) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
            presets: [['react-app', {flow: false, typescript: true}]],
        },
    });
    config.module.rules.unshift({
        test: /\.stories\.tsx?$/,
        loaders: [
            {
                loader: require.resolve("@storybook/addon-storysource/loader"),
                options: {
                    prettierConfig: {
                        tabWidth: 4,
                        trailingComma: "es5",
                    },
                },
            },
        ],
        enforce: "pre",
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};