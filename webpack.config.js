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
      test: /\.scss$/,
      loader: 'style!css!sass'
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'file'
    }
    ]
  },
  output: {
    filename: 'app.js',
    path: './dist'
  }
};
