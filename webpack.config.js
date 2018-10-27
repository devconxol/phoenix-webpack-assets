const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = function(env) {
  const production = process.env.NODE_ENV === 'production';
  return {
    mode: 'development',
    devtool: production ? 'source-maps' : 'eval',
    entry: ['./js/app.js', './sass/app.scss'],
    output: production
    ? {
      path: path.resolve(__dirname, '../priv/static/js'),
      filename: 'app.js',
      publicPath: '/',
    }
    : {
      path: path.resolve(__dirname, 'public'),
      filename: 'app.js',
      publicPath: 'http://localhost:8080/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },

        {
          test: /\.scss$/,
          use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
        }
      ],
    },
    resolve: {
      modules: ['node_modules', path.resolve(__dirname, 'js')],
      extensions: ['.js'],
    },

    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },

    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "css/app.css"
      })
    ],


  
  };
};