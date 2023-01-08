import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';

export default defineConfig({
    e2e: nxE2EPreset(__dirname),
    env: {
        RETRIES: 5,
    },
    retries: {
        runMode: 5,
        openMode: 0,
    },
});
