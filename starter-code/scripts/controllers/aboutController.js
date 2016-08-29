(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: PARTIALLY DONE: Use your DOM skills to reveal only the about section! */
    $('#about').show();
    $('section').not('#about').hide();
  };

  module.aboutController = aboutController;
})(window);
