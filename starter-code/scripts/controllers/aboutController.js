(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: DONE Use your DOM skills to reveal only the about section! */
    $('#articles, #ajax-spinner').fadeOut();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
