var path = require('path')
var webpack = require('webpack')
const fs = require('fs');

function getFolders(dir) {
  return fs.readdirSync(dir)
    .filter(function (file) {
      console.log(file)
      return fs.statSync(path.join(dir, file)).isDirectory();
    });
}
//const scriptsPath = 'Components';

//function getPaths() {
//  var folders = getFolders(scriptsPath);
//  return folders.map(function (folder) {
//    var file = scriptsPath + "//" + folder + "//main.js";
//    return file;
//  });
//}

//function getOutputPaths() {
//  var folders = getFolders(scriptsPath);
//  return folders.map(function (folder) {
//    var file = ".dist//" + folder;
//    return file;
//  });
//}

module.exports = {
  //entry: {
  //  'home': './Components/Home/main.js',
  //  'teste': './Components/Teste/main.js'
  //},
  //output: {
  //  path: path.resolve(__dirname, './dist'),
  //  filename: '[name].js',
  //  libraryTarget: 'umd'
  //},

  entry: './Scripts/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}