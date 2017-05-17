const path = require('path');

module.exports = {

  resolve: {
    extensions: ['.js', '.jsx']
  },

  context: __dirname,

  entry: {
    app: [path.resolve(__dirname, 'src', 'index.jsx')]
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: path.resolve(__dirname, 'build')
  },
 
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    inline: true
  },

  /* Apartado importante de webpack, 
  ** el que realiza las transformaciones
  */
  module: {
    loaders: [
      {
        test: /(\.js|.jsx)$/,
        include: path.resolve(__dirname),
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        
        query: {
          presets: ['es2015'],
        }

      }
    ]
  }

}