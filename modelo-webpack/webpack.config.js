const path = require('path'); // CommonJS module system

module.exports = {
  mode: 'production', // Set the mode to development
  entry: './src/main.js', // Entry point of the application
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'), // Output directory
    filename: 'bundle.js' // Output file name
  },
  module: {
    rules: [{
      exclude: /node_modules/, // Exclude node_modules from processing
      test: /\.js$/, // Process only .js files
      use: {
        loader: 'babel-loader', // Use Babel loader for transpiling
        options: {
          presets: ['@babel/env'] // Use preset-env for modern JavaScript features
        }
      }
    }, {
      test: /\.css$/, // Process .css files
      use: ['style-loader', 'css-loader'] // Use style-loader and css-loader for handling CSS
    }]
  },
  devtool: 'source-map' // Enable source maps for easier debugging
};