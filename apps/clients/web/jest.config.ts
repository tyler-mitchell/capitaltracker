module.exports = {
    displayName: 'clients-web',
    resolver: '@nrwl/jest/plugins/resolver',
    moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx'],
    coverageDirectory: '../../../coverage/apps/clients/web',
    moduleNameMapper: {
        '\\.svg$': '@nrwl/expo/plugins/jest/svg-mock',
    },
    preset: 'jest-expo/web',
    transformIgnorePatterns: [
        'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
    ],
};
