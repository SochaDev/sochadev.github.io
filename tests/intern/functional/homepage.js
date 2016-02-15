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
      formRequiredInputs: '.required',
      formSuccessMsg: '.messages.success ul li'
    };
    
    // 'name' attributes - for findByName(), findAllByName()
    var formElNames = {
      name: 'name',
      email: 'email',
      phone: 'phone',
      title: 'title',
      company: 'company',
      humanCheck: 'human',
      humanValid1: 'human_valid_input1',
      humanValid2: 'human_valid_input2',
      humanValid: 'human_valid',
      details: 'details'
    };
    
    // Displayed text against which to compare for assertions.
    var texts = {
      // Actual response from api.sochadev.com -
      // @see https://github.com/SochaDev/www-api/blob/master/index.php
      ajaxSuccessEmailSent: "Your message has been sent."
    };
    
    // Sample values to enter in form.
    var formVals = {
      name: 'Intern the Mighty',
      email: 'intern@example.com',
      company: 'InternJS Testing',
      details: 'I heard Socha Dev rocks!'
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
    
    bdd.it('should block submit if the human check is failed', function () {
      var command = this.remote;
      
      // Fill in some proper values before we move on to another thing to check.
      // This would be a good candidate for a page object method.
      return command
        .findByCssSelector(selectors.formWrap)
          // Use Array.reduce() technique to loop the form values we want to
          // enter and type() each into corresponding input.
          // Thx: http://stackoverflow.com/a/28621267/630806
          .then(function () {
            return Object.keys(formVals).reduce(function (chain, key) {
              console.log(formElNames[key] + ' => ' + formVals[key]);
              return chain
                .findByName(formElNames[key])
                  .type(formVals[key])
                .end();
            }, command);
          })
          .findByName(formElNames.humanCheck)
            // This expects a number; plug in something guaranteed wrong.
            .type('hello')
          .end()
          .findByCssSelector(selectors.formSubmit)
            .click()
          .end()
          // Check for the error message.
          // Note we've populated all required fields this time, so it should be
          // the only message - hence not findAll*().
          .findByCssSelector(selectors.formErrors)
            .getVisibleText()
            .then(function (text) {
              // @see theme.js - validate()
              expect(text, "Human check invalid error text").to.contain("you don't seem to have a human thing to discuss with us");
            })
          .end()
        .end();
    });
    
    bdd.it('should allow a legitimate form submit and successfully AJAX POST it', function () {
      var command = this.remote;
      
      // Note: we already filled in at least the required fields in the prior
      // test - these values are still present in the fields, even though
      // validation failed because of incorrect human-check value.
      // All we need to do this time is correctly fill in the human-check value.
      return command
        .findByCssSelector(selectors.formWrap)
          // Grab the two values that we need to add together...
          .then(function () {
            return Promise.all([
              command
                .findByName(formElNames.humanValid1)
                  .getAttribute('value'),
              command
                .findByName(formElNames.humanValid2)
                  .getAttribute('value')
            ]);
          })
          // Parse and add them, then clear our bad input from the previous
          // test and input the correct value.
          .then(function (humanValidOperands) {
            // Important: if humanAnswer lived outside the chain, was updated
            // during the chain, and then plugged in as arg to a method in the
            // chain - i.e. type(humanAnswer) - that method call and arg are
            // parsed BEFORE execution, meaning humanAnswer would still have its
            // initial value.
            // Doing this here within a then() avoids that scenario.
            var humanAnswer = parseInt(humanValidOperands[0]) + parseInt(humanValidOperands[1]);
            // The type() method must take a string.
            humanAnswer = String(humanAnswer);
            
            return command
              .findByName(formElNames.humanCheck)
                .clearValue()
                .type(humanAnswer)
              .end();
          })
          // And submit!
          .findByCssSelector(selectors.formSubmit)
            .click()
          .end()
          // This should actually send the email, so we wait for the
          // AJAX request and response by executing find*() on the expected
          // sucess message element. The find timeout applies here.
          .findByCssSelector(selectors.formSuccessMsg)
            .getVisibleText()
            .then(function (text) {
              expect(text, "Success (email sent) message").to.equal(texts.ajaxSuccessEmailSent);
            })
          .end();
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
