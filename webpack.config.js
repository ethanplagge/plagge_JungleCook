const path = require('path');

module.exports = {
mode: 'development',
entry: './dist/src/index.js',
output: {
path: path.resolve(__dirname, 'dist/app'),
filename: 'app.js',
},
module: {
  rules: [
    {
      test: /\.js$/, // Apply this rule to JavaScript files
      exclude: /node_modules/, // Don't transpile code from the node_modules directory
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'], // Use the preset-env Babel preset
          // You can include additional Babel plugins or presets here if needed
        },
      },
    },
    // ... other rules for other file types (like CSS or images)
  ],
},
//   this will set a watcher on the index.js file for any changes
watch: true,
};