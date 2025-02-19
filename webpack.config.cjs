const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  target: 'web', // important to ensure that webpack treats the NodeJS environment as a client one
  entry: './index.js',
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer']
    })
  ],
  node: false,
  output: {
    filename: 'macarrons_js_bundle.js',
    path: path.resolve(__dirname,   'dist'),
    libraryTarget: "var",
    library: "JSMacaroons" // name of the global variable in your client-side script
   },
  module: {
    rules: [
       {
        test: /\.(js|mjs|jsx|ts|tsx)$/, 
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
           }
         },
       },
     ],
   },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: { 
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
    "vm": require.resolve("vm-browserify")
    }
   },
};
