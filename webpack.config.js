const  path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/main.ts',
    output: {
        filename: 'app.min.js',
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /nome_modules/
        }]
    }
}