const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path    = require('path')
module.exports = {
  entry: './src/index.js',
  mode: "production",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  externals: {
    'axios': 'axios',
    'qs': 'qs',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              'presets': [
                ['env',
                  {
                    'targets': {
                      'browsers': ['ie >= 9', 'safari >=7']
                    }
                  }
                ],
                ['es2015']
              ]
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  }
}
