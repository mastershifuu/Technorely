const { setHeadlessWhen } = require('@codeceptjs/configure');
let user = require('./test_data_config.js').user;

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Protractor: {
      url: `https://${user.username}:${user.password}@test-qa.technorely.com/login`,
      driver: 'hosted',
      browser: 'chrome',
      rootElement: 'body',
      angular: false,
      windowSize: 'maximize',
    }
  },
  include: {
    I: './steps_file.js',
    "loginStep": "./steps/login_steps.js",
    "commonStep": "./steps/common_steps.js",
    "providerStep": "./steps/provider_steps.js",
    "dashboardStep": "./steps/dashboard_steps.js",
  },
  bootstrap: false,
  mocha: {},
  name: 'Technorely',
  capabilities: {
    browserName: 'chrome',
    'chromeOptions' : {
      args: ['--disable-blink-features=BlockCredentialedSubresources']
    }
  },
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}