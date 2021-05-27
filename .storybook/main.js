module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        '@storybook/addon-docs',
        'storybook-addon-react-docgen',
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-viewport",
        "storybook-dark-mode/register"
    ],
}
