import { rootMain } from '../../../../.storybook/main';
import type { StorybookConfig, Options } from '@storybook/core-common';
import path from 'path';

const config: StorybookConfig = {
    ...rootMain,
    core: { ...rootMain.core, builder: 'webpack5' },
    stories: [
        ...rootMain.stories,
        '../pages/**/*.stories.@(js|jsx|ts|tsx|mdx)',
        '../../../../libs/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    ],
    addons: [
        ...(rootMain.addons || []),
        '@nrwl/react/plugins/storybook',
        'storybook-addon-swc',
        {
            name: 'storybook-addon-next',
            options: {
                nextConfigPath: path.resolve(__dirname, '../next.config.js'),
            },
        },
        {
            name: '@storybook/addon-react-native-web',
            options: {
                modulesToTranspile: ['solito', 'nativewind', 'moti'],
                babelPlugins: [
                    'react-native-reanimated/plugin',
                    'nativewind/babel',
                    '@babel/plugin-proposal-export-namespace-from',
                ],
            },
        },
    ],
    framework: '@storybook/react',
    webpackFinal: async (config, { configType }: Options) => {
        // apply any global webpack configs that might have been specified in .storybook/main.ts
        if (rootMain.webpackFinal) {
            config = await rootMain.webpackFinal(config, { configType } as Options);
        }

        // add your own webpack tweaks if needed

        return config;
    },
};

module.exports = config;
