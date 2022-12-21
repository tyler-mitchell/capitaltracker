import type { StorybookConfig } from '@storybook/core-common';

export const rootMain: StorybookConfig = {
    stories: [],
    core: { builder: 'webpack5', disableTelemetry: false },
    addons: ['@storybook/addon-essentials'],
    // webpackFinal: async (config, { configType }) => {
    //   // Make whatever fine-grained changes you need that should apply to all storybook configs

    //   // Return the altered config
    //   return config;
    // },
};
