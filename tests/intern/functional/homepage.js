define([
  'require',
  'config',
  'intern!bdd',
  'intern/chai!expect',
  'intern/chai!assert'
],
function(require, config, bdd, expect, assert) {

  'use strict';

  bdd.describe('Homepage', function() {

    bdd.it('should have Contact Form validation', function() {

      var form = 'fieldset.contact';
      var human_valid = 0;

      // [ 'browser', 'driver', 'client', 'server' ]


      return this.remote
        .get(require.toUrl(config.appUrl + '/index.html'))
        // Click a contact form toggler.
        .findByCssSelector('a.form-toggler').click().end()
        .setFindTimeout(2000)
        // Get and sum the hidden inputs so we can pass the math check.
        .findByCssSelector(form + ' input[name="human_valid_input1"]')
        .getAttribute('value')
        .then(function(value) {
          human_valid += parseInt(value);
        })
        .end()
        .findByCssSelector(form + ' input[name="human_valid_input2"]')
        .then(function(value) {
          human_valid += parseInt(value);
        })
        .end()
        .findByCssSelector(form + ' input[name="human"]')
        .click().type(human_valid.toString()).end()
        .findByCssSelector(form + ' input[type=submit]').click().end()
        .findByCssSelector(form + ' .messages')
        .getVisibleText()
        .then(function(text) {


//          console.log('Name field validation:');
//          expect(text).to.have.string('name would be good')
//          //var obj = expect(text).to.contain('name would be good', 'Has name field validation');
        })
        .end();

//
//      return remote
//        .findByCssSelector(form + ' input[name="name"]')
//        .click().type('Nate').end()
//        .findByCssSelector(form + ' input[name="email"]')
//        .click().type('mow.nate@sochadev.com').end()
//        .findByCssSelector(form + ' textarea[name="details"]')
//        .click().type('Greetings from TravisCI! Please let Nate know if you got this one!').end()
//        .findByCssSelector(form + ' input[type=submit]').click().end()
//        .findByCssSelector(form + ' .messages')
//        .isDisplayed()
//        .then(function(p) {
//          //console.log(p);
//        })
//        .end();

    });
  });

});
