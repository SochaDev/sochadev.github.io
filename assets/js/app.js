/**
 * Helper script for theme.
 */

(function ($) {

  'use strict';

  String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length == 0) return hash;
    for (var i=0; i < this.length; i++) {
      var char = this.charCodeAt(i);
      hash = ((hash<<5)-hash)+char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  };

  var theme = {
    attach: function(context, settings) {

      this.header = $('header', context);
      this.headerScrollOffset = (this.header.height() + 24);

      this.scrollStickyStuff(context, settings);
      this.contactForm(context, settings);

    },
    scrollMain: function(context, settings) {
      $('html, body').animate({
        scrollTop: settings.theme.top
      }, settings.theme.animation.speed * 2);
    },
    scrollStickyStuff: function(context, settings) {

      // Magical sticky header.
      $(window)
        .scroll(function() {
          var height = $(window).scrollTop();
          if (height  > theme.header.outerHeight()) {
            theme.header.fadeIn(settings.theme.animation.speed);
          }
          else if (theme.header.is(':visible')) {
            theme.header.fadeOut(settings.theme.animation.speed);
          }
        });

      // Magical scroll-to-top.
      $('a.top', theme.header)
        .click(function(evt) {
          evt.preventDefault();
          settings.theme.top = 0;
          theme.scrollMain(context, settings);
        });

      // Magical scroll-to-target.
      $('a[href*=#]', context)
        .click(function(evt) {
          evt.preventDefault();
          settings.theme.top = ($(this.hash).offset().top - theme.headerScrollOffset);
          theme.scrollMain(context, settings);
        });
    },
    contactForm: function(context, settings) {

      var $form = $('fieldset.contact', context);
      if (!$form.length) {
        return;
      }

      // Reset the form.
      var reset = function() {
        // Clear form fields.
        $form
          .find('input[type="text"], input[type="password"], input[type="file"], input[type="hidden"], input[type="email"], input[type="tel"], select, textarea')
          .val('')
          .find('input[type="radio"], input[type="checkbox"]')
          .removeAttr('checked')
          .removeAttr('selected');

        // Set up human checker for form submit.
        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        var rand1 = getRandomInt(0, 10);
        var rand2 = getRandomInt(0, 10);
        var hrand = parseInt(rand1 + rand2)
          .toString()
          .hashCode();
        var $human = $form.find('input#human');
        var $humanp = $human.parent('.form-item');

        $human.attr('placeholder', '* Human check! What is ' + rand1 + ' + ' + rand2 + '?');
        $humanp.find('input#human-valid').val(hrand);
        $humanp.find('input#human-valid-input1').val(rand1);
        $humanp.find('input#human-valid-input2').val(rand2);
      };
      reset();

      // Submit response handler.
      var respond = function(success, messages) {
        var $messages = $form
          .find('.messages')
          .removeClass('error success')
          .hide();

        // Print messages.
        var msgs = '';
        for (var i=0; i < messages.length; i++) {
          if (messages[i].length > 0) {
            msgs += '<p>' + messages[i] + '</p>';
          }
        }

        $messages
          .html(msgs)
          .addClass((success ? 'success' : 'error'))
          .fadeIn();

        // Scroll to messages.
        settings.theme.top = ($messages.offset().top - theme.headerScrollOffset);
        theme.scrollMain(context, settings);
        reset();
      };

      // Form submit handler.
      $form.submit(function(evt) {
        evt.preventDefault();

        // Convert data to object.
        var data = $form
          .serializeArray()
          .reduce(function(obj, item) {
              obj[item.name] = item.value;
              return obj;
            }, {});

        // Human check validation.
        var rand1 = parseInt(data.human_valid_input1);
        var rand2 = parseInt(data.human_valid_input2);
        var srand = parseInt(rand1 + rand2).toString();
        var arand = srand
          .hashCode()
          .toString();

        if (srand !== data.human || arand !== data.human_valid) {
          respond(false, ["Sorry " + data.name + ", you don't seem to have a human project to discuss with us."]);
          return false;
        }

        // Send data to RESTful endpoint.
        $.post(settings.api.baseUri + '/contact', JSON.stringify(data), function(response) {
            respond(true, response.messages);
          }, 'json')
          .fail(function() {
            respond(false, ["Error occurred sending data to <i>" + settings.api.baseUri + "</i>."]);
          });
      });

    }
  };

  var context = $('body');
  theme.attach(context, settings);

})(jQuery);
