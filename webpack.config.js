const webpack = require('webpack');


module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + '/build/',
        publicPath: "/build/",
        filename: "bundle.js"
    },
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
            }
        ]
    }
}
