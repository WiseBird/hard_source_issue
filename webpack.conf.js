const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.css']
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'awesome-typescript-loader' },
            {
                test: /\.css$/,
                use: [
                    'to-string-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')({browsers: 'last 3 Chrome versions'})
                            ]
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HardSourceWebpackPlugin()
    ]
};