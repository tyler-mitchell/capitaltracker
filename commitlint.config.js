const {
    utils: { getProjects },
} = require('@commitlint/config-nx-scopes');

module.exports = {
    rules: {
        'scope-enum': async (ctx) => [
            2,
            'always',
            [
                ...(await getProjects(
                    ctx,
                    ({ name, projectType }) =>
                        !name.includes('e2e') &&
                        !name.includes('sb') &&
                        projectType == 'application'
                )),
                'repo' // when project config has changed
            ],
        ],
    },
};
