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
          '@screens': './src/screens',
          '@routes': './src/routes',
        },
      },
    ],
  ],
};
