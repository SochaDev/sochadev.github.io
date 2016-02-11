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
    
    // Selectors - for findByCssSelector(), findAllByCssSelector()
    var selectors = {
      formToggleLink: 'a.form-toggler',
      formWrap: 'fieldset.contact',
      formSubmit: 'input[type="submit"]',
      formMessagesWrap: '.messages',
      formErrors: '.messages.error ul li',
      formRequiredInputs: '.required'
    };
    
    // 'name' attributes - for findByName(), findAllByName()
    var formElNames = {
      name: 'name',
      email: 'email',
      phone: 'phone',
      title: 'title',
      company: 'company',
      humanCheck: 'human',
      humanAdd1: 'human_valid_input1',
      humanAdd2: 'human_valid_input2',
      humanValid: 'human_valid',
      details: 'details'
    };
    
    // Displayed text for assertions.
    var text = {
      nameRequired: "A name would be good.",
      emailRequired: "An email would be good.",
      humanCheckRequired: "Can haz human check?",
      detailsRequired: "Maybe a few details?"
    };
    
    
    // --- SETUP ---
    // This runs before entire (outermost) suite.
    bdd.before(function () {
      var command = this.remote;
      
      return command
        // Ensure the browser window is maximized for all tests. This is our
        // best shot at triggering desktop styling (so we can depend on finding
        // and interacting with certain known elements).
        .maximizeWindow()
        // Set how long find* commands will attempt to get an element.
        // Setting this once persists through the suite.
        .setFindTimeout(2000);
    });
    
    
    // --- TESTS ---
    bdd.it('should not show the contact form on page load', function() {
      var command = this.remote;
      
      return command
        .get(require.toUrl(config.appUrl + '/index.html'))
        .findByCssSelector(selectors.formWrap)
          .isDisplayed()
          .then(function (visible) {
            // 'ok' tests for truthy; .not.ok negates to test for falsy.
            expect(visible, "Contact form initial visibility").to.not.be.ok;
          })
        .end();
    });
    
    bdd.it('should display the contact form upon clicking toggle link', function () {
      var command = this.remote;
      
      return command
        .findByCssSelector(selectors.formToggleLink)
          .click()
        .end()
        // Wait for jQuery slideUp() animation.
        .sleep(500)
        .findByCssSelector(selectors.formWrap)
          .isDisplayed()
          .then(function (visible) {
            expect(visible, "Contact form visibility after clicking toggle link").to.be.ok;
          })
        .end();
    });
    
    bdd.it('should not display the form\'s messages container initially', function () {
      var command = this.remote;
      
      return command
        .findByCssSelector(selectors.formWrap + ' ' + selectors.formMessagesWrap)
          .isDisplayed()
          .then(function (visible) {
            expect(visible, "Error message container visibility").to.not.be.ok;
          })
        .end();
    });
    
    bdd.it('should show error messages when required fields are left empty', function () {
      var command = this.remote;
      
      return command
        // Submit the form with nothing filled in.
        .findByCssSelector(selectors.formWrap + ' ' + selectors.formSubmit)
         .click()
        .end()
        // Give it half a sec to validate with JS.
        .sleep(500)
        .findByCssSelector(selectors.formWrap + ' ' + selectors.formMessagesWrap)
          .isDisplayed()
          .then(function (visible) {
            expect(visible, "Message container visibility").to.be.ok;
          })
          .getAttribute('class')
          .then(function (classesStr) {
            expect(classesStr, "Message container CSS classes").to.contain('error');
          })
        .end()
        .then(function () {
          return Promise.all([
            // Collect intended error messages on all required inputs.
            command
              .findAllByCssSelector(selectors.formWrap + ' ' + selectors.formRequiredInputs)
              .getAttribute('data-msg'),
            // Get actual displayed error messages.
            command
              .findAllByCssSelector(selectors.formWrap + ' ' + selectors.formErrors)
              .getVisibleText()
          ]);
        })
        .then(function (results) {
          // Since we didn't input anything, messages from all required inputs
          // should appear.
          var intendedErrors = results[0];
          var displayedErrors = results[1];
          expect(displayedErrors, "Displayed error messages").to.deep.equal(intendedErrors);
        });
    });
    
    /*
    bdd.it('should have Contact Form validation', function() {
      var command = this.remote;

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
    */
  });

});
