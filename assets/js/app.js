/**
 * Helper script for theme.
 */

(function ($) {

  'use strict';

  var scrollMain = function(top) {
    $('html, body').animate({
      scrollTop: top
    }, 400);
  };

  var theme = {
    attach: function(context, settings) {

      // Do stuff here.

    }
  };

  var context = $('body');
  theme.attach(context, settings);

})(jQuery);
