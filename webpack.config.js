const path = require('path')
const webpack = require('webpack')

let config = {
    entry: './src/main.jsx',
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'main.js',
        publicPath: '/assets/'
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        loaders:[{
            test: /\.(js|jsx)$/,
            loader:'babel-loader'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify( process.env.NODE_ENV)   
            }
        })
    ]
}

if(process.env.NODE_ENV === 'production'){
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    )
    config.plugins.push(
        new webpack.optimize.OccurrenceOrderPlugin()
    )
}

module.exports = config