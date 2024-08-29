const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === "chrome") {
          launchOptions.args.push("--ignore-certificate-errors");
        }
        return launchOptions;
      });
    },
    specPattern: "cypress/e2e/**/*.cy.js",
    baseUrl: "https://www.saucedemo.com",
    pageLoadTimeout: 60000,
    chromeWebSecurity: false,
  },
});
