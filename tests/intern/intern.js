define({

  capabilities: {

  },
  environments: [
    { browserName: 'firefox', version: '42', platform: 'LINUX' },
  ],
  tunnel: 'NullTunnel',
  tunnelOptions: { hostname: '127.0.0.1' },
  maxConcurrency: 2,

  loaderOptions: {
    packages: [ ]
  },
  // Non-functional test suite(s) to run in each browser
  suites: [ ],
  // Functional test suite(s) to execute against each browser once non-functional tests are completed
  functionalSuites: [
    'tests/intern/functional/index'
  ],
  // A regular expression matching URLs to files that should not be included in code coverage analysis
  excludeInstrumentation: /^(?:tests|node_modules)\//
});
