/* eslint-disable turbo/no-undeclared-env-vars */
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const { DefinePlugin } = require('webpack');

const withTM = require('next-transpile-modules')([
  '@universal/ui',
  'react-native-web',
  'nativewind',
]);

/** @type {import('next').NextConfig} **/
const nextConfig = {
  reactStrictMode: false,
  webpack5: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  experimental: {
    forceSwcTransforms: true,
    swcPlugins: [[require.resolve('./plugins/swc_plugin_reanimated.wasm')]],
  },
  webpack(config, options) {
    if (!config.resolve) {
      config.resolve = {};
    }
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
      'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter$':
        'react-native-web/dist/vendor/react-native/NativeEventEmitter/RCTDeviceEventEmitter',
      'react-native/Libraries/vendor/emitter/EventEmitter$':
        'react-native-web/dist/vendor/react-native/emitter/EventEmitter',
      'react-native/Libraries/EventEmitter/NativeEventEmitter$':
        'react-native-web/dist/vendor/react-native/NativeEventEmitter',
    };

    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...(config.resolve?.extensions ?? []),
    ];

    if (!config.plugins) {
      config.plugins = [];
    }
    // Expose __DEV__ from Metro.
    config.plugins.push(
      new DefinePlugin({
        __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
      }),
    );
    return config;
  },
};

const transformer = withPlugins([withTM, withFonts, withImages], nextConfig);

module.exports = function (name, { defaultConfig }) {
  const config = transformer(name, {
    ...defaultConfig,
    ...nextConfig,
  });
  return config;
};
