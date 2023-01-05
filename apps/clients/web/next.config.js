const { withNx } = require('@nrwl/next/plugins/with-nx');
const { withExpo } = require('@expo/next-adapter');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
    'react-native-web',
    'nativewind',
]);

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
    // reanimated (and thus, Moti) doesn't work with strict mode currently...
    // https://github.com/nandorojo/moti/issues/224
    // https://github.com/necolas/react-native-web/pull/2330
    // https://github.com/nandorojo/moti/issues/224
    // once that gets fixed, set this back to true
    // reactStrictMode: true,
    // swcMinify: true,
    // experimental: {
    //     forceSwcTransforms: true, // set this to true to use reanimated + swc experimentally
    //     swcPlugins: [[require.resolve('./plugins/swc_plugin_reanimated.wasm')]],
    // },
    nx: {
        // Set this to true if you would like to to use SVGR
        // See: https://github.com/gregberge/svgr
        svgr: true,
    },
};

module.exports = async (phase, { defaultConfig }) => {
    const plugins = [withTM, withExpo];
    const updated = withPlugins(plugins, withNx(nextConfig));
    const config = updated(phase, {
        ...defaultConfig,
        ...nextConfig,
    });
    return config;
};
