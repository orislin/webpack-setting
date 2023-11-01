const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './js/index.js',
        about: './js/about.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].js?[contenthash:8675]',
    },
    module: {
        rules: [
            {
              test: /\.html$/,
              // test: /\.html|m4a|pdf$/,
              use: [{
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]?[contenthash:8]'
                }
              }]

            },
            {
              test: /\.(js)$/,
              use: 'babel-loader'
            },
            // {
            //     test: /\.css$/,
            //     //use: [MiniCssExtractPlugin.loader, "css-loader"],
            //     use: ["style-loader", "css-loader","postcss-loader"],
            // },            
            {
              test: /\.sass|scss$/i,
              use: [MiniCssExtractPlugin.loader, "css-loader","postcss-loader","sass-loader"],
              // use: ["style-loader","css-loader","postcss-loader","sass-loader"],
            },
            {
              test: /\.(gif|png|jpe?g|svg)$/i,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[path][name].[ext]?[contenthash:8]'
                  }
                },
                {
                  loader: 'image-webpack-loader',
                  options: {
                    mozjpeg: {
                      progressive: true,
                    },
                    // optipng.enabled: false will disable optipng
                    optipng: {
                      enabled: false,
                    },
                    pngquant: {
                      quality: [0.65, 0.90],
                      speed: 4
                    },
                    gifsicle: {
                      interlaced: false,
                    },
                    // webp有問題, 暫時不用它
                    // webp: {
                    //   quality: 75
                    // }
                  },
                },
              ],
            }
        ]
    },
    //把套件獨立成vendor.js，但此法就不能用js來引入css
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       vendor: {
    //         test: /node_modules/,
    //         name: 'vendor',
    //         chunks: 'initial',
    //         enforce: true
    //       }
    //     }
    //   }
    // },

    plugins: [
        new MiniCssExtractPlugin({
          filename: 'css/[name].css?[contenthash:8]',
        }),
        // new CopyWebpackPlugin({
        //     patterns:[
        //       { from: 'assets', to: 'assets' },
        //       { from: 'xxx', to: 'eee' }
        //     ],
        // }),
        // new webpack.ProvidePlugin({
        //   $: 'jquery',
        //   jQuery: 'jquery',
        //   'window.jQuery': 'jquery'
        // })
    ]
}