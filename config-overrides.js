module.exports = {
    // The Webpack config to use when compiling your react app for development or production.
    webpack: function (config) {
      // ...add your webpack config
      config.module.rules.push({
        test: /\.scss$/,
        use: [
          {
            loader: 'sass-resources-loader',
            options: {
              // Or array of paths
              resources: [
                './src/index.scss',
                './src/components/atoms/**/index.scss',
                // './src/components/molecules/**/index.scss',
                // './src/components/organisms/**/index.scss',
              ],
            },
          },
        ],
      });
  
      return config;
    },
  };
  