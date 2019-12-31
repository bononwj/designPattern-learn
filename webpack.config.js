module.exports = {
    entry: './src/main.ts',
    output: {
        filename: './bundle.js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader'
        }]
    },
    devServer: {
        publicPath: '/dist'
    }
}