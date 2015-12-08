define([
  'require',
  'intern!bdd',
  'intern/chai!expect',
  'intern/chai!assert'
],
function(require, bdd, expect, assert) {
  var url = 'http://localhost:4000';

  bdd.describe('Homepage', function() {

    bdd.it('should have Contact Form validation', function() {

      var remote = this.remote
        .get(require.toUrl(url));

      var form = 'fieldset.contact';
      var human_valid = 0;

      return remote
        .findByCssSelector(form + ' input[name="human_valid_input1"]')
        .getAttribute('value')
        .then(function(value) {
          human_valid += parseInt(value);
        })
        .end()
        .findByCssSelector(form + ' input[name="human_valid_input2"]')
        .getAttribute('value')
        .then(function(value) {
          human_valid += parseInt(value);
          human_valid = human_valid.toString();

          return remote
            .findByCssSelector('a.form-toggler')
            .click().end()
            .findByCssSelector(form + ' input[name="name"]')
            .click().type('Elaine').end()
            .findByCssSelector(form + ' input[name="email"]')
            .click().type('tracker@sochadev.com').end()
            .findByCssSelector(form + ' input[name="human"]')
            .click().type(human_valid).end()
            .findByCssSelector(form + ' textarea[name="details"]')
            .click().type('Just a [real] test!').end()
            .findByCssSelector(form + ' input[type=submit]')
            .click().end()
            .findByCssSelector(form + ' .messages')
            .setFindTimeout(5000)
            .getVisibleText()
            .then(function(text) {
    console.log(text);
                //var result = expect(text).to
                  //.contain('A name would be good.')
                  //.contain('An email would be good.');

            });
        })
        .end();

    });
  });

});
