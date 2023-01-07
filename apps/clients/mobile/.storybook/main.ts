import { rootMain } from '../../../../.storybook/main';

import type { StorybookConfig, Options } from '@storybook/core-common';

const config: StorybookConfig = {
    ...rootMain,
    core: { ...rootMain.core, builder: 'webpack5' },
    stories: [
        ...rootMain.stories,
        '../app/**/*.stories.@(js|jsx|ts|tsx|mdx)',
        '../../../../libs/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        ...(rootMain.addons || []),
        '@storybook/addon-ondevice-actions',
        '@storybook/addon-ondevice-backgrounds',
        '@storybook/addon-ondevice-controls',
        '@storybook/addon-ondevice-notes',
        // 'storybook-addon-theme-changer',
        // '@storybook/addon-links',
        // '@storybook/addon-essentials',
    ],
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
