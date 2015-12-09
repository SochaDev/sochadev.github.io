define({

  capabilities: {
  },
  environments: [
    { browserName: 'chrome', platform: ['LINUX'] },
    { browserName: 'firefox', platform: ['LINUX'] }
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

  },
  maxConcurrency: 2,
  loaderOptions: {
    packages: []
  },
  // Non-functional test suite(s) to run in each browser
  suites: [],
  // Functional test suite(s) to execute against each browser once non-functional tests are completed
  functionalSuites: [
    'tests/intern/functional/index'
  ],
  // A regular expression matching URLs to files that should not be included in code coverage analysis
  excludeInstrumentation: /^(?:tests|node_modules)\//
});
