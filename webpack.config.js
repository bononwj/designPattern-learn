module.exports = {
    entry: './src/main.ts',
    output: {
        filename: './bundle.js'
    },
    devServer: {
        publicPath: '/dist'
    }
}