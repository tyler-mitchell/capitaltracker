module.exports = function (api) {
    api.cache(true);
    return {
        presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
        plugins: [
            // https://expo.github.io/router/docs/intro#configure-the-babel-plugin
            require.resolve('expo-router/babel'),
            'react-native-reanimated/plugin',
            'nativewind/babel',
        ],
    };
};
