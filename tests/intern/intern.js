/**
 * Intern configuration options.
 * 
 * @see https://theintern.github.io/intern/#common-config
 */

define({
  capabilities: {
    'selenium-version': '2.48.2'
  },
  environments: [
    { browserName: 'firefox' }
  ],
  tunnel: 'NullTunnel',
  tunnelOptions: {
    // These set the URL params for the Selenium WebDriver tunnel.
    hostname: '127.0.0.1',
    port: 4444,
    verbose: false,
    url: 'http://selenium-release.storage.googleapis.com/2.48/selenium-server-standalone-2.48.2.jar'
  },
  // Option to leave the remote (browser window, if local and not using an
  // invisible browser) open after tests run.
  // @see http://theintern.github.io/intern/#option-leaveRemoteOpen
  leaveRemoteOpen: 'fail',
  maxConcurrency: 1,
  loaderOptions: {
    packages: [
      // Our custom module to specify per-environment configuration.
      // @see tests/intern/config/main.js
      { name: 'config', location: 'tests/intern/config' }
    ]
  },
  // Non-functional test suite(s) to run in each browser
  suites: [],
  // Functional test suite(s) to execute against each browser once non-functional tests are completed
  functionalSuites: [
    'tests/intern/functional/homepage'
  ],
  // A regular expression matching URLs to files that should not be included in code coverage analysis
  excludeInstrumentation: /^(?:tests|node_modules)\//
});
