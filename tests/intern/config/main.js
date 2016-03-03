/**
 * Custom module to return environment-specific configuration for Intern testing.
 * 
 * This module is specified in `loaderOptions.packages` in intern.js. 
 * Test suites should inject it as `config` to retrieve the appropriate object
 * from `environment` var below.
 * 
 * The command-line call to run Intern tests may specify the environment via an
 * argument, e.g. `environment=ci`.
 */

define([
  'intern'
], function(intern) {

  'use strict';

  var instance = false;
  var environment = {
    local: {
      appUrl: 'http://127.0.0.1:4000'
    },
    ci: {
      appUrl: 'http://127.0.0.1:4000'
    }
  };

  return (function() {
    if (!instance) {
      var current = intern.args.environment || 'local';
      instance = environment[current];
    }

    return instance;
  }());

});
