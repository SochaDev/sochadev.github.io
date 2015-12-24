define({

  // Note the custom loaderOptions.packages.config module as well; any shared
  // or environment-centric variables should be added there; suites themselves
  // will then inject "config" and call config.getEnvironment() to fetch the
  // appropriate config settings.

  capabilities: {
    'selenium-version': '2.48.2'
  },
  environments: [
    { browserName: 'firefox' }
    /*
    {browserName: 'internet explorer', version: '11', platform: 'WIN8'},
    {browserName: 'internet explorer', version: '10', platform: 'WIN8'},
    {browserName: 'internet explorer', version: '9', platform: 'WINDOWS'},
    {browserName: 'firefox', version: '37', platform: ['WINDOWS', 'MAC']},
    {browserName: 'chrome', version: '39', platform: ['WINDOWS', 'MAC']},
    {browserName: 'safari', version: '8', platform: 'MAC'}
    */
  ],
  tunnel: 'NullTunnel',
  tunnelOptions: {
    // These set the URL params for the Selenium WebDriver tunnel.
    hostname: '127.0.0.1',
    port: 4444,
    verbose: false,
    url: 'http://selenium-release.storage.googleapis.com/2.48/selenium-server-standalone-2.48.2.jar'
  },
  maxConcurrency: 1,
  loaderOptions: {
    packages: [
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
