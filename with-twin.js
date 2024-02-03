const path = require('path');

// The folders containing files importing twin.macro
const includedDirs = [
  path.resolve(__dirname, './components'),
  path.resolve(__dirname, './styled'),
  path.resolve(__dirname, './pages')
];

module.exports = function withTwin(nextConfig) {
  return {
    ...nextConfig,
    webpack(config, options) {
      const { dev, isServer } = options;
      config.module = config.module || {};
      config.module.rules = config.module.rules || [];
      config.module.rules.push({
        test: /\.js$/,
        include: includedDirs,
        use: [
          options.defaultLoaders.babel,
          {
            loader: 'babel-loader',
            options: {
              sourceMaps: dev,
              presets: [
                [
                  '@babel/preset-react',
                  { runtime: 'automatic', importSource: '@emotion/react' },
                ],
              ],
              plugins: [
                require.resolve('babel-plugin-macros'),
                require.resolve('@emotion/babel-plugin'),
              ],
            },
          },
        ],
      })

      if (!isServer) {
        config.resolve.fallback = {
          ...(config.resolve.fallback || {}),
          crypto: false,
          module: false,
          path: false,
          os: false,
          fs: false,
        };
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      } else {
        return config;
      }
    },
  }
};