const { defineConfig } = require('cypress');
const cypressFirebasePlugin = require('cypress-firebase').plugin;
const admin = require('firebase-admin');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      cypressFirebasePlugin(on, config, admin);
      // e2e testing node events setup code
    },
  },
});