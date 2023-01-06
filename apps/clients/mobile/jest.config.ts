module.exports = {
    displayName: 'mobile',
    resolver: '@nrwl/jest/plugins/resolver',
    preset: 'react-native',
    transformIgnorePatterns: [
        '<rootDir>/node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|moti|solito)',
    ],
    moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
    moduleNameMapper: {
        '.svg': '@nrwl/expo/plugins/jest/svg-mock',
    },
};
