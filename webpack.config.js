const webpack = require('webpack');
const ExtractTextPlugin= require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + '/build/',
        publicPath: "/build/",
        filename: "bundle.js"
    },
    plugins:[
      new ExtractTextPlugin("../css/master.css")
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: [/node_modules/, /build/, /css/, /jsx/, /lib/, /CSXS/]
            },

            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            },
            {
              test: /\.png$/,
              loader: "url-loader?limit=100000" 
            }
        ]
    }
}
