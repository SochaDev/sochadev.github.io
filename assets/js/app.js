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
      // Convert to 32bit integer.
      hash = hash & hash;
    }

    return hash;
  };

  var theme = {
    attach: function(context, settings) {

      this.header = $('header', context);
      this.headerScrollOffset = (this.header.height() + (settings.theme.margin * 2));

      this.scrollStickyStuff(context, settings);
      this.contactForm(context, settings);
      this.toolTips(context, settings);
      this.projectList(context, settings);

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

          $('#modal, fieldset.contact, .messages, .tooltip .tip', context)
            .fadeOut(settings.theme.animation.speed);

          theme.scrollMain(context, settings);
        });

      // Magical scroll-to-target.
      if (settings.page.url == '/') {
        $('p a[href*=#]', context)
          .click(function(evt) {
            evt.preventDefault();
            settings.theme.top = ($(this.hash).offset().top - theme.headerScrollOffset);
            theme.scrollMain(context, settings);
          });
      }
    },
    toolTips: function(context, settings) {

      $('.tooltip', context)
        .click(function(evt) {
          evt.preventDefault();


          var $self = $(this);
          var message = $self.attr('data-tip');
          if (!message) {
            return;
          }

          var $tip = $('.tip', $self);
          if (!$tip.length) {
            $tip = $(document.createElement('div'))
              .addClass('tip')
              .html(message.replace('\\n', '<br>'))
              .hide();
            $self
              .append($tip);
          }

          var offset = ($(window).width() - $self.offset().left);
          var margin = ($tip.outerWidth() / 2);
          if (offset - $tip.outerWidth() >= $tip.outerWidth()) {
            margin = -$tip.outerWidth();
          }
          else if (offset - $tip.outerWidth() <= 0) {
            margin = Math.abs(offset - $tip.outerWidth()) + settings.theme.margin;
          }
          if ($tip.outerWidth() >= offset) {
            $tip.css({ marginLeft: (-margin) + 'px' });
          }

          $('.tip', context)
            .not($tip)
            .hide();
          $tip
            .toggle();
        });

    },
    contactForm: function(context, settings) {

      var $form = $('fieldset.contact', context);
      if (!$form.length) {
        return;
      }

      // Show/hide form.
      var $toggler = $('a.form-toggler', context);
      $toggler
        .click(function(evt) {
          evt.preventDefault();

          if ($form.is(':visible')) {
            $form.slideUp(settings.theme.animation.speed);
          }
          else {
            $('.messages', $form).hide();
            $form.slideDown(settings.theme.animation.speed);
          }
        });

      if (document.location.hash === '#contact') {
        $form.hide();
        $toggler.first().click();
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
        var msgs = '<ul>';
        for (var i=0; i < messages.length; i++) {
          if (messages[i].length > 0) {
            msgs += '<li>' + messages[i] + '</li>';
          }
        }
        msgs += '</li>';

        $messages
          .html(msgs)
          .addClass((success ? 'success' : 'error'))
          .fadeIn();

        // Scroll to messages.
        settings.theme.top = ($messages.offset().top - theme.headerScrollOffset);
        theme.scrollMain(context, settings);
        reset();
      };
      // Submit validation.
      var validate = function(data, pass) {

        var messages = new Array();
        var $human = $form.find('input#human');

        // Validate *.required fields.
        $.each($('.required', $form), function(ix, e) {
          var $input = $(e);
          if (!$input.val()) {
            messages.push($input.attr('data-msg'));
          }
        });

        if (pass === 1) {
          // Do human check.
          var rand1 = parseInt(data.human_valid_input1);
          var rand2 = parseInt(data.human_valid_input2);
          var srand = parseInt(rand1 + rand2).toString();
          var arand = srand
            .hashCode()
            .toString();
          if (srand !== data.human || arand !== data.human_valid) {
            messages.push("Sorry" + (data.name.length ? " " + data.name : "") + ", you don't seem to have a human thing to discuss with us.");
          }
        }

        // Invalid, print messages.
        if (messages.length) {
          respond(false, messages);
        }

        return (messages.length === 0);
      };

      // Form submit handler.
      $form.submit(function(evt) {
        evt.preventDefault();

        // Convert data to object.
        var data = $form
          .serializeArray()
          .reduce(function(obj, item) {
              obj[item.name] = item.value.trim();
              return obj;
            }, {});

        // Do some validation.
        var valid = validate(data, 0);
        if (valid) {
          valid = validate(data, 1);
        }
        if (!valid) {
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

    },
    projectList: function(context, settings) {

      var $modal = $('#modal', context);

      $('ul.projects a', context)
        .click(function(evt) {
          evt.preventDefault();

          var $self = $(this);
          var project = settings.projects[$self.attr('data-project')];
          var $content = $modal.children('.modal');

          if ($(window).width() > settings.theme.breakpoints.md) {
            $content
              .height($modal.parents('.stripe').height() - (settings.theme.margin * 6));
          }

          $content
            .find('.name')
            .text(project.name)
            .attr('href', project.url)
            .show();
          $content
            .find('.client')
            .text(project.client)
            .attr('href', project.clientUrl)
            .show();
          $content
            .find('.partner')
            .toggle(project.client !== project.name);
          $content.find('.description')
            .html(project.description.replace("\\n\\n", '</p><p>'));
          $content
            .find('img')
            .attr('src', (project.image.indexOf('http') !== 0 ? (settings.theme.images + '/projects/' + project.image + '.jpg') : project.image))
            .attr('alt', project.name);

          if (project.whiteLabel) {
            $content
              .find('.name, .client')
              .hide();
            $content
              .find('.name-anon')
              .text(project.name)
              .show();
            $content
              .find('.client-anon')
              .text(project.client)
              .show();
            $content
              .find('img')
              .attr('src', settings.theme.logo.replace('s=36', 's=607'));
          }
          else {
            $content
              .find('.name-anon, .client-anon')
              .text('')
              .hide();
          }

          $modal.fadeIn(settings.theme.animation.speed);
          settings.theme.top = ($modal.offset().top - theme.headerScrollOffset);
          theme.scrollMain(context, settings);
        });

      $modal
        .click(function(evt) {
          $modal.fadeOut(settings.theme.animation.speed);
        });
    }
  };

  var context = $('body');
  theme.attach(context, settings);

})(jQuery);
