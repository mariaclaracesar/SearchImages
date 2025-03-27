module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@components': './src/components',
          '@theme': './src/theme',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@routes': './src/routes',
          '@domain': './src/domain',
          '@api': './src/api',
        },
      },
    ],
  ],
};
