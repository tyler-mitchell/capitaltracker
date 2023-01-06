module.exports = {
    displayName: 'web',
    resolver: '@nrwl/jest/plugins/resolver',
    preset: 'jest-expo/web',
    moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx'],
    coverageDirectory: '../../../coverage/apps/clients/web',
    transformIgnorePatterns: [
        '<rootDir>/node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|moti|solito)',
    ],
    moduleNameMapper: {
        '\\.svg$': '@nrwl/expo/plugins/jest/svg-mock',
    },
};
