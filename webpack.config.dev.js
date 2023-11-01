const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

//console.log('==========>',path.resolve('./dist'))
module.exports = {
    target:"web",
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './js/index.js',
        about: './js/about.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: './js/[name].[hash:8].js',
    },
    stats: {
      assets: true,
      cached: false,
      chunkModules: false,
      chunkOrigins: false,
      chunks: false,
      colors: true,
      hash: false,
      modules: false,
      reasons: false,
      source: false,
      version: false,
      warnings: false
    },
    devServer: {
      watchFiles: ["src/**/*"],
      // hot:true,
      compress: true,
      port: 3000,
      
    },
    module: {
        rules: [
            {
              test: /\.html$/,
              // test: /\.html|m4a|pdf$/,
              use: [{
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]'
                }
              }]

            },
            // {
            //     test: /\.css$/,
            //     //use: [MiniCssExtractPlugin.loader, "css-loader"],
            //     use: ["style-loader", "css-loader","postcss-loader"],
            // },            
            {
              test: /\.s[ac]ss$/i,
              use: [MiniCssExtractPlugin.loader, "css-loader","postcss-loader","sass-loader"],
              // use: ["style-loader","css-loader","postcss-loader","sass-loader"],
            }

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'css/[name].css',
        }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        })
    ]
}