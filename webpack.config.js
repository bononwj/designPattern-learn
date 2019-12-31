module.exports = {
    entry: './src/main.ts',
    output: {
        filename: './bundle.js'
    },
    resolve:{
        extensions:['.js','.ts','.json']
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