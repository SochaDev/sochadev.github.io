/**
 * Helper script for theme.
 */

(function ($) {

  'use strict';

  var theme = {
    attach: function(context, settings) {

      var $header = $('header', context);

      // Magical sticky header.
      $(window)
        .scroll(function() {
          var height = $(window).scrollTop();
          if (height  > $header.outerHeight()) {
            $header.fadeIn(settings.theme.animation.speed);
          }
          else if ($header.is(':visible')) {
            $header.fadeOut(settings.theme.animation.speed);
          }
        });

      // Magical scroll-to-top.
      $('a.top', $header)
        .click(function(evt) {
          evt.preventDefault();
          settings.theme.top = 0;
          theme.scrollMain(context, settings);
        });

      // Magical scroll-to-target.
      $('a[href*=#]', context)
        .click(function(evt) {
          evt.preventDefault();
          settings.theme.top = $(this.hash).offset().top;
          theme.scrollMain(context, settings);
        });

    },
    scrollMain: function(context, settings) {
      $('html, body').animate({
        scrollTop: settings.theme.top
      }, settings.theme.animation.speed * 2);
    }
  };

  var context = $('body');
  theme.attach(context, settings);

})(jQuery);
