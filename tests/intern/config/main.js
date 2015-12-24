// Custom app configuration module.
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
