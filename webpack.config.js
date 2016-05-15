module.exports = {
  entry:  ['./index.js'],
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['transform-class-properties']
      }
    }, {
      test: /\.(scss|css)$/,
      loader: 'style!css!sass'
    },
    {
      test: /\.(jpe?g|png|gif|svg|eot|woff|ttf)$/i,
      loader: 'file'
    }
    ]
  },
  output: {
    filename: 'app.js',
    path: './dist',
    publicPath: './dist/'
  }
};
