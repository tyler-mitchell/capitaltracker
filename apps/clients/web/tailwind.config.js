const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        join(__dirname, 'pages/**/*!(*.stories|*.spec).{ts,tsx,html}'),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    plugins: [require('nativewind/tailwind/css')],
    important: 'html',
    theme: {
        extend: {},
    },
};
